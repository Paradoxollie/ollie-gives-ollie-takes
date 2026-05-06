from __future__ import annotations

import argparse
import json
from collections import deque
from dataclasses import dataclass
from pathlib import Path

from PIL import Image, ImageDraw, ImageOps


FRAME_SIZE = 512
UI_FRAME_SIZE = 256
BASELINE_Y = 456


@dataclass(frozen=True)
class RawFrame:
    label: str
    box: tuple[int, int, int, int]


@dataclass
class PreparedFrame:
    label: str
    image: Image.Image
    main_bbox: tuple[int, int, int, int]
    full_bbox: tuple[int, int, int, int]


def default_source() -> Path:
    return Path.home() / "Downloads" / "ChatGPT Image 1 mai 2026, 14_54_38.png"


def inset_box(box: tuple[int, int, int, int], pad: int = 3) -> tuple[int, int, int, int]:
    x0, y0, x1, y1 = box
    return x0 + pad, y0 + pad, x1 - pad, y1 - pad


def cells_from_bounds(
    prefix: str,
    x_bounds: list[int],
    y0: int,
    y1: int,
) -> list[RawFrame]:
    return [
        RawFrame(f"{prefix}-{index + 1}", inset_box((x_bounds[index], y0, x_bounds[index + 1], y1)))
        for index in range(len(x_bounds) - 1)
    ]


RAW_SEQUENCES: dict[str, list[RawFrame]] = {
    "walk_right": cells_from_bounds("walk-right", [141, 370, 593, 809, 1022, 1234, 1439], 47, 269),
    "walk_left": cells_from_bounds("walk-left", [141, 370, 593, 809, 1022, 1234, 1439], 310, 523),
    "hit": cells_from_bounds("hit", [141, 451, 756, 1031, 1306], 573, 787),
    "victory": cells_from_bounds("victory", [104, 343, 545, 764, 990, 1216, 1439], 835, 1076),
}


def is_connected_background(pixel: tuple[int, int, int, int]) -> bool:
    r, g, b, a = pixel
    if a == 0:
        return True

    chroma = max(r, g, b) - min(r, g, b)
    light_neutral = min(r, g, b) >= 225 and chroma <= 42
    grid_gray = min(r, g, b) >= 194 and chroma <= 24
    return light_neutral or grid_gray


def remove_connected_background(image: Image.Image) -> Image.Image:
    rgba = image.convert("RGBA")
    pixels = rgba.load()
    width, height = rgba.size
    queue: deque[tuple[int, int]] = deque()
    seen: set[tuple[int, int]] = set()

    for x in range(width):
        queue.append((x, 0))
        queue.append((x, height - 1))
    for y in range(height):
        queue.append((0, y))
        queue.append((width - 1, y))

    while queue:
        x, y = queue.popleft()
        if x < 0 or y < 0 or x >= width or y >= height or (x, y) in seen:
            continue
        seen.add((x, y))
        if not is_connected_background(pixels[x, y]):
            continue

        r, g, b, _ = pixels[x, y]
        pixels[x, y] = (r, g, b, 0)
        queue.extend(((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)))

    clear_neutral_fringe(rgba)
    return rgba


def clear_neutral_fringe(image: Image.Image) -> None:
    pixels = image.load()
    alpha = image.getchannel("A").load()
    width, height = image.size
    clear: list[tuple[int, int]] = []

    for y in range(1, height - 1):
        for x in range(1, width - 1):
            r, g, b, a = pixels[x, y]
            if a == 0:
                continue
            chroma = max(r, g, b) - min(r, g, b)
            touches_transparency = (
                alpha[x + 1, y] == 0
                or alpha[x - 1, y] == 0
                or alpha[x, y + 1] == 0
                or alpha[x, y - 1] == 0
            )
            if touches_transparency and min(r, g, b) >= 244 and chroma <= 18:
                clear.append((x, y))

    for x, y in clear:
        r, g, b, _ = pixels[x, y]
        pixels[x, y] = (r, g, b, 0)


