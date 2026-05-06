from __future__ import annotations

import argparse
import json
from collections import deque
from dataclasses import dataclass
from pathlib import Path

from PIL import Image, ImageDraw, ImageOps


FRAME_SIZE = 512
UI_FRAME_SIZE = 256
BASELINE_Y = 462


@dataclass(frozen=True)
class PreparedFrame:
    label: str
    image: Image.Image
    bbox: tuple[int, int, int, int]


ROW_FRAME_COUNTS = {
    "idle": 6,
    "running-right": 8,
    "running-left": 8,
    "waving": 4,
    "failed": 8,
}


def is_chroma_background(pixel: tuple[int, int, int, int]) -> bool:
    r, g, b, a = pixel
    if a == 0:
        return True

    return g >= 150 and g - r >= 70 and g - b >= 70


def remove_connected_chroma(image: Image.Image) -> Image.Image:
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
        if not is_chroma_background(pixels[x, y]):
            continue

        pixels[x, y] = (0, 255, 0, 0)
        queue.extend(((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)))

    clear_chroma_fringe(rgba)
    return rgba


def clear_chroma_fringe(image: Image.Image) -> None:
    pixels = image.load()
    alpha = image.getchannel("A").load()
    width, height = image.size
    clear: list[tuple[int, int]] = []

    for y in range(1, height - 1):
        for x in range(1, width - 1):
            r, g, b, a = pixels[x, y]
            if a == 0:
                continue
            touches_transparency = (
                alpha[x + 1, y] == 0
                or alpha[x - 1, y] == 0
                or alpha[x, y + 1] == 0
                or alpha[x, y - 1] == 0
            )
            if touches_transparency and g >= 185 and g - r >= 70 and g - b >= 70:
                clear.append((x, y))

    for x, y in clear:
        pixels[x, y] = (0, 255, 0, 0)


def alpha_components(image: Image.Image) -> list[tuple[int, tuple[int, int, int, int], set[tuple[int, int]]]]:
    alpha = image.getchannel("A")
    pixels = alpha.load()
    width, height = alpha.size
    seen: set[tuple[int, int]] = set()
    components: list[tuple[int, tuple[int, int, int, int], set[tuple[int, int]]]] = []

    for y in range(height):
        for x in range(width):
            if pixels[x, y] == 0 or (x, y) in seen:
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
                    if pixels[nx, ny] == 0 or (nx, ny) in seen:
                        continue
                    seen.add((nx, ny))
                    queue.append((nx, ny))
            xs = [point[0] for point in points]
            ys = [point[1] for point in points]
            components.append((len(points), (min(xs), min(ys), max(xs) + 1, max(ys) + 1), points))

    components.sort(key=lambda item: item[0], reverse=True)
    return components


def remove_tiny_components(image: Image.Image, min_pixels: int = 5) -> Image.Image:
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


def split_row(row: Image.Image, row_name: str, frame_count: int) -> list[PreparedFrame]:
    transparent = remove_tiny_components(remove_connected_chroma(row), min_pixels=20)
    components = alpha_components(transparent)
    if len(components) < frame_count:
        raise RuntimeError(f"{row_name} only has {len(components)} visible components for {frame_count} frames")

    selected = sorted(components[:frame_count], key=lambda item: item[1][0])
    row_pixels = transparent.load()
    frames: list[PreparedFrame] = []
    for index, (_, bbox, points) in enumerate(selected):
        x0, y0, x1, y1 = expand_box(bbox, transparent.width, transparent.height, 8)
        isolated = Image.new("RGBA", (x1 - x0, y1 - y0), (0, 0, 0, 0))
        isolated_pixels = isolated.load()
        for x, y in points:
            if x0 <= x < x1 and y0 <= y < y1:
                isolated_pixels[x - x0, y - y0] = row_pixels[x, y]
        frames.append(
            PreparedFrame(
                label=f"{row_name}-{index + 1}",
                image=isolated,
                bbox=(0, 0, isolated.width, isolated.height),
            )
        )
    return frames


def normalize_sequence(
    frames: list[PreparedFrame],
    *,
    target_width: int = 430,
    target_height: int = 430,
) -> tuple[list[Image.Image], list[dict[str, object]]]:
    max_width = max(frame.bbox[2] - frame.bbox[0] for frame in frames)
    max_height = max(frame.bbox[3] - frame.bbox[1] for frame in frames)
    scale = min(target_width / max_width, target_height / max_height)

    normalized: list[Image.Image] = []
    report: list[dict[str, object]] = []

    for frame in frames:
        x0, y0, x1, y1 = frame.bbox
        crop = frame.image.crop(frame.bbox)
        resized = crop.resize(
            (max(1, round(crop.width * scale)), max(1, round(crop.height * scale))),
            Image.Resampling.LANCZOS,
        )

        center_x = (crop.width / 2) * scale
        bottom_y = crop.height * scale
        paste_x = round((FRAME_SIZE / 2) - center_x)
        paste_y = round(BASELINE_Y - bottom_y)
        paste_x = min(max(paste_x, 4 - resized.width), FRAME_SIZE - 4)
        paste_y = min(max(paste_y, 4 - resized.height), FRAME_SIZE - 4)

        cell = Image.new("RGBA", (FRAME_SIZE, FRAME_SIZE), (0, 0, 0, 0))
        cell.alpha_composite(resized, (paste_x, paste_y))
        output_bbox = cell.getchannel("A").getbbox()
        if output_bbox is None:
            raise RuntimeError(f"{frame.label} became empty during normalization")
        normalized.append(cell)
        report.append(
            {
                "label": frame.label,
                "sourceBox": [x0, y0, x1, y1],
                "outputBox": list(output_bbox),
                "scale": scale,
                "paste": [paste_x, paste_y],
            }
        )

    return normalized, report


