import { siteConfig, hero } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-text">{hero.eyebrow}</span>
        </div>

        <h1 className="hero-name" style={{ fontFamily: "var(--font-serif)" }}>
          {siteConfig.nameFirst}{" "}
          <span className="hero-name-italic">{siteConfig.nameLast}</span>
        </h1>

        {/* <p
          className="hero-bio"
          dangerouslySetInnerHTML={{ __html: hero.bio }}
        /> */}
        <p className="hero-bio">{hero.bio}</p>

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
  );
}
