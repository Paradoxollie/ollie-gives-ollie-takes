from __future__ import annotations

import argparse
from collections import deque
from dataclasses import dataclass
from pathlib import Path

from PIL import Image, ImageDraw


GRID_COLS = 7
GRID_ROWS = 6
SHEET_FRAME_SIZE = 512
UI_FRAME_SIZE = 256

WALK_IN_PLACE_FRAMES = [
    (1, 1),  # character right foot lifted
    (0, 1),  # both feet on the ground
    (3, 1),  # character left foot lifted
    (0, 4),  # both feet on the ground
]

READY_FRAMES = [
    (0, 1),
    (1, 1),
    (2, 1),
    (1, 1),
    (0, 1),
]

WALK_RIGHT_FRAMES = [
    (0, 5),
    (1, 5),
    (2, 5),
    (3, 5),
    (0, 6),
    (1, 6),
    (2, 6),
    (3, 6),
]

HAPPY_FRAMES = [
    (5, 0),
    (5, 1),
    (5, 6),
    (5, 1),
    (5, 0),
]

HIT_FRAMES = [
    (0, 0),
    (1, 0),
    (2, 0),
    (1, 0),
    (0, 0),
]


@dataclass(frozen=True)
class PreparedFrame:
    image: Image.Image
    bbox: tuple[int, int, int, int]


def default_source() -> Path:
    return Path.home() / "Downloads" / "ChatGPT Image 27 avr. 2026, 08_02_52.png"


def is_background(pixel: tuple[int, int, int, int]) -> bool:
    r, g, b, a = pixel
    if a == 0:
        return True
    if r < 226 or g < 226 or b < 226:
        return False
    return max(r, g, b) - min(r, g, b) < 26


def projection_bands(values: list[int], threshold: int, min_len: int) -> list[tuple[int, int]]:
    bands: list[tuple[int, int]] = []
    start: int | None = None
    for index, value in enumerate(values):
        if value > threshold and start is None:
            start = index
        if (value <= threshold or index == len(values) - 1) and start is not None:
            end = index if value <= threshold else index + 1
            if end - start >= min_len:
                bands.append((start, end))
            start = None
    return bands


def detect_sprite_bands(sheet: Image.Image) -> tuple[list[tuple[int, int]], list[tuple[int, int]]]:
    rgba = sheet.convert("RGBA")
    pixels = rgba.load()
    width, height = rgba.size
    row_projection = [0] * height
    col_projection = [0] * width

    for y in range(height):
        for x in range(width):
            if not is_background(pixels[x, y]):
                row_projection[y] += 1
                col_projection[x] += 1

    rows = projection_bands(row_projection, threshold=20, min_len=20)
    cols = projection_bands(col_projection, threshold=20, min_len=20)
    if len(rows) != GRID_ROWS or len(cols) != GRID_COLS:
        raise RuntimeError(f"Expected {GRID_ROWS}x{GRID_COLS} sprite bands, got {len(rows)} rows and {len(cols)} cols")
    return rows, cols


def remove_connected_background(image: Image.Image) -> Image.Image:
    rgba = image.convert("RGBA")
    pixels = rgba.load()
    width, height = rgba.size
    seen: set[tuple[int, int]] = set()
    queue: deque[tuple[int, int]] = deque()

    for x in range(width):
        queue.append((x, 0))
        queue.append((x, height - 1))
    for y in range(height):
        queue.append((0, y))
        queue.append((width - 1, y))

    while queue:
        x, y = queue.popleft()
        if (x, y) in seen or x < 0 or y < 0 or x >= width or y >= height:
            continue
        seen.add((x, y))
        if not is_background(pixels[x, y]):
            continue

        r, g, b, _ = pixels[x, y]
        pixels[x, y] = (r, g, b, 0)
        queue.append((x + 1, y))
        queue.append((x - 1, y))
        queue.append((x, y + 1))
        queue.append((x, y - 1))

    return rgba


