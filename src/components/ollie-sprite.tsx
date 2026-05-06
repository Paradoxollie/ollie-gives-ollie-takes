"use client";

interface OllieSpriteProps {
  className?: string;
  label?: string;
}

const OLLIE_SPRITE_SRC = "/images/ollie/ollie-idle-anim.png";
const OLLIE_SPRITE_ASPECT_RATIO = "230 / 320";

export function OllieSprite({ className = "", label }: OllieSpriteProps) {
  const accessibilityProps = label ? { "aria-label": label } : { "aria-hidden": true };

  return (
    <div
      {...accessibilityProps}
      className={["relative overflow-hidden", className].join(" ")}
      style={{ aspectRatio: OLLIE_SPRITE_ASPECT_RATIO }}
    >
      <img
        src={OLLIE_SPRITE_SRC}
        alt={label ?? ""}
        className="h-full w-full object-contain"
        draggable={false}
      />
    </div>
  );
}
