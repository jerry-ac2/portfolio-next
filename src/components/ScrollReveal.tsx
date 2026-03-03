"use client";

import { useEffect } from "react";

const STAGGER_MS = 60;

/**
 * Headless component that observes `.reveal` elements outside
 * of `<Section>` wrappers (e.g. the stats bar).
 * Mount once at the page level.
 */
export function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    const orphanedReveals = document.querySelectorAll(".stats-bar .reveal");
    orphanedReveals.forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${i * STAGGER_MS}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
