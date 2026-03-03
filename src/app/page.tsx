"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  siteConfig,
  hero,
  about,
  stack,
  projects,
  experience,
  stats,
  social,
} from "@/data/portfolio";

/* ─── Arrow Icon ───────────────────────────────── */
function ArrowDiagonal() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10L10 4" />
      <path d="M5 4H10V9" />
    </svg>
  );
}

/* ─── Cursor Glow ──────────────────────────────── */
function CursorGlow() {
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

/* ─── Scroll Reveal Hook ───────────────────────── */
function useReveal() {
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
              (child as HTMLElement).style.transitionDelay = `${i * 60}ms`;
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

/* ─── Section Wrapper ──────────────────────────── */
function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
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

/* ─── Main Page ────────────────────────────────── */
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  return (
    <>
      <CursorGlow />

      {/* ── Navigation ────────────────────────── */}
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#" className="nav-logo">
            {siteConfig.nameFirst}
            <span style={{ color: "var(--ink-3)", fontWeight: 400 }}>
              {" "}
              / {siteConfig.role.toLowerCase()}
            </span>
          </a>

          <ul className="nav-links">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-right">
            <div className="nav-availability">
              <span className="nav-dot" />
              <span className="nav-available-text">Available</span>
            </div>

            <button
              className="nav-hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Menu ───────────────────────── */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <ul className="mobile-menu-links">
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="mobile-menu-link"
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Hero ──────────────────────────────── */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            <span className="hero-eyebrow-text">{hero.eyebrow}</span>
          </div>

          <h1 className="hero-name" style={{ fontFamily: "var(--font-serif)" }}>
            {siteConfig.nameFirst}{" "}
            <span className="hero-name-italic">{siteConfig.nameLast}</span>
          </h1>

          <p
            className="hero-bio"
            dangerouslySetInnerHTML={{ __html: hero.bio }}
          />

          <div className="hero-ctas">
            <a href={hero.ctaPrimary.href} className="btn-primary">
              {hero.ctaPrimary.label}
            </a>
            <a href={hero.ctaSecondary.href} className="btn-ghost">
              {hero.ctaSecondary.label}
            </a>
          </div>

          <div className="meta-bar">
            {hero.meta.map((item) => (
              <div key={item.label} className="meta-cell">
                <div className="meta-label">{item.label}</div>
                <div className="meta-value">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ─────────────────────────────── */}
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

      {/* ── Stack ─────────────────────────────── */}
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

      {/* ── Work ──────────────────────────────── */}
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

      {/* ── Experience ────────────────────────── */}
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

      {/* ── Stats ─────────────────────────────── */}
      <div className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="reveal">
                <div
                  className="stat-value"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {stat.value}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Contact ───────────────────────────── */}
      <Section id="contact" number="05" title="Contact">
        <div className="contact-grid">
          <div className="reveal">
            <h2
              className="contact-heading"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Let&rsquo;s build something
            </h2>
            <p className="contact-subtext">
              Got an interesting project or want to collaborate? I&rsquo;m
              always open to talking shop and exploring new ideas.
            </p>
            <div className="social-links">
              {social.map((s) => (
                <a
                  key={s.platform}
                  href={s.href}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-platform">{s.platform}</span>
                  <span className="social-handle">{s.handle}</span>
                </a>
              ))}
            </div>
          </div>

          <form className="reveal" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="form-input"
                placeholder="you@example.com"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="form-textarea"
                placeholder="What are you working on?"
              />
            </div>
            <button
              type="submit"
              className="btn-primary"
              style={{ width: "100%" }}
            >
              Send message
            </button>
          </form>
        </div>
      </Section>

      {/* ── Footer ────────────────────────────── */}
      <footer>
        <div className="container footer">
          <span className="footer-text">
            © {new Date().getFullYear()} {siteConfig.name}
          </span>
          <div className="footer-links">
            {social.slice(0, 3).map((s) => (
              <a
                key={s.platform}
                href={s.href}
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.platform}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* ── Scroll Reveal Init ────────────────── */}
      <RevealInit />
    </>
  );
}

/* ─── Global Reveal Observer ───────────────────── */
function RevealInit() {
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

    const statsItems = document.querySelectorAll(".stats-bar .reveal");
    statsItems.forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${i * 60}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
