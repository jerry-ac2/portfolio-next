import { stack } from "@/data/portfolio";
import { Section } from "./Section";

export function Stack() {
  return (
    <Section id="stack" number="02" title="Stack">
      <div className="stack-grid">
        {stack.columns.map((col) => (
          <div key={col.label} className="stack-column reveal">
            <div className="stack-column-label">{col.label}</div>
            <div className="stack-tags">
              {col.tags.map((tag) => (
                <span key={tag} className="stack-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