def mirror_frames(frames: list[Image.Image]) -> list[Image.Image]:
    return [ImageOps.mirror(frame) for frame in frames]


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
    parser = argparse.ArgumentParser(description="Build transparent game sprite strips from hatch-pet generated bird rows.")
    parser.add_argument("--run-dir", type=Path, default=Path("work/runs/plume-hatch-game"))
    parser.add_argument("--out-dir", type=Path, default=Path("public/images/units/bird"))
    parser.add_argument("--audit-dir", type=Path, default=Path("output/playwright/bird-hatch-frame-audit"))
    args = parser.parse_args()

    decoded_dir = args.run_dir / "decoded"
    missing = [name for name in ROW_FRAME_COUNTS if not (decoded_dir / f"{name}.png").exists()]
    if missing:
        raise RuntimeError(f"Missing hatch-pet decoded rows: {', '.join(missing)}")

    args.out_dir.mkdir(parents=True, exist_ok=True)
    args.audit_dir.mkdir(parents=True, exist_ok=True)

    source_reference = args.run_dir / "references" / "reference-01.png"
    if source_reference.exists():
        Image.open(source_reference).convert("RGBA").save(args.out_dir / "source-reference.png")

    generated: dict[str, list[Image.Image]] = {}
    sequence_reports: dict[str, object] = {}
    for row_name, frame_count in ROW_FRAME_COUNTS.items():
        row = Image.open(decoded_dir / f"{row_name}.png").convert("RGBA")
        prepared = split_row(row, row_name, frame_count)
        frames, report = normalize_sequence(prepared)
        generated[row_name] = frames
        sequence_reports[row_name] = report

    idle = generated["idle"]
    run_right = generated["running-right"]
    run_left = generated["running-left"]
    hit = generated["failed"]
    action = generated["waving"]
    action_left = mirror_frames(action)

    save_sequence(args.out_dir, "idle", idle, 118)
    save_sequence(args.out_dir, "ready", idle, 105)
    save_sequence(args.out_dir, "walk-right", run_right, 92)
    save_sequence(args.out_dir, "walk-left", run_left, 92)
    save_sequence(args.out_dir, "run-right", run_right, 72)
    save_sequence(args.out_dir, "run-left", run_left, 72)
    save_sequence(args.out_dir, "hit", hit, 95)
    save_sequence(args.out_dir, "happy", action, 100)
    save_sequence(args.out_dir, "action", action, 85)
    save_sequence(args.out_dir, "action-left", action_left, 85)
    idle[0].save(args.out_dir / "idle-poster.png")

    canonical = Image.open(decoded_dir / "base.png").convert("RGBA")
    base_cutout = remove_connected_chroma(canonical)
    bbox = base_cutout.getchannel("A").getbbox()
    if bbox is not None:
        base_crop = base_cutout.crop(expand_box(bbox, base_cutout.width, base_cutout.height, 12))
        scale = min(430 / base_crop.width, 430 / base_crop.height)
        resized = base_crop.resize(
            (max(1, round(base_crop.width * scale)), max(1, round(base_crop.height * scale))),
            Image.Resampling.LANCZOS,
        )
        source_canvas = Image.new("RGBA", (FRAME_SIZE, FRAME_SIZE), (0, 0, 0, 0))
        source_canvas.alpha_composite(resized, ((FRAME_SIZE - resized.width) // 2, BASELINE_Y - resized.height))
        source_canvas.save(args.out_dir / "source-cutout.png")

    save_contact_sheet(
        args.audit_dir / "generated-animation-contact.png",
        {
            "idle / base": idle,
            "running right": run_right,
            "running left": run_left,
            "hit / damage taken": hit,
            "action / damage dealt": action,
        },
    )

    report = {
        "status": "pass",
        "runDir": str(args.run_dir),
        "outDir": str(args.out_dir),
        "frameSize": FRAME_SIZE,
        "sourceRows": ROW_FRAME_COUNTS,
        "animations": {
            "idle": {"frames": len(idle), "sourceRow": "idle"},
            "ready": {"frames": len(idle), "sourceRow": "idle"},
            "walkRight": {"frames": len(run_right), "sourceRow": "running-right"},
            "walkLeft": {"frames": len(run_left), "sourceRow": "running-left"},
            "runRight": {"frames": len(run_right), "sourceRow": "running-right"},
            "runLeft": {"frames": len(run_left), "sourceRow": "running-left"},
            "hit": {"frames": len(hit), "sourceRow": "failed"},
            "happy": {"frames": len(action), "sourceRow": "waving"},
            "action": {"frames": len(action), "sourceRow": "waving"},
            "actionLeft": {"frames": len(action_left), "sourceRow": "waving mirrored"},
        },
        "sequences": sequence_reports,
    }
    (args.audit_dir / "build-report.json").write_text(json.dumps(report, indent=2), encoding="utf-8")
    print(f"Wrote hatch-pet bird assets to {args.out_dir.resolve()}")


if __name__ == "__main__":
    main()
