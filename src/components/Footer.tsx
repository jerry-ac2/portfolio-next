import { siteConfig, social } from "@/data/portfolio";

export function Footer() {
  return (
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
  );
}
