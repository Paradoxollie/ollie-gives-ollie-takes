from __future__ import annotations

import argparse
import json
import math
import re
from collections import deque
from pathlib import Path

from PIL import Image, ImageDraw


def natural_key(path: Path) -> list[object]:
    return [int(part) if part.isdigit() else part.lower() for part in re.split(r"(\d+)", path.name)]


def image_files(source_dir: Path) -> list[Path]:
    return sorted([p for p in source_dir.iterdir() if p.suffix.lower() == ".png"], key=natural_key)


def parse_box(raw: str | None) -> tuple[int, int, int, int] | None:
    if not raw:
        return None
    parts = [int(part.strip()) for part in raw.split(",")]
    if len(parts) != 4:
        raise ValueError("Box must be x0,y0,x1,y1")
    return tuple(parts)  # type: ignore[return-value]


def estimate_border_color(image: Image.Image) -> tuple[int, int, int]:
    rgba = image.convert("RGBA")
    pixels = rgba.load()
    width, height = rgba.size
    samples: list[tuple[int, int, int]] = []
    for x in range(0, width, max(1, width // 80)):
        for y in (0, height - 1):
            r, g, b, a = pixels[x, y]
            if a:
                samples.append((r, g, b))
    for y in range(0, height, max(1, height // 80)):
        for x in (0, width - 1):
            r, g, b, a = pixels[x, y]
            if a:
                samples.append((r, g, b))
    if not samples:
        return (255, 255, 255)
    samples.sort()
    mid = len(samples) // 2
    return samples[mid]


def remove_light_background(image: Image.Image, tolerance: int) -> Image.Image:
    rgba = image.convert("RGBA")
    bg = estimate_border_color(rgba)
    pixels = rgba.load()
    width, height = rgba.size
    seen: set[tuple[int, int]] = set()
    queue: deque[tuple[int, int]] = deque()

    def is_bg(x: int, y: int) -> bool:
        r, g, b, a = pixels[x, y]
        if a == 0:
            return True
        dist = math.sqrt((r - bg[0]) ** 2 + (g - bg[1]) ** 2 + (b - bg[2]) ** 2)
        near_border_color = dist <= tolerance
        very_light_neutral = min(r, g, b) >= 218 and (max(r, g, b) - min(r, g, b)) <= 34
        return near_border_color or very_light_neutral

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
        if not is_bg(x, y):
            continue
        pixels[x, y] = (255, 255, 255, 0)
        queue.extend(((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)))

    # Conservative fringe cleanup only on pixels touching transparent background.
    alpha = rgba.getchannel("A").load()
    to_soften: list[tuple[int, int, tuple[int, int, int, int]]] = []
    for y in range(1, height - 1):
        for x in range(1, width - 1):
            r, g, b, a = pixels[x, y]
            if a == 0:
                continue
            if min(r, g, b) < 210:
                continue
            touches_alpha = (
                alpha[x + 1, y] == 0
                or alpha[x - 1, y] == 0
                or alpha[x, y + 1] == 0
                or alpha[x, y - 1] == 0
            )
            if touches_alpha:
                new_alpha = max(0, min(a, 255 - max(0, min(r, g, b) - 210) * 4))
                to_soften.append((x, y, (r, g, b, new_alpha)))
    for x, y, value in to_soften:
        pixels[x, y] = value
    return rgba


def remove_chroma_background(image: Image.Image, tolerance: int) -> Image.Image:
    rgba = image.convert("RGBA")
    pixels = rgba.load()
    width, height = rgba.size
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            if a == 0:
                continue
            dist = math.sqrt((r - 0) ** 2 + (g - 255) ** 2 + (b - 0) ** 2)
            if dist <= tolerance or (g > 180 and g > r * 1.45 and g > b * 1.45):
                pixels[x, y] = (0, 255, 0, 0)
            elif g > max(r, b) + 32:
                pixels[x, y] = (r, max(r, b), b, a)
    return rgba


def clear_box(image: Image.Image, box: tuple[int, int, int, int] | None) -> None:
    if box is None:
        return
    draw = ImageDraw.Draw(image)
    draw.rectangle(box, fill=(0, 0, 0, 0))


def scale_preserve_canvas(image: Image.Image, frame_size: int) -> tuple[Image.Image, dict[str, object]]:
    width, height = image.size
    scale = min(frame_size / width, frame_size / height)
    scaled = image.resize((round(width * scale), round(height * scale)), Image.Resampling.LANCZOS)
    cell = Image.new("RGBA", (frame_size, frame_size), (0, 0, 0, 0))
    paste = ((frame_size - scaled.width) // 2, (frame_size - scaled.height) // 2)
    cell.alpha_composite(scaled, paste)
    return cell, {"scale": scale, "scaledCanvas": [scaled.width, scaled.height], "paste": list(paste)}


def build_sheet(frames: list[Image.Image]) -> Image.Image:
    width, height = frames[0].size
    sheet = Image.new("RGBA", (width * len(frames), height), (0, 0, 0, 0))
    for index, frame in enumerate(frames):
        sheet.alpha_composite(frame, (index * width, 0))
    return sheet


def save_preview(path: Path, frames: list[Image.Image]) -> None:
    cell = frames[0].width
    preview = Image.new("RGBA", (cell * len(frames), cell), (0, 0, 0, 255))
    checker = Image.new("RGBA", (cell, cell), (224, 232, 240, 255))
    draw = ImageDraw.Draw(checker)
    for y in range(0, cell, 24):
        for x in range(0, cell, 24):
            if (x // 24 + y // 24) % 2:
                draw.rectangle((x, y, x + 23, y + 23), fill=(198, 210, 224, 255))
    for index, frame in enumerate(frames):
        preview.alpha_composite(checker, (index * cell, 0))
        preview.alpha_composite(frame, (index * cell, 0))
    path.parent.mkdir(parents=True, exist_ok=True)
    preview.convert("RGB").save(path)


def main() -> None:
    parser = argparse.ArgumentParser(description="Build a transparent game-ready animation strip from selected frames.")
    parser.add_argument("--source-frames-dir", type=Path, required=True)
    parser.add_argument("--frames", type=int, required=True)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--preview", type=Path, required=True)
    parser.add_argument("--frames-dir", type=Path, required=True)
    parser.add_argument("--report", type=Path, required=True)
    parser.add_argument("--frame-prefix", default="frame")
    parser.add_argument("--frame-size", type=int, default=512)
    parser.add_argument("--background-mode", choices=["alpha", "chroma", "light"], default="light")
    parser.add_argument("--layout-mode", choices=["preserve-canvas"], default="preserve-canvas")
    parser.add_argument("--tolerance", type=int, default=44)
    parser.add_argument("--clear-source-box", default=None)
    parser.add_argument("--clear-cell-box", default=None)
    args = parser.parse_args()

    source_paths = image_files(args.source_frames_dir)
    if len(source_paths) < args.frames:
        raise SystemExit(f"Need {args.frames} frames, found {len(source_paths)}")
    source_paths = source_paths[: args.frames]
    clear_source = parse_box(args.clear_source_box)
    clear_cell = parse_box(args.clear_cell_box)

    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.frames_dir.mkdir(parents=True, exist_ok=True)
    args.report.parent.mkdir(parents=True, exist_ok=True)

    cells: list[Image.Image] = []
    frame_reports: list[dict[str, object]] = []
    errors: list[str] = []
    warnings: list[str] = []
    canvas_sizes: set[tuple[int, int]] = set()

    for index, source_path in enumerate(source_paths, start=1):
        source = Image.open(source_path).convert("RGBA")
        canvas_sizes.add(source.size)
        clear_box(source, clear_source)
        if args.background_mode == "light":
            transparent = remove_light_background(source, args.tolerance)
        elif args.background_mode == "chroma":
            transparent = remove_chroma_background(source, args.tolerance)
        else:
            transparent = source
        cell, layout = scale_preserve_canvas(transparent, args.frame_size)
        clear_box(cell, clear_cell)
        output_name = f"{args.frame_prefix}_{index:02d}.png"
        cell_path = args.frames_dir / output_name
        cell.save(cell_path)
        bbox = cell.getchannel("A").getbbox()
        if bbox is None:
            errors.append(f"Frame {index} is empty after background removal")
        elif bbox[0] <= 0 or bbox[1] <= 0 or bbox[2] >= args.frame_size or bbox[3] >= args.frame_size:
            warnings.append(f"Frame {index} touches the output cell edge")
        cells.append(cell)
        frame_reports.append(
            {
                "index": index,
                "source": str(source_path),
                "output": str(cell_path),
                "sourceCanvas": list(source.size),
                "bbox": list(bbox) if bbox else None,
                **layout,
            }
        )

    sheet = build_sheet(cells)
    sheet.save(args.output)
    save_preview(args.preview, cells)

    report = {
        "status": "fail" if errors else "pass",
        "errors": errors,
        "warnings": warnings,
        "frameCount": len(cells),
        "frameSize": args.frame_size,
        "sheetSize": list(sheet.size),
        "layoutMode": args.layout_mode,
        "backgroundMode": args.background_mode,
        "sourceCanvasSizes": [list(size) for size in sorted(canvas_sizes)],
        "output": str(args.output),
        "preview": str(args.preview),
        "framesDir": str(args.frames_dir),
        "frames": frame_reports,
    }
    args.report.write_text(json.dumps(report, indent=2), encoding="utf-8")

    if errors:
        raise SystemExit("; ".join(errors))


if __name__ == "__main__":
    main()
