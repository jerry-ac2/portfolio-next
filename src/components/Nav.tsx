"use client";

import { useState, useCallback } from "react";
import { siteConfig } from "@/data/portfolio";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
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
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul className="mobile-menu-links">
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="mobile-menu-link"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
