import { useEffect, useState } from "react";
import { profile } from "../../data/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="nav-inner">
        <a className="nav-brand" href="#top" onClick={() => setOpen(false)}>
          <span className="nav-brand-mark">{profile.brand}</span>
        </a>

        <button
          className={`nav-toggle${open ? " is-open" : ""}`}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>

        <nav className={`nav-links${open ? " is-open" : ""}`} aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="nav-cta" href={profile.links.email} onClick={() => setOpen(false)}>
            Email me
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