def alpha_components(image: Image.Image) -> list[tuple[int, tuple[int, int, int, int], set[tuple[int, int]]]]:
    alpha = image.getchannel("A")
    pixels = alpha.load()
    width, height = alpha.size
    seen: set[tuple[int, int]] = set()
    components: list[tuple[int, tuple[int, int, int, int], set[tuple[int, int]]]] = []

    for y in range(height):
        for x in range(width):
            if pixels[x, y] <= 0 or (x, y) in seen:
                continue
            queue: deque[tuple[int, int]] = deque([(x, y)])
            seen.add((x, y))
            points: set[tuple[int, int]] = set()
            while queue:
                px, py = queue.popleft()
                points.add((px, py))
                for nx, ny in ((px + 1, py), (px - 1, py), (px, py + 1), (px, py - 1)):
                    if nx < 0 or ny < 0 or nx >= width or ny >= height:
                        continue
                    if pixels[nx, ny] <= 0 or (nx, ny) in seen:
                        continue
                    seen.add((nx, ny))
                    queue.append((nx, ny))
            xs = [point[0] for point in points]
            ys = [point[1] for point in points]
            components.append((len(points), (min(xs), min(ys), max(xs) + 1, max(ys) + 1), points))

    components.sort(key=lambda item: item[0], reverse=True)
    return components


def remove_tiny_components(image: Image.Image, min_pixels: int = 9) -> Image.Image:
    components = alpha_components(image)
    if not components:
        return image

    cleaned = Image.new("RGBA", image.size, (0, 0, 0, 0))
    source = image.load()
    target = cleaned.load()
    for size, _, points in components:
        if size < min_pixels:
            continue
        for x, y in points:
            target[x, y] = source[x, y]
    return cleaned


def expand_box(box: tuple[int, int, int, int], width: int, height: int, pad: int) -> tuple[int, int, int, int]:
    x0, y0, x1, y1 = box
    return max(0, x0 - pad), max(0, y0 - pad), min(width, x1 + pad), min(height, y1 + pad)


def prepare_frame(sheet: Image.Image, raw: RawFrame) -> PreparedFrame:
    transparent = remove_connected_background(sheet.crop(raw.box))
    transparent = remove_tiny_components(transparent)
    components = alpha_components(transparent)
    if not components:
        raise RuntimeError(f"{raw.label} is empty after background removal")

    main_bbox = components[0][1]
    full_bbox = transparent.getchannel("A").getbbox()
    if full_bbox is None:
        raise RuntimeError(f"{raw.label} has no visible pixels")

    return PreparedFrame(
        label=raw.label,
        image=transparent,
        main_bbox=main_bbox,
        full_bbox=expand_box(full_bbox, transparent.width, transparent.height, 8),
    )


def normalize_sequence(
    frames: list[PreparedFrame],
    *,
    target_main_width: int = 356,
    target_main_height: int = 388,
) -> tuple[list[Image.Image], list[dict[str, object]]]:
    max_width = max(frame.main_bbox[2] - frame.main_bbox[0] for frame in frames)
    max_height = max(frame.main_bbox[3] - frame.main_bbox[1] for frame in frames)
    scale = min(target_main_width / max_width, target_main_height / max_height)
    normalized: list[Image.Image] = []
    report: list[dict[str, object]] = []

    for frame in frames:
        crop_x0, crop_y0, crop_x1, crop_y1 = frame.full_bbox
        crop = frame.image.crop(frame.full_bbox)
        resized = crop.resize(
            (max(1, round(crop.width * scale)), max(1, round(crop.height * scale))),
            Image.Resampling.LANCZOS,
        )

        main_x0, main_y0, main_x1, main_y1 = frame.main_bbox
        main_center_x = ((main_x0 + main_x1) / 2) - crop_x0
        main_bottom = main_y1 - crop_y0
        paste_x = round((FRAME_SIZE / 2) - main_center_x * scale)
        paste_y = round(BASELINE_Y - main_bottom * scale)

        paste_x = min(max(paste_x, 4 - resized.width), FRAME_SIZE - 4)
        paste_y = min(max(paste_y, 4 - resized.height), FRAME_SIZE - 4)

        cell = Image.new("RGBA", (FRAME_SIZE, FRAME_SIZE), (0, 0, 0, 0))
        cell.alpha_composite(resized, (paste_x, paste_y))
        bbox = cell.getchannel("A").getbbox()
        if bbox is None:
            raise RuntimeError(f"{frame.label} became empty during normalization")
        normalized.append(cell)
        report.append(
            {
                "label": frame.label,
                "sourceBox": list(frame.full_bbox),
                "mainBox": list(frame.main_bbox),
                "outputBox": list(bbox),
                "scale": scale,
                "paste": [paste_x, paste_y],
            },
        )

    return normalized, report


