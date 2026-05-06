import argparse
import io
import sys

from PIL import Image


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--shortest-side", type=int, default=192)
    parser.add_argument("--palette-size", type=int, default=40)
    parser.add_argument("--subject-scale", type=float, default=0.82)
    parser.add_argument("--alpha-threshold", type=int, default=80)
    parser.add_argument("--center-cutout", action="store_true")
    return parser.parse_args()


def clamp(value: float, lower: float, upper: float) -> float:
    return max(lower, min(upper, value))


def build_pixel_art_image(
    image: Image.Image,
    shortest_side: int,
    palette_size: int,
    subject_scale: float,
    alpha_threshold: int,
    center_cutout: bool,
) -> Image.Image:
    source = image.convert("RGBA")
    width, height = source.size
    low_scale = shortest_side / float(min(width, height))
    low_width = max(32, int(round(width * low_scale)))
    low_height = max(32, int(round(height * low_scale)))

    rgb = source.convert("RGB").resize((low_width, low_height), Image.Resampling.BICUBIC)
    alpha = source.getchannel("A").resize((low_width, low_height), Image.Resampling.LANCZOS)

    alpha = alpha.point(lambda value: 255 if value >= alpha_threshold else 0)
    quantized = rgb.quantize(colors=max(8, palette_size), method=Image.Quantize.MEDIANCUT).convert("RGBA")
    quantized.putalpha(alpha)

    upscaled = quantized.resize((width, height), Image.Resampling.NEAREST)
    if not center_cutout:
        return upscaled

    alpha_box = upscaled.getchannel("A").getbbox()
    if alpha_box is None:
        return upscaled

    sprite = upscaled.crop(alpha_box)
    sprite_width, sprite_height = sprite.size
    target_width = max(8, int(round(width * clamp(subject_scale, 0.4, 0.95))))
    target_height = max(8, int(round(height * clamp(subject_scale, 0.4, 0.95))))
    sprite_scale = min(target_width / sprite_width, target_height / sprite_height)
    sprite_scale = max(sprite_scale, 0.1)

    resized_sprite = sprite.resize(
        (
            max(8, int(round(sprite_width * sprite_scale))),
            max(8, int(round(sprite_height * sprite_scale))),
        ),
        Image.Resampling.NEAREST,
    )

    canvas = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    offset_x = (width - resized_sprite.width) // 2
    offset_y = (height - resized_sprite.height) // 2
    canvas.alpha_composite(resized_sprite, (offset_x, offset_y))
    return canvas


def main() -> int:
    args = parse_args()
    source_bytes = sys.stdin.buffer.read()
    if not source_bytes:
        raise RuntimeError("No image bytes received on stdin.")

    image = Image.open(io.BytesIO(source_bytes))
    result = build_pixel_art_image(
        image=image,
        shortest_side=args.shortest_side,
        palette_size=args.palette_size,
        subject_scale=args.subject_scale,
        alpha_threshold=args.alpha_threshold,
        center_cutout=args.center_cutout,
    )

    output = io.BytesIO()
    result.save(output, format="PNG")
    sys.stdout.buffer.write(output.getvalue())
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
