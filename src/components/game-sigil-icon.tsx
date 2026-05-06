import type { ReactNode } from "react";

import type { EnemyProfileId, LuckyCharmDefinition } from "@/core/types";

type SigilId = EnemyProfileId | LuckyCharmDefinition["icon"];

interface GameSigilIconProps {
  id: SigilId;
  className?: string;
}

function baseSvg(props: { className?: string; children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={props.className ?? "h-5 w-5"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {props.children}
    </svg>
  );
}

export function GameSigilIcon({ id, className }: GameSigilIconProps) {
  switch (id) {
    case "aggro":
    case "executioner":
    case "ravager":
    case "burst":
      return baseSvg({
        className,
        children: (
          <>
            <path d="M32 6L38 22L56 16L46 31L58 41L41 42L43 58L32 48L21 58L23 42L6 41L18 31L8 16L26 22L32 6Z" fill="currentColor" />
            <path d="M32 16L35.6 26.4L46 24L39.8 32.2L46 40L36 39.4L36.8 48L32 42.8L27.2 48L28 39.4L18 40L24.2 32.2L18 24L28.4 26.4L32 16Z" fill="black" fillOpacity="0.26" />
          </>
        ),
      });
    case "fortress":
    case "bastion":
    case "warden":
    case "corner":
      return baseSvg({
        className,
        children: (
          <>
            <path d="M18 10H46V20H54V52H10V20H18V10Z" fill="currentColor" />
            <path d="M22 24H42V52H22V24Z" fill="black" fillOpacity="0.24" />
            <path d="M28 32H36V52H28V32Z" fill="currentColor" fillOpacity="0.72" />
          </>
        ),
      });
    case "swarm":
    case "wing":
      return baseSvg({
        className,
        children: (
          <>
            <circle cx="20" cy="24" r="8" fill="currentColor" />
            <circle cx="42" cy="20" r="7" fill="currentColor" fillOpacity="0.9" />
            <circle cx="38" cy="42" r="9" fill="currentColor" fillOpacity="0.84" />
            <circle cx="22" cy="42" r="6" fill="currentColor" fillOpacity="0.75" />
          </>
        ),
      });
    case "trickster":
    case "eye":
      return baseSvg({
        className,
        children: (
          <>
            <path d="M8 32C14 21 22 14 32 14C42 14 50 21 56 32C50 43 42 50 32 50C22 50 14 43 8 32Z" fill="currentColor" />
            <circle cx="32" cy="32" r="10" fill="black" fillOpacity="0.3" />
            <circle cx="32" cy="32" r="5" fill="currentColor" fillOpacity="0.8" />
          </>
        ),
      });
    case "builder":
    case "shaper":
    case "rune":
      return baseSvg({
        className,
        children: (
          <>
            <path d="M32 8L52 20V44L32 56L12 44V20L32 8Z" fill="currentColor" />
            <path d="M32 18L42 24V40L32 46L22 40V24L32 18Z" fill="black" fillOpacity="0.26" />
            <path d="M28 24H36V40H28V24Z" fill="currentColor" fillOpacity="0.76" />
            <path d="M24 28H40V32H24V28Z" fill="currentColor" fillOpacity="0.76" />
          </>
        ),
      });
    case "leaf":
      return baseSvg({
        className,
        children: (
          <>
            <path d="M50 14C31 14 16 26 16 44C16 52 22 56 30 56C46 56 54 40 54 24C54 18 52 15 50 14Z" fill="currentColor" />
            <path d="M24 48C30 39 37 30 46 22" stroke="black" strokeOpacity="0.28" strokeWidth="4" strokeLinecap="round" />
          </>
        ),
      });
    case "drop":
      return baseSvg({
        className,
        children: (
          <>
            <path d="M32 8C24 18 16 27 16 38C16 48 23 56 32 56C41 56 48 48 48 38C48 27 40 18 32 8Z" fill="currentColor" />
            <path d="M26 35C28 31 31 28 35 24" stroke="white" strokeOpacity="0.34" strokeWidth="4" strokeLinecap="round" />
          </>
        ),
      });
    case "bark":
      return baseSvg({
        className,
        children: (
          <>
            <path d="M18 10H46L52 24L42 54H22L12 24L18 10Z" fill="currentColor" />
            <path d="M28 18V46M36 18V40M22 24H42" stroke="black" strokeOpacity="0.22" strokeWidth="4" strokeLinecap="round" />
          </>
        ),
      });
    case "nut":
      return baseSvg({
        className,
        children: (
          <>
            <path d="M20 20L32 12L44 20L50 34L44 48L32 56L20 48L14 34L20 20Z" fill="currentColor" />
            <path d="M32 16V52" stroke="black" strokeOpacity="0.24" strokeWidth="4" strokeLinecap="round" />
          </>
        ),
      });
    case "moss":
      return baseSvg({
        className,
        children: (
          <>
            <path d="M14 44C14 28 24 16 38 16C46 16 54 22 54 32C54 46 42 54 28 54C20 54 14 50 14 44Z" fill="currentColor" />
            <circle cx="24" cy="34" r="4" fill="black" fillOpacity="0.18" />
            <circle cx="36" cy="28" r="3" fill="black" fillOpacity="0.18" />
            <circle cx="40" cy="40" r="5" fill="black" fillOpacity="0.18" />
          </>
        ),
      });
    case "bridge":
      return baseSvg({
        className,
        children: (
          <>
            <path d="M10 42C16 28 24 20 32 20C40 20 48 28 54 42H46C42 34 37 30 32 30C27 30 22 34 18 42H10Z" fill="currentColor" />
            <path d="M14 42H50V50H14V42Z" fill="currentColor" fillOpacity="0.78" />
          </>
        ),
      });
    case "feather":
      return baseSvg({
        className,
        children: (
          <>
            <path d="M46 14C33 14 18 26 18 40C18 48 24 52 30 52C42 52 50 40 50 28C50 20 48 15 46 14Z" fill="currentColor" />
            <path d="M22 46C28 40 34 33 42 20" stroke="black" strokeOpacity="0.22" strokeWidth="4" strokeLinecap="round" />
            <path d="M28 40L36 36M24 34L32 30" stroke="white" strokeOpacity="0.36" strokeWidth="3" strokeLinecap="round" />
          </>
        ),
      });
    case "sap":
      return baseSvg({
        className,
        children: (
          <>
            <path d="M32 10C42 10 50 18 50 28C50 42 38 54 32 54C26 54 14 42 14 28C14 18 22 10 32 10Z" fill="currentColor" />
            <path d="M32 18C38 24 40 28 40 34C40 38 36 42 32 42C28 42 24 38 24 34C24 28 26 24 32 18Z" fill="black" fillOpacity="0.18" />
          </>
        ),
      });
    case "ring":
      return baseSvg({
        className,
        children: (
          <>
            <circle cx="32" cy="34" r="16" fill="currentColor" />
            <circle cx="32" cy="34" r="9" fill="black" fillOpacity="0.35" />
            <path d="M28 18L32 10L36 18" fill="currentColor" />
          </>
        ),
      });
    case "bell":
      return baseSvg({
        className,
        children: (
          <>
            <path d="M22 24C22 17 26 12 32 12C38 12 42 17 42 24V34L48 42V48H16V42L22 34V24Z" fill="currentColor" />
            <circle cx="32" cy="52" r="4" fill="currentColor" fillOpacity="0.82" />
          </>
        ),
      });
    default:
      return baseSvg({
        className,
        children: (
          <>
            <circle cx="32" cy="32" r="24" fill="currentColor" />
            <path d="M22 22L42 42M42 22L22 42" stroke="black" strokeOpacity="0.24" strokeWidth="5" strokeLinecap="round" />
          </>
        ),
      });
  }
}
