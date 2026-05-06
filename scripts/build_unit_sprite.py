from __future__ import annotations

import math
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public" / "images" / "units" / "lumisylve" / "idle-cutout.png"
OUT_DIR = ROOT / "public" / "images" / "units" / "lumisylve"
FRAME_W = 512
FRAME_H = 768
FRAME_COUNT = 8


def alpha_bbox(image: Image.Image) -> tuple[int, int, int, int]:
    bbox = image.getchannel("A").getbbox()
    if not bbox:
        raise RuntimeError("Source image has no visible alpha.")
    return bbox


def fit_subject(image: Image.Image) -> Image.Image:
    cropped = image.crop(alpha_bbox(image))
    target_w = int(FRAME_W * 0.78)
    target_h = int(FRAME_H * 0.9)
    scale = min(target_w / cropped.width, target_h / cropped.height)
    size = (max(1, round(cropped.width * scale)), max(1, round(cropped.height * scale)))
    return cropped.resize(size, Image.Resampling.LANCZOS)


def paste_centered(canvas: Image.Image, subject: Image.Image, x_offset: int, y_offset: int) -> None:
    x = (FRAME_W - subject.width) // 2 + x_offset
    y = FRAME_H - subject.height - 30 + y_offset
    canvas.alpha_composite(subject, (x, y))


def make_frame(base: Image.Image, index: int) -> Image.Image:
    t = index / FRAME_COUNT
    wave = math.sin(t * math.tau)
    secondary = math.sin((t + 0.18) * math.tau)
    squash_x = 1 + wave * 0.014
    squash_y = 1 - wave * 0.01
    bob = round(-8 + wave * 8)
    sway = secondary * 1.4

    resized = base.resize(
        (
            max(1, round(base.width * squash_x)),
            max(1, round(base.height * squash_y)),
        ),
        Image.Resampling.LANCZOS,
    )
    rotated = resized.rotate(sway, resample=Image.Resampling.BICUBIC, expand=True)

    frame = Image.new("RGBA", (FRAME_W, FRAME_H), (0, 0, 0, 0))
    shadow = Image.new("RGBA", (FRAME_W, FRAME_H), (0, 0, 0, 0))
    shadow_ellipse = Image.new("RGBA", (round(FRAME_W * 0.48), 42), (0, 0, 0, 0))
    shadow_alpha = Image.new("L", shadow_ellipse.size, 0)
    ImageDraw.Draw(shadow_alpha).ellipse(
        (8, 6, shadow_ellipse.width - 8, shadow_ellipse.height - 8),
        fill=120,
    )
    shadow_alpha = shadow_alpha.filter(ImageFilter.GaussianBlur(14))
    shadow_ellipse.putalpha(shadow_alpha)
    shadow_x = (FRAME_W - shadow_ellipse.width) // 2
    shadow_y = FRAME_H - 62
    shadow.alpha_composite(shadow_ellipse, (shadow_x, shadow_y))
    frame.alpha_composite(shadow)

    paste_centered(frame, rotated, round(secondary * 2), bob)
    return frame


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    source = Image.open(SOURCE).convert("RGBA")
    base = fit_subject(source)
    frames = [make_frame(base, index) for index in range(FRAME_COUNT)]
    sheet = Image.new("RGBA", (FRAME_W * FRAME_COUNT, FRAME_H), (0, 0, 0, 0))

    for index, frame in enumerate(frames):
        sheet.alpha_composite(frame, (index * FRAME_W, 0))

    sheet.save(OUT_DIR / "idle-sheet.png")
    frames[0].save(OUT_DIR / "idle-poster.png")


if __name__ == "__main__":
    main()
