"use client";

import { social } from "@/data/portfolio";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section id="contact" number="05" title="Contact">
      <div className="contact-grid">
        {/* Left — intro + social links */}
        <div className="reveal">
          <h2
            className="contact-heading"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Let&rsquo;s build something
          </h2>
          <p className="contact-subtext">
            Got an interesting project or want to collaborate? I&rsquo;m always
            open to talking shop and exploring new ideas.
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

        {/* Right — contact form */}
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
  );
}
