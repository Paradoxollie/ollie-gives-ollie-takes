from __future__ import annotations

import argparse
import math
from collections import deque
from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageOps


SHEET_FRAME_SIZE = 512
UI_FRAME_SIZE = 256


def default_source() -> Path:
    return Path.home() / "Downloads" / "ChatGPT Image 28 avr. 2026, 16_45_05.png"


def is_background(pixel: tuple[int, int, int, int]) -> bool:
    r, g, b, a = pixel
    if a == 0:
        return True
    if r < 224 or g < 224 or b < 224:
        return False
    return max(r, g, b) - min(r, g, b) < 34


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


def keep_main_component(image: Image.Image) -> Image.Image:
    rgba = image.convert("RGBA")
    components = alpha_components(rgba)
    if not components:
        return rgba

    largest_points = components[0][2]
    cleaned = Image.new("RGBA", rgba.size, (0, 0, 0, 0))
    source_pixels = rgba.load()
    cleaned_pixels = cleaned.load()
    for x, y in largest_points:
        cleaned_pixels[x, y] = source_pixels[x, y]
    return cleaned


def trim_alpha(image: Image.Image) -> Image.Image:
    bbox = image.getchannel("A").getbbox()
    if bbox is None:
        raise RuntimeError("Empty shark frame after background removal")
    return image.crop(bbox)


def normalize_cutout(source: Image.Image, size: int, scale: float = 0.9, bottom_pad: float = 0.055) -> Image.Image:
    cutout = trim_alpha(source)
    ratio = min((size * scale) / cutout.width, (size * scale) / cutout.height)
    resized = cutout.resize(
        (max(1, round(cutout.width * ratio)), max(1, round(cutout.height * ratio))),
        Image.Resampling.LANCZOS,
    )
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    x = (size - resized.width) // 2
    y = size - resized.height - round(size * bottom_pad)
    canvas.alpha_composite(resized, (x, y))
    return canvas


def sine_warp_x(image: Image.Image, phase: float, amplitude: float, frequency: float = 1.35) -> Image.Image:
    margin = math.ceil(abs(amplitude)) + 8
    warped = Image.new("RGBA", (image.width + margin * 2, image.height), (0, 0, 0, 0))
    strip_height = 4
    for y in range(0, image.height, strip_height):
        strip = image.crop((0, y, image.width, min(image.height, y + strip_height)))
        weight = (y / max(1, image.height - 1)) * math.pi * 2 * frequency
        shift = round(math.sin(weight + phase) * amplitude)
        warped.alpha_composite(strip, (margin + shift, y))
    return warped.crop((margin, 0, margin + image.width, image.height))


def transform_sprite(
    image: Image.Image,
    phase: float,
    *,
    x: int = 0,
    y: int = 0,
    rotate: float = 0,
    scale_x: float = 1,
    scale_y: float = 1,
    warp: float = 0,
    mirror: bool = False,
    brightness: float = 1,
    saturation: float = 1,
) -> Image.Image:
    sprite = ImageOps.mirror(image) if mirror else image
    if warp:
        sprite = sine_warp_x(sprite, phase, warp)
    if brightness != 1:
        sprite = ImageEnhance.Brightness(sprite).enhance(brightness)
    if saturation != 1:
        sprite = ImageEnhance.Color(sprite).enhance(saturation)

    resized = sprite.resize(
        (max(1, round(sprite.width * scale_x)), max(1, round(sprite.height * scale_y))),
        Image.Resampling.BICUBIC,
    )
    rotated = resized.rotate(rotate, resample=Image.Resampling.BICUBIC, expand=True)
    frame = Image.new("RGBA", (SHEET_FRAME_SIZE, SHEET_FRAME_SIZE), (0, 0, 0, 0))
    px = (SHEET_FRAME_SIZE - rotated.width) // 2 + x
    py = (SHEET_FRAME_SIZE - rotated.height) // 2 + y
    frame.alpha_composite(rotated, (px, py))
    return frame


