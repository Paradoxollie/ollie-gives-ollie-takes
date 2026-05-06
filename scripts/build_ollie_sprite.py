from __future__ import annotations

from collections import deque
from io import BytesIO
from pathlib import Path

import imageio.v3 as iio
import numpy as np
from PIL import Image, ImageFilter
from rembg import remove


SOURCE_VIDEO = Path(r"C:/Users/pierr/Downloads/Video/Ollie 2.mp4")
OUTPUT_DIR = Path(r"D:/ollie-gives-ollie-takes/public/images/ollie")
ANIMATION_PATH = OUTPUT_DIR / "ollie-idle-anim.png"
POSTER_PATH = OUTPUT_DIR / "ollie-idle-poster.png"

# This segment is the cleanest near-loop in the new video. Using every frame
# keeps the animation materially smoother than the old sparse sprite sampling.
LOOP_START = 75
LOOP_END = 132
TARGET_HEIGHT = 320
PADDING = 32
FRAME_DURATION_MS = 45
ALPHA_THRESHOLD = 14
ALIGN_SEARCH_X = 12
ALIGN_SEARCH_Y = 8


def load_frame(index: int) -> Image.Image:
    frame = iio.imread(SOURCE_VIDEO, index=index, plugin="pyav")
    return Image.fromarray(frame).convert("RGBA")


def remove_background(image: Image.Image) -> Image.Image:
    buffer = BytesIO()
    image.save(buffer, format="PNG")
    result = remove(buffer.getvalue(), alpha_matting=False)
    return Image.open(BytesIO(result)).convert("RGBA")


def keep_largest_component(image: Image.Image) -> Image.Image:
    rgba = np.asarray(image, dtype=np.uint8).copy()
    alpha_mask = rgba[..., 3] > ALPHA_THRESHOLD
    if not alpha_mask.any():
        return image

    height, width = alpha_mask.shape
    visited = np.zeros_like(alpha_mask, dtype=bool)
    largest_component: list[tuple[int, int]] = []

    for start_y in range(height):
        for start_x in range(width):
            if not alpha_mask[start_y, start_x] or visited[start_y, start_x]:
                continue

            queue = deque([(start_y, start_x)])
            visited[start_y, start_x] = True
            component: list[tuple[int, int]] = []

            while queue:
                y, x = queue.popleft()
                component.append((y, x))

                for next_y, next_x in ((y - 1, x), (y + 1, x), (y, x - 1), (y, x + 1)):
                    if 0 <= next_y < height and 0 <= next_x < width and alpha_mask[next_y, next_x] and not visited[next_y, next_x]:
                        visited[next_y, next_x] = True
                        queue.append((next_y, next_x))

            if len(component) > len(largest_component):
                largest_component = component

    keep_mask = np.zeros_like(alpha_mask, dtype=np.uint8)
    for y, x in largest_component:
        keep_mask[y, x] = 255

    # Dilate a little so anti-aliased edge pixels stay attached to the subject.
    grown_mask = Image.fromarray(keep_mask, mode="L").filter(ImageFilter.MaxFilter(5))
    keep_alpha = np.asarray(grown_mask) > 0
    rgba[~keep_alpha, 3] = 0

    return Image.fromarray(rgba, mode="RGBA")


def to_gray_alpha_arrays(image: Image.Image) -> tuple[np.ndarray, np.ndarray]:
    rgba = np.asarray(image, dtype=np.float32)
    gray = rgba[..., 0] * 0.299 + rgba[..., 1] * 0.587 + rgba[..., 2] * 0.114
    alpha = rgba[..., 3] > ALPHA_THRESHOLD
    return gray, alpha


def shifted_overlap_slices(width: int, height: int, dx: int, dy: int):
    src_x0 = max(0, -dx)
    src_y0 = max(0, -dy)
    src_x1 = min(width, width - dx) if dx >= 0 else width
    src_y1 = min(height, height - dy) if dy >= 0 else height

    dst_x0 = max(0, dx)
    dst_y0 = max(0, dy)
    dst_x1 = dst_x0 + (src_x1 - src_x0)
    dst_y1 = dst_y0 + (src_y1 - src_y0)

    return (src_y0, src_y1, src_x0, src_x1), (dst_y0, dst_y1, dst_x0, dst_x1)