def keep_largest_alpha_component(image: Image.Image) -> Image.Image:
    rgba = image.convert("RGBA")
    alpha = rgba.getchannel("A")
    pixels = alpha.load()
    width, height = alpha.size
    seen: set[tuple[int, int]] = set()
    components: list[list[tuple[int, int]]] = []

    for y in range(height):
        for x in range(width):
            if pixels[x, y] == 0 or (x, y) in seen:
                continue
            component: list[tuple[int, int]] = []
            queue: deque[tuple[int, int]] = deque([(x, y)])
            seen.add((x, y))
            while queue:
                px, py = queue.popleft()
                component.append((px, py))
                for nx, ny in ((px + 1, py), (px - 1, py), (px, py + 1), (px, py - 1)):
                    if nx < 0 or ny < 0 or nx >= width or ny >= height:
                        continue
                    if pixels[nx, ny] == 0 or (nx, ny) in seen:
                        continue
                    seen.add((nx, ny))
                    queue.append((nx, ny))
            components.append(component)

    if not components:
        return rgba

    largest = set(max(components, key=len))
    cleaned = Image.new("RGBA", rgba.size, (0, 0, 0, 0))
    source_pixels = rgba.load()
    cleaned_pixels = cleaned.load()
    for x, y in largest:
        cleaned_pixels[x, y] = source_pixels[x, y]
    return cleaned


def prepare_frame(frame: Image.Image) -> PreparedFrame:
    transparent = keep_largest_alpha_component(remove_connected_background(frame))
    bbox = transparent.getchannel("A").getbbox()
    if bbox is None:
        raise RuntimeError("Empty hedgehog frame after background removal")
    return PreparedFrame(image=transparent.crop(bbox), bbox=bbox)


def crop_grid_frame(
    sheet: Image.Image,
    row: int,
    col: int,
    row_bands: list[tuple[int, int]],
    col_bands: list[tuple[int, int]],
) -> Image.Image:
    width, height = sheet.size
    x0, x1 = col_bands[col]
    y0, y1 = row_bands[row]
    pad = 12
    return sheet.crop((max(0, x0 - pad), max(0, y0 - pad), min(width, x1 + pad), min(height, y1 + pad)))


