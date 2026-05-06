"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface GameDrawerProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function GameDrawer({ open, onClose, children }: GameDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <>
      <div
        className="ogot-drawer-backdrop"
        data-open={open}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        ref={drawerRef}
        className="ogot-drawer ogot-scroll"
        data-open={open}
        role="dialog"
        aria-label="Menu du jeu"
      >
        <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
          <p className="text-[0.56rem] uppercase tracking-[0.32em] text-cyan-100/56">
            Menu
          </p>
          <button
            type="button"
            onClick={onClose}
            className="ogot-icon-btn"
            aria-label="Fermer"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 4l8 8M12 4l-8 8" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-3 p-4">
          {children}
        </div>
      </aside>
    </>,
    document.body,
  );
}