def build_sheet(frames: list[Image.Image]) -> Image.Image:
    sheet = Image.new("RGBA", (FRAME_SIZE * len(frames), FRAME_SIZE), (0, 0, 0, 0))
    for index, frame in enumerate(frames):
        sheet.alpha_composite(frame, (index * FRAME_SIZE, 0))
    return sheet


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


def checker(size: int) -> Image.Image:
    image = Image.new("RGBA", (size, size), (230, 236, 244, 255))
    draw = ImageDraw.Draw(image)
    for y in range(0, size, 24):
        for x in range(0, size, 24):
            if (x // 24 + y // 24) % 2:
                draw.rectangle((x, y, x + 23, y + 23), fill=(204, 216, 230, 255))
    return image


def save_contact_sheet(path: Path, named_frames: dict[str, list[Image.Image]]) -> None:
    thumb = 128
    label_h = 24
    gap = 10
    rows: list[Image.Image] = []
    backing = checker(thumb)

    for name, frames in named_frames.items():
        row = Image.new("RGBA", (gap + len(frames) * (thumb + gap), label_h + thumb + gap * 2), (18, 22, 30, 255))
        draw = ImageDraw.Draw(row)
        draw.text((gap, 4), name, fill=(255, 255, 255, 255))
        for index, frame in enumerate(frames):
            x = gap + index * (thumb + gap)
            y = label_h + gap
            row.alpha_composite(backing, (x, y))
            row.alpha_composite(frame.resize((thumb, thumb), Image.Resampling.LANCZOS), (x, y))
            draw.rectangle((x, y, x + thumb, y + thumb), outline=(82, 222, 255, 255), width=2)
        rows.append(row)

    output = Image.new("RGBA", (max(row.width for row in rows), sum(row.height for row in rows)), (18, 22, 30, 255))
    y = 0
    for row in rows:
        output.alpha_composite(row, (0, y))
        y += row.height
    path.parent.mkdir(parents=True, exist_ok=True)
    output.convert("RGB").save(path)


def main() -> None:
    parser = argparse.ArgumentParser(description="Build transparent shark animation strips from the supplied ordered sprite sheet.")
    parser.add_argument("--source", type=Path, default=default_source())
    parser.add_argument("--out-dir", type=Path, default=Path("public/images/units/shark"))
    parser.add_argument("--audit-dir", type=Path, default=Path("output/playwright/shark-frame-audit"))
    args = parser.parse_args()

    sheet = Image.open(args.source).convert("RGBA")
    out_dir = args.out_dir
    out_dir.mkdir(parents=True, exist_ok=True)
    args.audit_dir.mkdir(parents=True, exist_ok=True)
    sheet.save(out_dir / "source-sheet.png")

    sequence_reports: dict[str, object] = {}
    generated: dict[str, list[Image.Image]] = {}

    for name, raw_frames in RAW_SEQUENCES.items():
        prepared = [prepare_frame(sheet, raw) for raw in raw_frames]
        frames, report = normalize_sequence(prepared)
        generated[name] = frames
        sequence_reports[name] = report

    walk_right = generated["walk_right"]
    walk_left = generated["walk_left"]
    hit = generated["hit"]
    victory = generated["victory"]

    save_sequence(out_dir, "idle", walk_right, 105)
    save_sequence(out_dir, "ready", walk_right, 95)
    save_sequence(out_dir, "walk-right", walk_right, 95)
    save_sequence(out_dir, "walk-left", walk_left, 95)
    save_sequence(out_dir, "run-right", walk_right, 78)
    save_sequence(out_dir, "run-left", walk_left, 78)
    save_sequence(out_dir, "hit", hit, 115)
    save_sequence(out_dir, "happy", victory, 110)
    save_sequence(out_dir, "action", victory, 90)
    save_sequence(out_dir, "action-left", victory, 90)
    walk_right[0].save(out_dir / "idle-poster.png")

    save_contact_sheet(
        args.audit_dir / "generated-animation-contact.png",
        {
            "idle / walk right": walk_right,
            "walk left": walk_left,
            "hit / damage taken": hit,
            "action / damage dealt": victory,
        },
    )

    report = {
        "status": "pass",
        "source": str(args.source),
        "outDir": str(out_dir),
        "frameSize": FRAME_SIZE,
        "sequences": sequence_reports,
    }
    (args.audit_dir / "build-report.json").write_text(json.dumps(report, indent=2), encoding="utf-8")
    print(f"Wrote shark sheet assets to {out_dir.resolve()}")


if __name__ == "__main__":
    main()
