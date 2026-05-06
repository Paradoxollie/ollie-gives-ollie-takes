from __future__ import annotations

import argparse
import re
from pathlib import Path

from PIL import Image, ImageDraw


def natural_key(path: Path) -> list[object]:
    return [int(part) if part.isdigit() else part.lower() for part in re.split(r"(\d+)", path.name)]


def image_files(source_dir: Path) -> list[Path]:
    return sorted(
        [path for path in source_dir.iterdir() if path.suffix.lower() in {".png", ".jpg", ".jpeg", ".webp"}],
        key=natural_key,
    )


def main() -> None:
    parser = argparse.ArgumentParser(description="Build a numbered contact sheet from animation frames.")
    parser.add_argument("--source-dir", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--cols", type=int, default=12)
    parser.add_argument("--cell-size", type=int, default=128)
    parser.add_argument("--image-size", type=int, default=112)
    args = parser.parse_args()

    frames = image_files(args.source_dir)
    if not frames:
        raise SystemExit(f"No image frames found in {args.source_dir}")

    label_h = max(18, args.cell_size - args.image_size)
    rows = (len(frames) + args.cols - 1) // args.cols
    sheet = Image.new("RGBA", (args.cols * args.cell_size, rows * args.cell_size), (18, 22, 30, 255))
    draw = ImageDraw.Draw(sheet)

    for index, frame_path in enumerate(frames):
        with Image.open(frame_path).convert("RGBA") as image:
            image.thumbnail((args.image_size, args.image_size), Image.Resampling.LANCZOS)
            col = index % args.cols
            row = index // args.cols
            x = col * args.cell_size
            y = row * args.cell_size
            checker = Image.new("RGB", (args.image_size, args.image_size), (226, 232, 240))
            checker_draw = ImageDraw.Draw(checker)
            for cy in range(0, args.image_size, 16):
                for cx in range(0, args.image_size, 16):
                    if (cx // 16 + cy // 16) % 2:
                        checker_draw.rectangle((cx, cy, cx + 15, cy + 15), fill=(202, 211, 223))
            px = x + (args.cell_size - args.image_size) // 2
            py = y + label_h
            sheet.alpha_composite(checker.convert("RGBA"), (px, py))
            sheet.alpha_composite(image, (x + (args.cell_size - image.width) // 2, y + label_h + (args.image_size - image.height) // 2))
            draw.text((x + 6, y + 3), f"{index + 1:02d}", fill=(255, 255, 255))
            draw.rectangle((x, y, x + args.cell_size - 1, y + args.cell_size - 1), outline=(65, 210, 255))

    args.output.parent.mkdir(parents=True, exist_ok=True)
    sheet.convert("RGB").save(args.output)


if __name__ == "__main__":
    main()
