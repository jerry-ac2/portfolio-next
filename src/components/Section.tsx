"use client";

import { useReveal } from "@/hooks/useReveal";

interface SectionProps {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}

/**
 * Reusable numbered section with a header row and scroll-reveal.
 * Wraps content in a constrained `.container`.
 */
export function Section({ id, number, title, children }: SectionProps) {
  const ref = useReveal();

  return (
    <section id={id} className="section" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-number">{number}</span>
          <span className="section-title">{title}</span>
        </div>
        {children}
      </div>
    </section>
  );
}
