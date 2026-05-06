from __future__ import annotations

import argparse
import json
import math
from collections import deque
from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageOps


FRAME_SIZE = 512
UI_FRAME_SIZE = 256


def default_source() -> Path:
    return Path.home() / "Downloads" / "ChatGPT Image 28 avr. 2026, 15_16_10.png"


def is_background(pixel: tuple[int, int, int, int]) -> bool:
    r, g, b, a = pixel
    if a == 0:
        return True

    chroma = max(r, g, b) - min(r, g, b)
    return (min(r, g, b) >= 222 and chroma <= 52) or (min(r, g, b) >= 246 and chroma <= 72)


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
        if not is_background(pixels[x, y]):
            continue

        r, g, b, _ = pixels[x, y]
        pixels[x, y] = (r, g, b, 0)
        queue.extend(((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)))

    clear_light_fringe(rgba)
    return rgba


def clear_light_fringe(image: Image.Image) -> None:
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
            if touches_transparency and min(r, g, b) >= 243 and chroma <= 24:
                clear.append((x, y))

    for x, y in clear:
        r, g, b, _ = pixels[x, y]
        pixels[x, y] = (r, g, b, 0)


def clear_reference_effects(image: Image.Image) -> None:
    draw = ImageDraw.Draw(image)
    for box in (
        (85, 110, 305, 410),
        (1030, 150, 1185, 430),
        (145, 885, 390, 1110),
        (880, 130, 1025, 430),
        (918, 1052, 990, 1140),
        (174, 354, 302, 542),
        (318, 118, 386, 188),
        (975, 420, 1030, 475),
        (814, 620, 856, 670),
        (1072, 1028, 1118, 1078),
    ):
        draw.rectangle(box, fill=(0, 0, 0, 0))


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


def keep_subject_components(image: Image.Image) -> Image.Image:
    rgba = image.convert("RGBA")
    components = alpha_components(rgba)
    if not components:
        raise RuntimeError("Bird source is empty after background removal")

    keep: set[tuple[int, int]] = set()
    for size, _, points in components:
        if size >= 1_800:
            keep.update(points)

    cleaned = Image.new("RGBA", rgba.size, (0, 0, 0, 0))
    source = rgba.load()
    target = cleaned.load()
    for x, y in keep:
        target[x, y] = source[x, y]
    return cleaned


def trim_alpha(image: Image.Image) -> Image.Image:
    bbox = image.getchannel("A").getbbox()
    if bbox is None:
        raise RuntimeError("Empty bird frame")
    return image.crop(bbox)


