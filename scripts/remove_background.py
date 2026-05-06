from io import BytesIO
import sys

from PIL import Image
from rembg import remove


def main() -> int:
    source = sys.stdin.buffer.read()
    if not source:
        raise ValueError("No input image bytes received.")

    result = remove(source)
    image = Image.open(BytesIO(result)).convert("RGBA")

    output = BytesIO()
    image.save(output, format="PNG")
    sys.stdout.buffer.write(output.getvalue())
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except Exception as error:  # pragma: no cover - surfaced to Node caller
        print(str(error), file=sys.stderr)
        raise SystemExit(1)