def find_best_alignment(reference: Image.Image, candidate: Image.Image) -> tuple[int, int]:
    ref_gray, ref_alpha = to_gray_alpha_arrays(reference)
    cand_gray, cand_alpha = to_gray_alpha_arrays(candidate)
    height, width = ref_gray.shape

    best_score: float | None = None
    best_shift = (0, 0)

    for dy in range(-ALIGN_SEARCH_Y, ALIGN_SEARCH_Y + 1):
        for dx in range(-ALIGN_SEARCH_X, ALIGN_SEARCH_X + 1):
            (src_y0, src_y1, src_x0, src_x1), (dst_y0, dst_y1, dst_x0, dst_x1) = shifted_overlap_slices(width, height, dx, dy)

            ref_alpha_region = ref_alpha[dst_y0:dst_y1, dst_x0:dst_x1]
            cand_alpha_region = cand_alpha[src_y0:src_y1, src_x0:src_x1]
            overlap = ref_alpha_region & cand_alpha_region
            overlap_count = int(overlap.sum())
            if overlap_count < 1500:
                continue

            ref_region = ref_gray[dst_y0:dst_y1, dst_x0:dst_x1]
            cand_region = cand_gray[src_y0:src_y1, src_x0:src_x1]
            diff = np.abs(ref_region - cand_region)[overlap]
            score = float(diff.mean()) + (ref_alpha.sum() + cand_alpha.sum() - 2 * overlap_count) * 0.0015

            if best_score is None or score < best_score:
                best_score = score
                best_shift = (dx, dy)

    return best_shift


def apply_shift(image: Image.Image, dx: int, dy: int) -> Image.Image:
    width, height = image.size
    source = np.asarray(image, dtype=np.uint8)
    target = np.zeros_like(source)
    (src_y0, src_y1, src_x0, src_x1), (dst_y0, dst_y1, dst_x0, dst_x1) = shifted_overlap_slices(width, height, dx, dy)
    target[dst_y0:dst_y1, dst_x0:dst_x1] = source[src_y0:src_y1, src_x0:src_x1]
    return Image.fromarray(target, mode="RGBA")


def stabilize_frames(frames: list[Image.Image]) -> list[Image.Image]:
    if not frames:
        return frames

    stabilized = [frames[0]]
    reference = frames[0]
    for frame in frames[1:]:
        dx, dy = find_best_alignment(reference, frame)
        stabilized.append(apply_shift(frame, dx, dy))
    return stabilized


def build_loop_frames() -> list[Image.Image]:
    prepared: list[Image.Image] = []
    bounds: list[tuple[int, int, int, int]] = []

    for index in range(LOOP_START, LOOP_END + 1):
        frame = keep_largest_component(remove_background(load_frame(index)))
        bbox = frame.getbbox()
        if bbox is None:
            raise RuntimeError(f"Empty frame after background cleanup: {index}")
        prepared.append(frame)
        bounds.append(bbox)

    left = min(b[0] for b in bounds) - PADDING
    top = min(b[1] for b in bounds) - PADDING
    right = max(b[2] for b in bounds) + PADDING
    bottom = max(b[3] for b in bounds) + PADDING

    crop_width = right - left
    crop_height = bottom - top
    scale = TARGET_HEIGHT / crop_height
    target_width = round(crop_width * scale)

    rendered: list[Image.Image] = []
    for frame in prepared:
        cropped = frame.crop((left, top, right, bottom))
        resized = cropped.resize((target_width, TARGET_HEIGHT), Image.Resampling.LANCZOS)
        rendered.append(resized)

    return stabilize_frames(rendered)


def main() -> int:
    if not SOURCE_VIDEO.exists():
        raise FileNotFoundError(f"Source video not found: {SOURCE_VIDEO}")

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    rendered = build_loop_frames()
    if not rendered:
        raise RuntimeError("No rendered frames were produced.")

    rendered[0].save(POSTER_PATH)
    rendered[0].save(
        ANIMATION_PATH,
        format="PNG",
        save_all=True,
        append_images=rendered[1:],
        duration=FRAME_DURATION_MS,
        loop=0,
        optimize=False,
        disposal=2,
        blend=0,
    )

    print(
        {
            "frames": len(rendered),
            "frameSize": list(rendered[0].size),
            "animation": str(ANIMATION_PATH),
            "poster": str(POSTER_PATH),
        }
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
