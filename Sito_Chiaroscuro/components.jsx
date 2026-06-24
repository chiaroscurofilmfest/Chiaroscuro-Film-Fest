// components.jsx — shared UI for Chiaroscuro Film Fest

const { useState, useEffect, useRef, useMemo, useCallback } = React;

// ─── The double-O symbol (clean SVG; matches the brand mark) ───────────────
function DoubleOSymbol({ size = 32, animate = true, strokeWidth = 5, color }) {
  const s = size;
  // Two overlapping vertical-ellipse rings, slightly offset horizontally.
  // viewBox 100x100, rings of rx ~ 40, ry ~ 48, offset by ±5px
  return (
    <span
      className="bigO"
      data-anim={animate ? "on" : "off"}
      style={{ width: s, height: s, color: color || "currentColor" }}
    >
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <g>
          <ellipse className="ring ring-1" cx="45" cy="50" rx="40" ry="48" strokeWidth={strokeWidth} />
          <ellipse className="ring ring-2" cx="55" cy="50" rx="40" ry="48" strokeWidth={strokeWidth} />
        </g>
      </svg>
    </span>
  );
}

// ─── Striped placeholder image (with monospace caption) ────────────────────
function Placeholder({ label, tag, ratio = "4/5", style }) {
  return (
    <div className="placeholder" style={{ aspectRatio: ratio, ...style }}>
      {tag && <span className="ph-tag">{tag}</span>}
      {label && <span className="ph-label">{label}</span>}
    </div>
  );
}

// ─── Marquee / ticker (CSS-driven, with content duplicated) ────────────────
function Ticker({ items, lang }) {
  const content = (
    <span style={{ display: "inline-flex", gap: 40 }}>
      {items.map((t, i) => (
        <span key={i}>
          <span className="pip" />
          {t}
        </span>
      ))}
    </span>
  );
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {content}
        {content}
        {content}
        {content}
      </div>
    </div>
  );
}

// ─── Countdown hook ─────────────────────────────────────────────────────────
function useCountdown(targetISO) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const target = useMemo(() => new Date(targetISO).getTime(), [targetISO]);
  const diff = Math.max(0, target - now);
  const D = Math.floor(diff / 86400000);
  const H = Math.floor((diff % 86400000) / 3600000);
  const M = Math.floor((diff % 3600000) / 60000);
  const S = Math.floor((diff % 60000) / 1000);
  return { D, H, M, S, diff };
}

function pad(n, w = 2) { return String(n).padStart(w, "0"); }

// ─── Section head (eyebrow + title + optional rhs note) ────────────────────
function SectionHead({ eyebrow, title, lede, idx, rhs }) {
  return (
    <div className="section-head">
      <div className="lhs">
        {(idx || eyebrow) && (
          <div className="eyebrow">
            {idx && <span className="idx" style={{ marginRight: 14 }}>{idx}</span>}
            {eyebrow && (<><span className="dot" />{eyebrow}</>)}
          </div>
        )}
        {title && <h2 className="h-1">{title}</h2>}
      </div>
      {(lede || rhs) && <div className="rhs body">{lede || rhs}</div>}
    </div>
  );
}

// ─── Mouse-follow utility (returns ref + bound style vars) ─────────────────
function useMouseSpot() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--mx", x + "px");
        el.style.setProperty("--my", y + "px");
      });
    };
    const onLeave = () => {
      el.style.setProperty("--mx", "50%");
      el.style.setProperty("--my", "50%");
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);
  return ref;
}

// ─── Site-wide chiaroscuro cursor (subtle, optional) ───────────────────────
function ChiaroscuroCursor({ enabled }) {
  useEffect(() => {
    if (!enabled) return;
    const onMove = (e) => {
      document.documentElement.style.setProperty("--cx", e.clientX + "px");
      document.documentElement.style.setProperty("--cy", e.clientY + "px");
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled]);
  if (!enabled) return null;
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        pointerEvents: "none",
        inset: 0,
        zIndex: 1,
        background:
          "radial-gradient(circle 380px at var(--cx, 50vw) var(--cy, 50vh), rgba(255,194,0,0.06), transparent 65%)",
        mixBlendMode: "multiply",
        transition: "opacity 200ms ease",
      }}
    />
  );
}

