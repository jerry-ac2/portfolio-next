import { projects } from "@/data/portfolio";
import { ArrowDiagonal } from "@/icons/ArrowDiagonal";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="work" number="03" title="Projects">
      <div className="projects-grid">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            className="project-card reveal"
          >
            <h3
              className="project-title"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {project.title}
            </h3>
            <p className="project-description">{project.description}</p>

            <div className="project-footer">
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="project-arrow">
                <ArrowDiagonal />
              </span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
