"use client";

import { useEffect, useRef } from "react";

const STAGGER_MS = 60;

/**
 * Attaches an IntersectionObserver to a container ref.
 * When the container enters the viewport, all `.reveal` children
 * are stagger-animated in (add `.visible` class with incremental delay).
 */
export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = el.querySelectorAll(".reveal");

            children.forEach((child, i) => {
              (child as HTMLElement).style.transitionDelay =
                `${i * STAGGER_MS}ms`;
              child.classList.add("visible");
            });

            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