// ─── Top navigation ────────────────────────────────────────────────────────
function Nav({ t, lang, setLang, onOpenTweaks, theme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [effectiveTheme, setEffectiveTheme] = useState(
    () => theme || (typeof document !== "undefined" ? document.documentElement.dataset.theme : "light") || "light"
  );
  useEffect(() => {
    if (theme) { setEffectiveTheme(theme); return; }
    // watch document data-theme changes
    const obs = new MutationObserver(() => {
      setEffectiveTheme(document.documentElement.dataset.theme || "light");
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => obs.disconnect();
  }, [theme]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  // Close mobile menu when viewport grows past the breakpoint; lock scroll while open
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 1024) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className={"nav " + (scrolled ? "scrolled" : "")}>
      <a className="nav-logo" href="index.html" aria-label="Chiaroscuro Film Fest — home">
        <img
          className="nav-logotype"
          src={effectiveTheme === "dark" ? "assets/logotype-mark-white.png" : "assets/logotype-mark-black.png"}
          alt="Chiaroscuro"
        />
      </a>
      <nav className="nav-links">
        <a href="#festival">{t.nav.festival}</a>
        <a href="#programma">{t.nav.programma}</a>
        <a href="#edizione">{t.nav.archivio}</a>
        <a href="#giuria">{t.nav.giuria}</a>
        <a href="#partner">{t.nav.partner}</a>
        <a href="#contatti">{t.nav.contatti}</a>
      </nav>
      <div className="nav-aux">
        <a className="btn btn-yellow nav-submit-btn" style={{ padding: "10px 16px", fontSize: 13 }} href="https://filmfreeway.com/chiaroscurofilmfest" target="_blank" rel="noopener">
          {t.nav.iscrizioni}
          <span className="arrow" />
        </a>
        <div className="lang-toggle" role="tablist" aria-label="Language">
          <button className={lang === "it" ? "on" : ""} onClick={() => setLang("it")}>IT</button>
          <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
        </div>
        <button
          className={"nav-burger" + (menuOpen ? " open" : "")}
          aria-label={lang === "it" ? "Menu" : "Menu"}
          aria-expanded={menuOpen}
          aria-controls="nav-mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      <div id="nav-mobile-menu" className={"nav-mobile" + (menuOpen ? " open" : "")} hidden={!menuOpen}>
        <nav className="nav-mobile-links">
          <a href="#festival" onClick={closeMenu}>{t.nav.festival}</a>
          <a href="#programma" onClick={closeMenu}>{t.nav.programma}</a>
          <a href="#edizione" onClick={closeMenu}>{t.nav.archivio}</a>
          <a href="#giuria" onClick={closeMenu}>{t.nav.giuria}</a>
          <a href="#partner" onClick={closeMenu}>{t.nav.partner}</a>
          <a href="#contatti" onClick={closeMenu}>{t.nav.contatti}</a>
        </nav>
        <a className="btn btn-yellow" style={{ alignSelf: "flex-start", marginTop: 8 }} href="https://filmfreeway.com/chiaroscurofilmfest" target="_blank" rel="noopener" onClick={closeMenu}>
          {t.nav.iscrizioni} <span className="arrow" />
        </a>
      </div>
    </header>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────
function Footer({ t, lang }) {
  return (
    <footer className="foot" id="contatti">
      <div className="foot-grid">
        <div>
          <h4>{lang === "it" ? "Manifesto" : "Manifesto"}</h4>
          <p style={{ maxWidth: "36ch" }}>{t.footer.tagline}</p>
          <p style={{ marginTop: 16, color: "rgba(255,255,255,.55)" }}>
            Cinema Conca Verde<br/>
            Bergamo, IT
          </p>
        </div>
        <div>
          <h4>{lang === "it" ? "Naviga" : "Navigate"}</h4>
          <a href="#festival">{t.nav.festival}</a>
          <a href="#programma">{t.nav.programma}</a>
          <a href="#edizione">{t.nav.archivio}</a>
          <a href="#giuria">{t.nav.giuria}</a>
          <a href="#partner">{t.nav.partner}</a>
        </div>
        <div>
          <h4>{lang === "it" ? "Contatti" : "Contact"}</h4>
          <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
          <a href="https://instagram.com/chiaroscurofilmfest" target="_blank" rel="noopener">{t.contact.ig}</a>
          <a href="https://filmfreeway.com/chiaroscurofilmfest" target="_blank" rel="noopener">FilmFreeway →</a>
        </div>
        <div>
          <h4>{lang === "it" ? "Stampa" : "Press"}</h4>
          <p style={{ color: "rgba(255,255,255,.7)" }}>{t.contact.director.name}<br/>{t.contact.director.role}<br/>{t.contact.director.phone}</p>
          <p style={{ marginTop: 10, color: "rgba(255,255,255,.7)" }}>{t.contact.producer.name}<br/>{t.contact.producer.role}<br/>{t.contact.producer.phone}</p>
        </div>
      </div>

      <div className="foot-wordmark" aria-hidden="true">
        <img src="assets/logotype-mark-white.png" alt="Chiaroscuro" />
      </div>

      <div className="foot-bottom">
        <span>{t.footer.colophon}</span>
        <span style={{ display: "inline-flex", gap: 20 }}>
          {t.footer.legal.map((l, i) => <a key={i} href="#" style={{ color: "inherit" }}>{l}</a>)}
        </span>
      </div>
    </footer>
  );
}

// Expose globally
Object.assign(window, {
  DoubleOSymbol, Placeholder, Ticker, useCountdown, pad,
  SectionHead, useMouseSpot, ChiaroscuroCursor, Nav, Footer,
});
