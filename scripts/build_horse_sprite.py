from __future__ import annotations

import argparse
from collections import deque
from dataclasses import dataclass
from pathlib import Path

from PIL import Image, ImageDraw, ImageOps


SHEET_FRAME_SIZE = 512
UI_FRAME_SIZE = 256

GRID_Y_LINES = [2, 139, 269, 397, 525, 659, 790, 900, 1021]
ROW_X_LINES = {
    0: [2, 156, 315, 481, 639, 807, 973, 1143, 1324, 1532],
    1: [2, 156, 315, 481, 639, 807, 973, 1143, 1324, 1532],
    2: [2, 156, 315, 481, 639, 807, 973, 1143, 1324, 1532],
    3: [2, 156, 315, 481, 639, 807, 973, 1143, 1324, 1532],
    4: [2, 156, 315, 481, 639, 807, 973, 1143, 1324, 1532],
    5: [2, 156, 315, 481, 639, 807, 973, 1143, 1324, 1532],
    6: [2, 221, 435, 678, 914, 1210, 1532],
    7: [2, 221, 435, 619, 785, 942, 1107, 1264, 1425, 1532],
}

IDLE_ROW = 0
WALK_ROW = 1
RUN_ROW = 2
GALLOP_ROW = 3
HAPPY_ROW = 4
MAGIC_ROW = 5
DASH_ROW = 6
EMOTE_ROW = 7

IDLE_FRAMES = [(WALK_ROW, 0), (WALK_ROW, 1), (WALK_ROW, 2), (WALK_ROW, 3)]
READY_FRAMES = [(HAPPY_ROW, 0), (HAPPY_ROW, 1), (HAPPY_ROW, 2), (HAPPY_ROW, 3)]
WALK_LEFT_FRAMES = [(WALK_ROW, col) for col in range(6)]
RUN_LEFT_FRAMES = [(RUN_ROW, col) for col in range(9)]
GALLOP_LEFT_FRAMES = [(GALLOP_ROW, col) for col in range(9)]
HAPPY_FRAMES = [(HAPPY_ROW, col) for col in range(5, 9)]
MAGIC_FRAMES = [(MAGIC_ROW, col) for col in range(9)]
DASH_LEFT_FRAMES = [(DASH_ROW, col) for col in range(6)]
HIT_FRAMES = [(EMOTE_ROW, 1), (EMOTE_ROW, 2), (EMOTE_ROW, 1), (EMOTE_ROW, 0)]


@dataclass(frozen=True)
class PreparedFrame:
    image: Image.Image
    bbox: tuple[int, int, int, int]


def default_source() -> Path:
    return Path.home() / "Downloads" / "ChatGPT Image 28 avr. 2026, 15_23_16.png"


def is_background(pixel: tuple[int, int, int, int]) -> bool:
    r, g, b, a = pixel
    if a == 0:
        return True
    if r < 224 or g < 224 or b < 224:
        return False
    return max(r, g, b) - min(r, g, b) < 30


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


def alpha_components(image: Image.Image) -> list[list[tuple[int, int]]]:
    alpha = image.getchannel("A")
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

    return components


def keep_largest_alpha_component(image: Image.Image) -> Image.Image:
    rgba = image.convert("RGBA")
    components = alpha_components(rgba)
    if not components:
        return rgba

    largest = set(max(components, key=len))
    cleaned = Image.new("RGBA", rgba.size, (0, 0, 0, 0))
    source_pixels = rgba.load()
    cleaned_pixels = cleaned.load()
    for x, y in largest:
        cleaned_pixels[x, y] = source_pixels[x, y]
    return cleaned


def trim_transparent_edges(image: Image.Image) -> PreparedFrame:
    bbox = image.getchannel("A").getbbox()
    if bbox is None:
        raise RuntimeError("Empty horse frame after background removal")
    return PreparedFrame(image=image.crop(bbox), bbox=bbox)


def crop_grid_frame(sheet: Image.Image, row: int, col: int) -> Image.Image:
    row_x_lines = ROW_X_LINES[row]
    row_cols = len(row_x_lines) - 1
    if col < 0 or col >= row_cols:
        raise ValueError(f"col {col} is outside row {row}")

    x0 = row_x_lines[col] + 3
    x1 = row_x_lines[col + 1] - 3
    y0 = GRID_Y_LINES[row] + 3
    y1 = GRID_Y_LINES[row + 1] - 3
    return sheet.crop((x0, y0, x1, y1))


def prepare_frame(frame: Image.Image, largest_only: bool) -> PreparedFrame:
    transparent = remove_connected_background(frame)
    if largest_only:
        transparent = keep_largest_alpha_component(transparent)
    return trim_transparent_edges(transparent)


def normalize_prepared_frame(prepared: PreparedFrame, size: int, ratio: float, bottom_pad: float) -> Image.Image:
    cropped = prepared.image
    resized = cropped.resize(
        (max(1, round(cropped.width * ratio)), max(1, round(cropped.height * ratio))),
        Image.Resampling.LANCZOS,
    )
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    x = (size - resized.width) // 2
    y = size - resized.height - round(size * bottom_pad)
    canvas.alpha_composite(resized, (x, y))
    return canvas


def normalize_sequence(
    frames: list[Image.Image],
    size: int,
    scale: float,
    bottom_pad: float = 0.07,
    largest_only: bool = True,
) -> list[Image.Image]:
    prepared_frames = [prepare_frame(frame, largest_only) for frame in frames]
    max_width = max(frame.image.width for frame in prepared_frames)
    max_height = max(frame.image.height for frame in prepared_frames)
    ratio = min((size * scale) / max_width, (size * scale) / max_height)
    return [normalize_prepared_frame(frame, size, ratio, bottom_pad) for frame in prepared_frames]