def normalize_prepared_frame(prepared: PreparedFrame, size: int, ratio: float, bottom_pad: float = 0.06) -> Image.Image:
    cropped = prepared.image
    resized = cropped.resize((max(1, round(cropped.width * ratio)), max(1, round(cropped.height * ratio))), Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    x = (size - resized.width) // 2
    y = size - resized.height - round(size * bottom_pad)
    canvas.alpha_composite(resized, (x, y))
    return canvas


def normalize_sequence(frames: list[Image.Image], size: int, scale: float = 0.86) -> list[Image.Image]:
    prepared_frames = [prepare_frame(frame) for frame in frames]
    max_width = max(frame.image.width for frame in prepared_frames)
    max_height = max(frame.image.height for frame in prepared_frames)
    ratio = min((size * scale) / max_width, (size * scale) / max_height)
    return [normalize_prepared_frame(frame, size, ratio) for frame in prepared_frames]


def build_sheet(frames: list[Image.Image]) -> Image.Image:
    output = Image.new("RGBA", (SHEET_FRAME_SIZE * len(frames), SHEET_FRAME_SIZE), (0, 0, 0, 0))
    for index, frame in enumerate(frames):
        output.alpha_composite(frame, (index * SHEET_FRAME_SIZE, 0))
    return output


def save_apng(path: Path, frames: list[Image.Image], duration_ms: int) -> None:
    ui_frames = [frame.resize((UI_FRAME_SIZE, UI_FRAME_SIZE), Image.Resampling.LANCZOS) for frame in frames]
    ui_frames[0].save(
        path,
        save_all=True,
        append_images=ui_frames[1:],
        duration=duration_ms,
        loop=0,
        disposal=2,
        optimize=True,
    )


def save_contact_sheet(path: Path, named_frames: dict[str, list[Image.Image]]) -> None:
    thumb = 128
    label_h = 24
    gap = 10
    rows = []
    for name, frames in named_frames.items():
        row = Image.new("RGBA", (len(frames) * (thumb + gap) + gap, thumb + label_h + gap * 2), (18, 22, 30, 255))
        draw = ImageDraw.Draw(row)
        draw.text((gap, 4), name, fill=(255, 255, 255, 255))
        for index, frame in enumerate(frames):
            x = gap + index * (thumb + gap)
            y = label_h + gap
            backing = Image.new("RGBA", (thumb, thumb), (232, 238, 246, 255))
            backing_draw = ImageDraw.Draw(backing)
            for by in range(0, thumb, 16):
                for bx in range(0, thumb, 16):
                    if (bx // 16 + by // 16) % 2:
                        backing_draw.rectangle((bx, by, bx + 15, by + 15), fill=(210, 218, 228, 255))
            row.alpha_composite(backing, (x, y))
            row.alpha_composite(frame.resize((thumb, thumb), Image.Resampling.LANCZOS), (x, y))
            draw.rectangle((x, y, x + thumb, y + thumb), outline=(74, 222, 255, 255), width=2)
        rows.append(row)

    width = max(row.width for row in rows)
    height = sum(row.height for row in rows)
    output = Image.new("RGBA", (width, height), (18, 22, 30, 255))
    y = 0
    for row in rows:
        output.alpha_composite(row, (0, y))
        y += row.height
    path.parent.mkdir(parents=True, exist_ok=True)
    output.convert("RGB").save(path)


def main() -> None:
    parser = argparse.ArgumentParser(description="Build transparent hedgehog animation assets from the supplied sprite sheet.")
    parser.add_argument("--source", type=Path, default=default_source())
    parser.add_argument("--out-dir", type=Path, default=Path("public/images/units/hedgehog"))
    args = parser.parse_args()

    source = args.source
    out_dir = args.out_dir
    out_dir.mkdir(parents=True, exist_ok=True)

    sheet = Image.open(source).convert("RGBA")
    source_copy = out_dir / "source-sheet.png"
    sheet.save(source_copy)
    row_bands, col_bands = detect_sprite_bands(sheet)

    def raw_frames(sequence: list[tuple[int, int]]) -> list[Image.Image]:
        return [crop_grid_frame(sheet, row, col, row_bands, col_bands) for row, col in sequence]

    def frames_for(sequence: list[tuple[int, int]], size: int = SHEET_FRAME_SIZE, scale: float = 0.86) -> list[Image.Image]:
        return normalize_sequence(raw_frames(sequence), size, scale)

    idle = frames_for(WALK_IN_PLACE_FRAMES)
    ready = frames_for(READY_FRAMES)
    walk_right = frames_for(WALK_RIGHT_FRAMES)
    happy = frames_for(HAPPY_FRAMES, scale=0.84)
    hit = frames_for(HIT_FRAMES)

    build_sheet(idle).save(out_dir / "idle-sheet.png")
    build_sheet(ready).save(out_dir / "ready-sheet.png")
    build_sheet(walk_right).save(out_dir / "walk-right-sheet.png")
    build_sheet(happy).save(out_dir / "happy-sheet.png")
    build_sheet(hit).save(out_dir / "hit-sheet.png")
    idle[0].save(out_dir / "idle-poster.png")
    save_apng(out_dir / "idle-ui.png", idle, 125)
    save_apng(out_dir / "ready-ui.png", ready, 100)
    save_apng(out_dir / "happy-ui.png", happy, 105)
    save_apng(out_dir / "walk-right-ui.png", walk_right, 95)
    save_apng(out_dir / "hit-ui.png", hit, 90)
    save_contact_sheet(
        Path("output/playwright/hedgehog-frame-audit/generated-animation-contact.png"),
        {
            "idle": idle,
            "ready": ready,
            "happy": happy,
            "walk_right": walk_right,
            "hit": hit,
        },
    )

    print(f"Wrote hedgehog assets to {out_dir.resolve()}")


if __name__ == "__main__":
    main()
