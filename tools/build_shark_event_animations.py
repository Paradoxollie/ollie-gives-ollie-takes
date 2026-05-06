from __future__ import annotations

import math
from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance


FRAME_SIZE = 512
SHARK_DIR = Path("public/images/units/shark")


def split_sheet(path: Path, frame_count: int) -> list[Image.Image]:
    sheet = Image.open(path).convert("RGBA")
    return [sheet.crop((index * FRAME_SIZE, 0, (index + 1) * FRAME_SIZE, FRAME_SIZE)) for index in range(frame_count)]


def translate(frame: Image.Image, x: int = 0, y: int = 0) -> Image.Image:
    output = Image.new("RGBA", frame.size, (0, 0, 0, 0))
    output.alpha_composite(frame, (x, y))
    return output


def tint(frame: Image.Image, color: tuple[int, int, int], alpha: int) -> Image.Image:
    overlay = Image.new("RGBA", frame.size, (*color, 0))
    mask = frame.getchannel("A").point(lambda value: min(alpha, value))
    overlay.putalpha(mask)
    output = Image.alpha_composite(frame, overlay)
    return output


def squash(frame: Image.Image, scale_x: float, scale_y: float, y_offset: int = 0) -> Image.Image:
    bbox = frame.getchannel("A").getbbox()
    if bbox is None:
        return frame
    subject = frame.crop(bbox)
    resized = subject.resize(
        (max(1, round(subject.width * scale_x)), max(1, round(subject.height * scale_y))),
        Image.Resampling.LANCZOS,
    )
    output = Image.new("RGBA", frame.size, (0, 0, 0, 0))
    center_x = (bbox[0] + bbox[2]) // 2
    bottom_y = bbox[3]
    x = center_x - resized.width // 2
    y = bottom_y - resized.height + y_offset
    output.alpha_composite(resized, (x, y))
    return output


def add_sparkles(frame: Image.Image, strength: float, phase: int) -> Image.Image:
    output = frame.copy()
    draw = ImageDraw.Draw(output)
    points = [
        (382, 92, 7),
        (424, 136, 5),
        (386, 308, 8),
        (84, 166, 5),
        (112, 318, 7),
        (446, 248, 5),
    ]
    for index, (x, y, radius) in enumerate(points):
        pulse = max(0.0, math.sin((phase + index * 1.7) * 0.85))
        a = round(60 + 160 * strength * pulse)
        if a <= 0:
            continue
        r = max(2, round(radius * (0.75 + pulse * 0.55)))
        draw.line((x - r, y, x + r, y), fill=(116, 241, 255, a), width=2)
        draw.line((x, y - r, x, y + r), fill=(116, 241, 255, a), width=2)
        draw.ellipse((x - r // 2, y - r // 2, x + r // 2, y + r // 2), fill=(255, 255, 255, min(220, a + 30)))
    return output


def make_hit(frames: list[Image.Image]) -> list[Image.Image]:
    bases = [frames[index] for index in (3, 4, 5, 6, 7, 8, 9, 10)]
    sequence = [
        bases[0],
        tint(translate(squash(bases[1], 1.04, 0.96, 5), -14, 4), (255, 90, 84), 72),
        tint(translate(squash(bases[2], 0.96, 1.03, -3), 11, -2), (255, 90, 84), 98),
        tint(translate(bases[3], -8, 1), (255, 226, 170), 58),
        translate(bases[4], 6, 0),
        translate(bases[5], -3, 0),
        bases[6],
        bases[7],
    ]
    return sequence


def make_happy(frames: list[Image.Image]) -> list[Image.Image]:
    selected = [frames[index] for index in (0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22)]
    offsets = [0, -5, -11, -15, -10, -4, 0, -3, -8, -4, 0, 0]
    scales = [1.0, 1.01, 1.025, 1.035, 1.02, 1.005, 1.0, 1.015, 1.03, 1.015, 1.0, 1.0]
    output: list[Image.Image] = []
    for index, frame in enumerate(selected):
        bounced = squash(frame, scales[index], scales[index], offsets[index])
        enhanced = ImageEnhance.Color(bounced).enhance(1.06)
        enhanced = ImageEnhance.Brightness(enhanced).enhance(1.02 + 0.04 * max(0, math.sin(index / 11 * math.pi)))
        output.append(add_sparkles(enhanced, strength=0.85, phase=index))
    return output


def build_sheet(frames: list[Image.Image]) -> Image.Image:
    sheet = Image.new("RGBA", (FRAME_SIZE * len(frames), FRAME_SIZE), (0, 0, 0, 0))
    for index, frame in enumerate(frames):
        sheet.alpha_composite(frame, (index * FRAME_SIZE, 0))
    return sheet


def save_sequence(name: str, frames: list[Image.Image], duration: int) -> None:
    sheet = build_sheet(frames)
    sheet.save(SHARK_DIR / f"{name}-sheet.png")
    ui = [frame.resize((256, 256), Image.Resampling.LANCZOS) for frame in frames]
    ui[0].save(
        SHARK_DIR / f"{name}-ui.png",
        save_all=True,
        append_images=ui[1:],
        duration=duration,
        loop=0,
        disposal=2,
        optimize=True,
    )


def main() -> None:
    source_frames = split_sheet(SHARK_DIR / "video-idle-sheet.png", 24)
    hit = make_hit(source_frames)
    happy = make_happy(source_frames)
    save_sequence("hit", hit, 70)
    save_sequence("happy", happy, 95)
    save_sequence("action", happy, 84)
    save_sequence("action-left", happy, 84)
    print(f"Generated shark event animations: hit={len(hit)}, happy/action={len(happy)}")


if __name__ == "__main__":
    main()