def normalize_cutout(source: Image.Image) -> Image.Image:
    cutout = trim_alpha(source)
    ratio = min(430 / cutout.width, 430 / cutout.height)
    resized = cutout.resize(
        (max(1, round(cutout.width * ratio)), max(1, round(cutout.height * ratio))),
        Image.Resampling.LANCZOS,
    )
    canvas = Image.new("RGBA", (FRAME_SIZE, FRAME_SIZE), (0, 0, 0, 0))
    canvas.alpha_composite(resized, ((FRAME_SIZE - resized.width) // 2, FRAME_SIZE - resized.height - 28))
    return canvas


def make_mask(
    polygons: list[list[tuple[int, int]]] | None = None,
    ellipses: list[tuple[int, int, int, int]] | None = None,
    blur: float = 1.2,
) -> Image.Image:
    mask = Image.new("L", (FRAME_SIZE, FRAME_SIZE), 0)
    draw = ImageDraw.Draw(mask)
    for polygon in polygons or []:
        draw.polygon(polygon, fill=255)
    for ellipse in ellipses or []:
        draw.ellipse(ellipse, fill=255)
    if blur:
        mask = mask.filter(ImageFilter.GaussianBlur(blur))
    return mask


def apply_mask(image: Image.Image, mask: Image.Image) -> Image.Image:
    layer = Image.new("RGBA", image.size, (0, 0, 0, 0))
    layer.alpha_composite(image)
    alpha = Image.composite(image.getchannel("A"), Image.new("L", image.size, 0), mask)
    layer.putalpha(alpha)
    return layer


def remove_masks(image: Image.Image, masks: list[Image.Image]) -> Image.Image:
    cleaned = Image.new("RGBA", image.size, (0, 0, 0, 0))
    cleaned.alpha_composite(image)
    alpha = cleaned.getchannel("A")
    for mask in masks:
        alpha = Image.composite(Image.new("L", image.size, 0), alpha, mask)
    cleaned.putalpha(alpha)
    return cleaned


def transform_layer(
    layer: Image.Image,
    *,
    angle: float = 0,
    pivot: tuple[int, int] = (256, 256),
    x: int = 0,
    y: int = 0,
    scale_x: float = 1,
    scale_y: float = 1,
) -> Image.Image:
    working = layer
    if scale_x != 1 or scale_y != 1:
        working = layer.resize(
            (max(1, round(layer.width * scale_x)), max(1, round(layer.height * scale_y))),
            Image.Resampling.BICUBIC,
        )
        scaled = Image.new("RGBA", layer.size, (0, 0, 0, 0))
        scaled.alpha_composite(working, ((layer.width - working.width) // 2, (layer.height - working.height) // 2))
        working = scaled

    return working.rotate(
        angle,
        resample=Image.Resampling.BICUBIC,
        center=pivot,
        translate=(x, y),
        expand=False,
    )


def tint(frame: Image.Image, color: tuple[int, int, int, int]) -> Image.Image:
    overlay = Image.new("RGBA", frame.size, color)
    tinted = Image.alpha_composite(frame, overlay)
    tinted.putalpha(frame.getchannel("A"))
    return tinted


def add_attached_gem_glow(frame: Image.Image, intensity: float) -> None:
    fx = Image.new("RGBA", frame.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(fx)
    alpha = round(110 * intensity)
    draw.ellipse((205, 250, 306, 350), outline=(99, 242, 255, alpha), width=5)
    draw.ellipse((224, 274, 288, 342), outline=(121, 255, 221, max(0, alpha - 24)), width=3)
    frame.alpha_composite(fx.filter(ImageFilter.GaussianBlur(0.6)))


def make_bird_rig(base: Image.Image) -> dict[str, Image.Image]:
    left_wing_mask = make_mask(
        polygons=[
            [(20, 268), (65, 218), (133, 198), (220, 282), (213, 365), (116, 378), (40, 337)],
            [(58, 238), (160, 230), (226, 310), (143, 352), (34, 318)],
        ],
        blur=1.4,
    )
    tail_mask = make_mask(
        polygons=[
            [(334, 236), (492, 204), (506, 363), (430, 448), (287, 422), (298, 310)],
            [(308, 354), (496, 313), (486, 448), (340, 454)],
        ],
        blur=1.35,
    )
    front_wing_mask = make_mask(
        polygons=[[(268, 276), (380, 305), (411, 373), (362, 417), (264, 382), (238, 314)]],
        ellipses=[(262, 287, 413, 412)],
        blur=1.2,
    )
    head_mask = make_mask(
        polygons=[[(115, 74), (256, 42), (374, 74), (389, 238), (315, 292), (173, 282), (96, 215)]],
        ellipses=[(104, 70, 390, 292)],
        blur=1.1,
    )
    all_masks = [left_wing_mask, tail_mask, front_wing_mask, head_mask]
    return {
        "left_wing": apply_mask(base, left_wing_mask),
        "tail": apply_mask(base, tail_mask),
        "front_wing": apply_mask(base, front_wing_mask),
        "head": apply_mask(base, head_mask),
        "core": remove_masks(base, all_masks),
    }


def compose_pose(parts: dict[str, Image.Image], phase: float, *, mode: str = "idle") -> Image.Image:
    s = math.sin(phase)
    c = math.cos(phase)

    if mode == "ready":
        wing_amp = 18
        body_y = -round(7 + abs(s) * 9)
        body_x = round(c * 2)
        head_angle = s * 3.0
        tail_angle = -10 + s * 13
        front_wing_angle = -8 + s * 16
        left_wing_angle = 10 - s * 18
    elif mode == "action":
        wing_amp = 30
        lift = math.sin(min(math.pi, phase % math.tau))
        body_y = -round(max(0, lift) * 26 + abs(s) * 5)
        body_x = round(c * 5)
        head_angle = -3 + s * 5
        tail_angle = -18 + s * 22
        front_wing_angle = -18 + s * 24
        left_wing_angle = 18 - s * 28
    elif mode == "hit":
        body_x = round(math.sin(phase * 2.2) * 12)
        body_y = 7 - round(abs(s) * 4)
        head_angle = -8 + s * 7
        tail_angle = 9 + s * 8
        front_wing_angle = 14 + s * 8
        left_wing_angle = -12 + s * 7
        wing_amp = 6
    else:
        wing_amp = 8
        body_y = -round(abs(s) * 5)
        body_x = round(c * 1.5)
        head_angle = s * 1.6
        tail_angle = -4 + s * 6
        front_wing_angle = -2 + s * 6
        left_wing_angle = 4 - s * 7

    frame = Image.new("RGBA", (FRAME_SIZE, FRAME_SIZE), (0, 0, 0, 0))
    frame.alpha_composite(transform_layer(parts["tail"], angle=tail_angle, pivot=(351, 341), x=body_x, y=body_y))
    frame.alpha_composite(
        transform_layer(
            parts["left_wing"],
            angle=left_wing_angle,
            pivot=(197, 310),
            x=body_x - round(wing_amp * 0.08),
            y=body_y + round(s * 3),
        ),
    )
    frame.alpha_composite(
        transform_layer(
            parts["core"],
            angle=s * 0.8,
            pivot=(255, 337),
            x=body_x,
            y=body_y,
            scale_y=1 + (0.012 if mode != "hit" else -0.01) * abs(s),
        ),
    )
    frame.alpha_composite(transform_layer(parts["head"], angle=head_angle, pivot=(253, 214), x=body_x, y=body_y - round(abs(s) * 2)))
    frame.alpha_composite(
        transform_layer(
            parts["front_wing"],
            angle=front_wing_angle,
            pivot=(305, 305),
            x=body_x + round(wing_amp * 0.08),
            y=body_y + round(c * 3),
        ),
    )

    if mode == "action":
        add_attached_gem_glow(frame, 0.55 + 0.45 * abs(s))
        frame = ImageEnhance.Color(frame).enhance(1.06)
    if mode == "ready":
        add_attached_gem_glow(frame, 0.28 + 0.28 * abs(s))
    if mode == "hit":
        frame = tint(frame, (255, 75, 112, 34))

    return frame


def sequence(parts: dict[str, Image.Image], count: int, mode: str) -> list[Image.Image]:
    return [compose_pose(parts, (index / count) * math.tau, mode=mode) for index in range(count)]


def mirrored(frames: list[Image.Image]) -> list[Image.Image]:
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
    parser = argparse.ArgumentParser(description="Build smooth transparent bird animation strips from one reference character.")
    parser.add_argument("--source", type=Path, default=default_source())
    parser.add_argument("--out-dir", type=Path, default=Path("public/images/units/bird"))
    parser.add_argument("--audit-dir", type=Path, default=Path("output/playwright/bird-reference-frame-audit"))
    args = parser.parse_args()

    out_dir = args.out_dir
    out_dir.mkdir(parents=True, exist_ok=True)
    args.audit_dir.mkdir(parents=True, exist_ok=True)

    source = Image.open(args.source).convert("RGBA")
    source.save(out_dir / "source-reference.png")
    transparent = remove_connected_background(source)
    clear_reference_effects(transparent)
    subject = keep_subject_components(transparent)
    subject.save(out_dir / "source-cutout.png")

    base = normalize_cutout(subject)
    base.save(out_dir / "idle-poster.png")
    parts = make_bird_rig(base)

    idle = sequence(parts, 12, "idle")
    ready = sequence(parts, 12, "ready")
    action = sequence(parts, 12, "action")
    hit = sequence(parts, 8, "hit")
    action_left = mirrored(action)
    walk_left = mirrored(idle)

    save_sequence(out_dir, "idle", idle, 82)
    save_sequence(out_dir, "ready", ready, 72)
    save_sequence(out_dir, "walk-right", idle, 82)
    save_sequence(out_dir, "walk-left", walk_left, 82)
    save_sequence(out_dir, "run-right", ready, 65)
    save_sequence(out_dir, "run-left", mirrored(ready), 65)
    save_sequence(out_dir, "happy", action, 78)
    save_sequence(out_dir, "action", action, 66)
    save_sequence(out_dir, "action-left", action_left, 66)
    save_sequence(out_dir, "hit", hit, 76)

    save_contact_sheet(
        args.audit_dir / "generated-animation-contact.png",
        {
            "idle / base": idle,
            "ready / wing flutter": ready,
            "hit / damage taken": hit,
            "action / damage dealt": action,
        },
    )

    report = {
        "status": "pass",
        "source": str(args.source),
        "outDir": str(out_dir),
        "frameSize": FRAME_SIZE,
        "frames": {
            "idle": len(idle),
            "ready": len(ready),
            "hit": len(hit),
            "action": len(action),
            "actionLeft": len(action_left),
        },
    }
    (args.audit_dir / "build-report.json").write_text(json.dumps(report, indent=2), encoding="utf-8")
    print(f"Wrote bird reference assets to {out_dir.resolve()}")


if __name__ == "__main__":
    main()
