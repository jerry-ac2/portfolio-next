"use client";

import { useEffect, useRef } from "react";

/**
 * Fixed-position radial glow that follows the user's cursor.
 * Hidden on mobile via CSS (`display: none` at ≤680px).
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.left = `${e.clientX}px`;
        ref.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return <div ref={ref} className="cursor-glow" />;
}
