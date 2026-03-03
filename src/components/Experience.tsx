import { experience } from "@/data/portfolio";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" number="04" title="Experience">
      <div className="experience-list">
        {experience.map((item) => (
          <div key={item.company} className="experience-item reveal">
            <div className="experience-left">
              <span className="experience-company">{item.company}</span>
              <span className="experience-dates">{item.dates}</span>
            </div>
            <div>
              <h3
                className="experience-role"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {item.role}
              </h3>
              <p className="experience-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