def mirror_frames(frames: list[Image.Image]) -> list[Image.Image]:
    return [ImageOps.mirror(frame) for frame in frames]


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


def save_sequence(out_dir: Path, name: str, frames: list[Image.Image], duration_ms: int) -> None:
    build_sheet(frames).save(out_dir / f"{name}-sheet.png")
    save_apng(out_dir / f"{name}-ui.png", frames, duration_ms)


def save_source_index(path: Path, sheet: Image.Image) -> None:
    thumb = 112
    label_h = 22
    gap = 8
    rows = len(GRID_Y_LINES) - 1
    max_cols = max(len(lines) - 1 for lines in ROW_X_LINES.values())
    output = Image.new(
        "RGBA",
        (gap + max_cols * (thumb + gap), gap + rows * (thumb + label_h + gap)),
        (18, 22, 30, 255),
    )
    draw = ImageDraw.Draw(output)

    for row in range(rows):
        row_cols = len(ROW_X_LINES[row]) - 1
        for col in range(row_cols):
            frame = crop_grid_frame(sheet, row, col).resize((thumb, thumb), Image.Resampling.LANCZOS)
            x = gap + col * (thumb + gap)
            y = gap + row * (thumb + label_h + gap)
            draw.text((x, y), f"{row},{col}", fill=(255, 255, 255, 255))
            backing = Image.new("RGBA", (thumb, thumb), (232, 238, 246, 255))
            output.alpha_composite(backing, (x, y + label_h))
            output.alpha_composite(frame, (x, y + label_h))
            draw.rectangle((x, y + label_h, x + thumb, y + label_h + thumb), outline=(74, 222, 255, 255), width=2)

    path.parent.mkdir(parents=True, exist_ok=True)
    output.convert("RGB").save(path)


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
    parser = argparse.ArgumentParser(description="Build transparent horse animation assets from the supplied sprite sheet.")
    parser.add_argument("--source", type=Path, default=default_source())
    parser.add_argument("--out-dir", type=Path, default=Path("public/images/units/horse"))
    args = parser.parse_args()

    source = args.source
    out_dir = args.out_dir
    out_dir.mkdir(parents=True, exist_ok=True)

    sheet = Image.open(source).convert("RGBA")
    sheet.save(out_dir / "source-sheet.png")

    def raw_frames(sequence: list[tuple[int, int]]) -> list[Image.Image]:
        return [crop_grid_frame(sheet, row, col) for row, col in sequence]

    def frames_for(
        sequence: list[tuple[int, int]],
        scale: float,
        bottom_pad: float = 0.07,
        largest_only: bool = True,
    ) -> list[Image.Image]:
        return normalize_sequence(raw_frames(sequence), SHEET_FRAME_SIZE, scale, bottom_pad, largest_only)

    idle = frames_for(IDLE_FRAMES, scale=0.84)
    ready = frames_for(READY_FRAMES, scale=0.84)
    walk_left = frames_for(WALK_LEFT_FRAMES, scale=0.84)
    walk_right = mirror_frames(walk_left)
    run_left = frames_for(RUN_LEFT_FRAMES, scale=0.86, largest_only=False)
    run_right = mirror_frames(run_left)
    gallop_left = frames_for(GALLOP_LEFT_FRAMES, scale=0.86, largest_only=False)
    gallop_right = mirror_frames(gallop_left)
    action = frames_for(DASH_LEFT_FRAMES, scale=0.94, largest_only=False)
    action_right = mirror_frames(action)
    happy = frames_for(HAPPY_FRAMES, scale=0.86, largest_only=False)
    magic = frames_for(MAGIC_FRAMES, scale=0.88, largest_only=False)
    hit = frames_for(HIT_FRAMES, scale=0.84, largest_only=False)

    save_sequence(out_dir, "idle", idle, 122)
    save_sequence(out_dir, "ready", ready, 115)
    save_sequence(out_dir, "walk-left", walk_left, 92)
    save_sequence(out_dir, "walk-right", walk_right, 92)
    save_sequence(out_dir, "run-left", run_left, 72)
    save_sequence(out_dir, "run-right", run_right, 72)
    save_sequence(out_dir, "gallop-left", gallop_left, 68)
    save_sequence(out_dir, "gallop-right", gallop_right, 68)
    save_sequence(out_dir, "action", action, 70)
    save_sequence(out_dir, "action-right", action_right, 70)
    save_sequence(out_dir, "happy", happy, 110)
    save_sequence(out_dir, "magic", magic, 90)
    save_sequence(out_dir, "hit", hit, 105)
    idle[0].save(out_dir / "idle-poster.png")

    save_source_index(Path("output/playwright/horse-frame-audit/source-frame-index.png"), sheet)
    save_contact_sheet(
        Path("output/playwright/horse-frame-audit/generated-animation-contact.png"),
        {
            "idle": idle,
            "walk_left": walk_left,
            "walk_right": walk_right,
            "run_left": run_left,
            "run_right": run_right,
            "gallop_left": gallop_left,
            "gallop_right": gallop_right,
            "dash_action": action,
            "dash_action_right": action_right,
            "magic": magic,
            "happy": happy,
            "hit": hit,
        },
    )

    print(f"Wrote horse assets to {out_dir.resolve()}")


if __name__ == "__main__":
    main()