def draw_shadow(frame: Image.Image, y: int, width: int, alpha: int = 52) -> None:
    shadow = Image.new("RGBA", frame.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(shadow)
    cx = SHEET_FRAME_SIZE // 2
    draw.ellipse((cx - width, y - 14, cx + width, y + 18), fill=(4, 21, 35, alpha))
    frame.alpha_composite(shadow.filter(ImageFilter.GaussianBlur(7)))


def draw_bubble(draw: ImageDraw.ImageDraw, x: int, y: int, radius: int, alpha: int = 145) -> None:
    draw.ellipse((x - radius, y - radius, x + radius, y + radius), outline=(123, 236, 255, alpha), width=max(1, radius // 5))
    draw.ellipse((x - radius // 3, y - radius // 3, x, y), fill=(237, 255, 255, min(210, alpha + 35)))


def draw_sparkle(draw: ImageDraw.ImageDraw, x: int, y: int, size: int, alpha: int = 190) -> None:
    points = [(x, y - size), (x + size // 3, y - size // 3), (x + size, y), (x + size // 3, y + size // 3), (x, y + size), (x - size // 3, y + size // 3), (x - size, y), (x - size // 3, y - size // 3)]
    draw.polygon(points, fill=(105, 245, 255, alpha))
    draw.line((x - size, y, x + size, y), fill=(233, 255, 255, alpha), width=1)
    draw.line((x, y - size, x, y + size), fill=(233, 255, 255, alpha), width=1)


def draw_water_arc(frame: Image.Image, phase: float, *, mirror: bool = False, strong: bool = False) -> None:
    fx = Image.new("RGBA", frame.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(fx)
    direction = -1 if mirror else 1
    base_x = 324 if not mirror else 188
    base_y = 356
    amp = 18 if strong else 12
    for index in range(4):
        t = index / 3
        x0 = base_x + direction * round(t * 118)
        y0 = base_y - round(math.sin(t * math.pi + phase) * amp) + index * 3
        x1 = x0 + direction * (64 + index * 12)
        y1 = y0 + 28 + index * 5
        color = (79, 231, 255, 170 - index * 24)
        draw.arc((min(x0, x1), y0 - 42, max(x0, x1), y1 + 36), 245 if not mirror else -65, 338 if not mirror else 28, fill=color, width=4)
    frame.alpha_composite(fx.filter(ImageFilter.GaussianBlur(0.45)))


def draw_speed_trails(frame: Image.Image, phase: float, *, mirror: bool = False) -> None:
    fx = Image.new("RGBA", frame.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(fx)
    direction = -1 if mirror else 1
    start_x = 112 if not mirror else 400
    for index in range(7):
        y = 210 + index * 24 + round(math.sin(phase + index) * 7)
        length = 72 + index * 9
        x0 = start_x - direction * index * 10
        x1 = x0 - direction * length
        draw.line((x0, y, x1, y + round(math.sin(phase + index) * 5)), fill=(78, 220, 255, 120 - index * 10), width=4)
        draw.line((x0, y + 9, x1 + direction * 24, y + 12), fill=(91, 255, 173, 80 - index * 7), width=2)
    frame.alpha_composite(fx.filter(ImageFilter.GaussianBlur(0.7)))


def draw_idle_fx(frame: Image.Image, phase: float, *, happy: bool = False) -> None:
    fx = Image.new("RGBA", frame.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(fx)
    bubbles = [(106, 164, 10), (402, 136, 8), (430, 258, 13), (116, 346, 7), (394, 384, 9)]
    for index, (x, y, radius) in enumerate(bubbles):
        yy = y + round(math.sin(phase + index * 1.1) * 8)
        draw_bubble(draw, x, yy, radius, 112)
    if happy:
        for index, (x, y) in enumerate(((129, 110), (404, 96), (448, 344), (80, 282), (360, 222))):
            draw_sparkle(draw, x, y + round(math.sin(phase + index) * 7), 9 + index % 2 * 2, 185)
    frame.alpha_composite(fx)


def add_glow(frame: Image.Image, color: tuple[int, int, int, int], blur: int = 8) -> None:
    alpha = frame.getchannel("A")
    glow = Image.new("RGBA", frame.size, color)
    glow.putalpha(alpha.filter(ImageFilter.GaussianBlur(blur)))
    composed = Image.alpha_composite(glow, frame)
    frame.paste(composed)


def tint(frame: Image.Image, color: tuple[int, int, int, int]) -> Image.Image:
    overlay = Image.new("RGBA", frame.size, color)
    tinted = Image.alpha_composite(frame, overlay)
    tinted.putalpha(frame.getchannel("A"))
    return tinted


def make_mask(
    polygons: list[list[tuple[int, int]]] | None = None,
    ellipses: list[tuple[int, int, int, int]] | None = None,
    blur: float = 1.2,
) -> Image.Image:
    mask = Image.new("L", (SHEET_FRAME_SIZE, SHEET_FRAME_SIZE), 0)
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
) -> Image.Image:
    return layer.rotate(
        angle,
        resample=Image.Resampling.BICUBIC,
        center=pivot,
        translate=(x, y),
        expand=False,
    )


def make_shark_rig(base: Image.Image) -> dict[str, Image.Image]:
    tail_mask = make_mask(
        polygons=[
            [(18, 282), (78, 246), (150, 268), (205, 333), (173, 417), (74, 438), (20, 395)],
            [(104, 250), (181, 265), (174, 337), (110, 342)],
        ],
        blur=1.4,
    )
    back_leg_mask = make_mask(
        polygons=[[(145, 324), (211, 320), (235, 444), (206, 493), (159, 482), (150, 392)]],
        ellipses=[(152, 398, 228, 493)],
        blur=1.3,
    )
    front_leg_mask = make_mask(
        polygons=[[(286, 322), (353, 323), (374, 438), (344, 472), (299, 456), (296, 372)]],
        ellipses=[(299, 397, 371, 471)],
        blur=1.2,
    )
    back_fin_mask = make_mask(
        polygons=[[(95, 296), (175, 286), (205, 329), (178, 387), (122, 372)]],
        blur=1.2,
    )
    front_fin_mask = make_mask(
        polygons=[[(369, 292), (424, 306), (415, 381), (371, 365)]],
        blur=1.2,
    )
    all_masks = [tail_mask, back_leg_mask, front_leg_mask, back_fin_mask, front_fin_mask]

    return {
        "tail": apply_mask(base, tail_mask),
        "back_leg": apply_mask(base, back_leg_mask),
        "front_leg": apply_mask(base, front_leg_mask),
        "back_fin": apply_mask(base, back_fin_mask),
        "front_fin": apply_mask(base, front_fin_mask),
        "core": remove_masks(base, all_masks),
    }


def draw_step_splash(frame: Image.Image, phase: float, *, mirror: bool = False, strong: bool = False) -> None:
    fx = Image.new("RGBA", frame.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(fx)
    direction = -1 if mirror else 1
    lift_front = max(0, math.sin(phase))
    lift_back = max(0, -math.sin(phase))
    contacts = [
        (342 if not mirror else 170, 456, lift_back),
        (190 if not mirror else 322, 468, lift_front),
    ]
    for x, y, lift in contacts:
        intensity = 1 - min(1, lift)
        if intensity < 0.35 and not strong:
            continue
        width = round((34 if strong else 24) * intensity)
        alpha = round((118 if strong else 82) * intensity)
        draw.arc((x - width, y - 12, x + width, y + 10), 185, 350, fill=(93, 232, 255, alpha), width=3)
        for index in range(3):
            px = x - direction * (8 + index * 9)
            py = y - 6 - index * 2
            draw_bubble(draw, px, py, 3 + index, alpha=max(45, alpha - index * 20))
    frame.alpha_composite(fx.filter(ImageFilter.GaussianBlur(0.35)))


def compose_walk_pose(
    parts: dict[str, Image.Image],
    phase: float,
    *,
    mirror: bool = False,
    stride: float = 1,
    speed_fx: bool = False,
    action_push: int = 0,
    happy: bool = False,
    hit: bool = False,
) -> Image.Image:
    s = math.sin(phase)
    c = math.cos(phase)
    lift_front = max(0, s) * stride
    lift_back = max(0, -s) * stride
    direction = -1 if mirror else 1

    body_x = direction * (round(c * 2) + action_push)
    body_y = -round(abs(s) * 6 * stride)
    if happy:
        body_y -= 8 + round(math.sin(phase * 2) * 3)
    if hit:
        body_x += direction * round(math.sin(phase * 3) * 8)
        body_y += 3

    frame = Image.new("RGBA", (SHEET_FRAME_SIZE, SHEET_FRAME_SIZE), (0, 0, 0, 0))
    draw_shadow(frame, 434 + max(0, body_y // 3), round(140 + 18 * stride), 44)

    tail_angle = direction * (9 * math.sin(phase + 0.7) + action_push * 0.35)
    frame.alpha_composite(transform_layer(parts["tail"], angle=tail_angle, pivot=(150, 356), x=body_x - direction * 3, y=body_y))

    back_leg_angle = direction * (12 * lift_front - 24 * lift_back)
    back_leg_x = body_x + direction * round(-10 * lift_front + 14 * lift_back)
    back_leg_y = body_y + round(5 * lift_front - 26 * lift_back)
    frame.alpha_composite(transform_layer(parts["back_leg"], angle=back_leg_angle, pivot=(197, 343), x=back_leg_x, y=back_leg_y))

    core_angle = direction * (math.sin(phase) * 1.15 + action_push * 0.05)
    frame.alpha_composite(transform_layer(parts["core"], angle=core_angle, pivot=(260, 286), x=body_x, y=body_y))

    back_fin_angle = direction * (-14 * s - action_push * 0.15)
    front_fin_angle = direction * (15 * s + action_push * 0.1)
    frame.alpha_composite(transform_layer(parts["back_fin"], angle=back_fin_angle, pivot=(168, 305), x=body_x, y=body_y))

    front_leg_angle = direction * (-24 * lift_front + 12 * lift_back)
    front_leg_x = body_x + direction * round(14 * lift_front - 8 * lift_back)
    front_leg_y = body_y + round(-28 * lift_front + 6 * lift_back)
    frame.alpha_composite(transform_layer(parts["front_leg"], angle=front_leg_angle, pivot=(324, 338), x=front_leg_x, y=front_leg_y))
    frame.alpha_composite(transform_layer(parts["front_fin"], angle=front_fin_angle, pivot=(383, 305), x=body_x, y=body_y))

    if mirror:
        frame = ImageOps.mirror(frame)

    if speed_fx:
        draw_speed_trails(frame, phase, mirror=mirror)
    draw_step_splash(frame, phase, mirror=mirror, strong=speed_fx or action_push != 0)
    draw_idle_fx(frame, phase, happy=happy)
    if action_push:
        draw_water_arc(frame, phase, mirror=mirror, strong=True)
        add_glow(frame, (58, 235, 255, 48), blur=9)
    if hit:
        frame = tint(frame, (255, 72, 108, 30))
    return frame


def frame_sequence(base: Image.Image, count: int, builder) -> list[Image.Image]:
    frames: list[Image.Image] = []
    for index in range(count):
        phase = (index / count) * math.tau
        frames.append(builder(index, phase))
    return frames


def make_idle(base: Image.Image) -> list[Image.Image]:
    parts = make_shark_rig(base)
    return [compose_walk_pose(parts, (index / 8) * math.tau, stride=0.82) for index in range(8)]


def make_ready(base: Image.Image) -> list[Image.Image]:
    parts = make_shark_rig(base)
    frames = []
    for index in range(8):
        phase = (index / 8) * math.tau
        frame = compose_walk_pose(parts, phase, stride=0.78, happy=True)
        add_glow(frame, (57, 220, 255, 62), blur=9)
        draw_water_arc(frame, phase, strong=index % 2 == 0)
        frames.append(frame)
    return frames


def with_common_fx(frame: Image.Image, phase: float, *, happy: bool = False) -> Image.Image:
    draw_idle_fx(frame, phase, happy=happy)
    draw_shadow(frame, 432 + round(math.sin(phase) * 3), 138, 46)
    return frame


def make_walk(base: Image.Image, *, mirror: bool = False, fast: bool = False) -> list[Image.Image]:
    parts = make_shark_rig(base)
    count = 8
    frames = []
    for index in range(count):
        phase = (index / count) * math.tau
        frame = compose_walk_pose(parts, phase, mirror=mirror, stride=1.9 if fast else 1.35, speed_fx=fast)
        if not fast:
            draw_water_arc(frame, phase, mirror=mirror)
        frames.append(frame)
    return frames


def make_action(base: Image.Image, *, mirror: bool = False) -> list[Image.Image]:
    parts = make_shark_rig(base)
    frames = []
    offsets = [0, 12, 32, 54, 36, 12, -4, 0]
    for index, offset in enumerate(offsets):
        phase = (index / len(offsets)) * math.tau
        direction = -1 if mirror else 1
        frame = compose_walk_pose(parts, phase, mirror=mirror, stride=1.8, speed_fx=True, action_push=direction * offset)
        draw_speed_trails(frame, phase, mirror=mirror)
        draw_water_arc(frame, phase, mirror=mirror, strong=True)
        add_glow(frame, (40, 243, 255, 54), blur=10)
        frames.append(frame)
    return frames


def make_happy(base: Image.Image) -> list[Image.Image]:
    parts = make_shark_rig(base)
    frames = []
    for index in range(8):
        phase = (index / 8) * math.tau
        frame = compose_walk_pose(parts, phase, stride=0.9, happy=True)
        draw_water_arc(frame, phase, strong=True)
        add_glow(frame, (75, 234, 255, 44), blur=10)
        frames.append(frame)
    return frames


def make_hit(base: Image.Image) -> list[Image.Image]:
    parts = make_shark_rig(base)
    frames = []
    shakes = [-10, 11, -7, 6, -3, 0]
    for index, x in enumerate(shakes):
        phase = (index / len(shakes)) * math.tau
        frame = compose_walk_pose(parts, phase, stride=0.5, action_push=x, hit=index < 4)
        if index < 4:
            frame = tint(frame, (255, 70, 104, 34))
        frames.append(frame)
    return frames


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
    parser = argparse.ArgumentParser(description="Build shark animation assets from a single transparent source illustration.")
    parser.add_argument("--source", type=Path, default=default_source())
    parser.add_argument("--out-dir", type=Path, default=Path("public/images/units/shark"))
    args = parser.parse_args()

    out_dir = args.out_dir
    out_dir.mkdir(parents=True, exist_ok=True)

    source = Image.open(args.source).convert("RGBA")
    transparent = remove_connected_background(source)
    main_cutout = keep_main_component(transparent)
    main_cutout.save(out_dir / "source-cutout.png")
    base = normalize_cutout(main_cutout, SHEET_FRAME_SIZE, scale=0.9)

    idle = make_idle(base)
    ready = make_ready(base)
    walk_right = make_walk(base)
    walk_left = make_walk(base, mirror=True)
    run_right = make_walk(base, fast=True)
    run_left = make_walk(base, mirror=True, fast=True)
    action = make_action(base)
    action_left = make_action(base, mirror=True)
    happy = make_happy(base)
    hit = make_hit(base)

    save_sequence(out_dir, "idle", idle, 116)
    save_sequence(out_dir, "ready", ready, 90)
    save_sequence(out_dir, "walk-right", walk_right, 88)
    save_sequence(out_dir, "walk-left", walk_left, 88)
    save_sequence(out_dir, "run-right", run_right, 70)
    save_sequence(out_dir, "run-left", run_left, 70)
    save_sequence(out_dir, "action", action, 62)
    save_sequence(out_dir, "action-left", action_left, 62)
    save_sequence(out_dir, "happy", happy, 92)
    save_sequence(out_dir, "hit", hit, 74)
    idle[0].save(out_dir / "idle-poster.png")

    save_contact_sheet(
        Path("output/playwright/shark-frame-audit/generated-animation-contact.png"),
        {
            "idle": idle,
            "ready": ready,
            "walk_right": walk_right,
            "walk_left": walk_left,
            "run_right": run_right,
            "run_left": run_left,
            "wave_action": action,
            "wave_action_left": action_left,
            "happy": happy,
            "hit": hit,
        },
    )

    print(f"Wrote shark assets to {out_dir.resolve()}")


if __name__ == "__main__":
    main()
