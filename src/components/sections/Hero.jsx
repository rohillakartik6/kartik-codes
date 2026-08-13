import { profile } from "../../data/portfolio";

function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero-atmosphere" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-a" />
        <div className="hero-glow hero-glow-b" />
        <img className="hero-landscape" src="/assets/images/mountain.png" alt="" />
      </div>

      <div className="hero-content">
        <p className="hero-kicker reveal">
          {profile.title} · {profile.location}
        </p>
        <h1 className="hero-name reveal reveal-delay-1">{profile.name}</h1>
        <p className="hero-tagline reveal reveal-delay-2">{profile.tagline}</p>

        <div className="hero-actions reveal reveal-delay-3">
          <a className="btn btn-primary" href="#work">
            View selected work
          </a>
          <a className="btn btn-ghost" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
