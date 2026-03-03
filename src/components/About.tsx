import { about } from "@/data/portfolio";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" number="01" title="About">
      <div className="about-grid">
        <p
          className="about-pull-quote reveal"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {about.pullQuote}
        </p>
        <p className="about-body reveal">{about.body}</p>
      </div>
    </Section>
  );
}
