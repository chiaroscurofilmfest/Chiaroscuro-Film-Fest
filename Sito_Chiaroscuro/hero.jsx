// hero.jsx — Hero section with 3 variants for Chiaroscuro Film Fest

const HeroCountdown = ({ t, lang, animO, target }) => {
  const { D, H, M, S } = useCountdown(target);
  return (
    <section className="hero" data-variant="countdown">
      <div className="hero-meta">
        <span>
          <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "var(--yellow)", marginRight: 10, verticalAlign: 2 }} />
          {t.hero.eyebrow}
        </span>
        <span className="center">{t.hero.edition} — {lang === "it" ? "Bergamo, Italia" : "Bergamo, Italy"}</span>
        <span className="right">{lang === "it" ? "Iscrizioni aperte" : "Submissions open"} ↗</span>
      </div>

      <div className="hero-stage">
        <div className="hero-top-line">
          <div className="hero-title-stack">
            <span className="eyebrow"><span className="idx">COUNTDOWN</span></span>
            <h1 className="hero-headline">
              {t.hero.title_a}<br />
              {t.hero.title_b} <em>—</em> 2026
            </h1>
          </div>
        </div>

        <div>
          <div className="cd-grid">
            <div className="cd-cell">
              <span className="num">{pad(D, 3)}</span>
              <span className="label">{lang === "it" ? "Giorni" : "Days"}</span>
            </div>
            <div className="cd-cell">
              <span className="num">{pad(H)}</span>
              <span className="label">{lang === "it" ? "Ore" : "Hours"}</span>
            </div>
            <div className="cd-cell">
              <span className="num">{pad(M)}</span>
              <span className="label">{lang === "it" ? "Minuti" : "Minutes"}</span>
            </div>
            <div className="cd-cell">
              <span className="num tabular">{pad(S)}</span>
              <span className="label">{lang === "it" ? "Secondi" : "Seconds"}</span>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
          <a className="btn btn-yellow" href="https://www.eventbrite.it/e/biglietti-chiaroscuro-film-fest-2026-1997570059822" target="_blank" rel="noopener">
            {t.hero.cta_submit} <span className="arrow" />
          </a>
          <a className="btn btn-ghost" href="#programma">
            {t.hero.cta_program} <span className="arrow" />
          </a>
        </div>
      </div>
    </section>);

};

const HeroManifesto = ({ t, lang, animO, target }) => {
  const { D, H, M, S } = useCountdown(target);
  return (
    <section className="hero" data-variant="manifesto">
      <div className="hero-meta">
        <span><span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "var(--yellow)", marginRight: 10, verticalAlign: 2 }} />{t.hero.eyebrow}</span>
        <span className="center">{t.hero.edition} · 28 — 30.09.2026</span>
        <span className="right">{t.hero.venue} ↗</span>
      </div>

      <div className="hero-stage">
        <div className="manifesto-stack">
          <span className="eyebrow"><span className="idx">III</span> · 2026</span>
          <h1 className="manifesto-title">
            Mettere a fu<span className="o-mark"><DoubleOSymbol size="100%" strokeWidth={5} animate={animO} /></span>c
            <span style={{ color: "var(--fg-dim)" }}>{lang === "it" ? " sul" : " on"}</span><br />
            <span style={{ color: "var(--yellow)" }}>cinema</span>{" "}
            <span style={{ color: "var(--fg-dim)" }}>{lang === "it" ? "che resta." : "that lasts."}</span>
          </h1>
          <p className="lede" style={{ maxWidth: "52ch", color: "var(--fg-dim)" }}>
            {t.about.lede}
          </p>

          <div className="manifesto-byline">
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span className="kicker">{lang === "it" ? "Apre tra" : "Opens in"}</span>
              <span style={{ fontFamily: "var(--f-mono)", fontSize: 22, letterSpacing: "0.02em" }} className="tabular">
                {pad(D, 3)}d · {pad(H)}h · {pad(M)}m · {pad(S)}s
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span className="kicker">{lang === "it" ? "Dove" : "Where"}</span>
              <span style={{ fontSize: 17 }}>{t.hero.venue}, {t.hero.city}</span>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <a className="btn btn-yellow" href="https://www.eventbrite.it/e/biglietti-chiaroscuro-film-fest-2026-1997570059822" target="_blank" rel="noopener">
                {t.hero.cta_submit} <span className="arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

const HeroChiaroscuro = ({ t, lang, animO, target }) => {
  const stageRef = useMouseSpot();
  const { D, H, M, S } = useCountdown(target);
  return (
    <section className="hero" data-variant="chiaroscuro">
      <div className="hero-meta">
        <span><span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "var(--yellow)", marginRight: 10, verticalAlign: 2 }} />{t.hero.eyebrow}</span>
        <span className="center">{lang === "it" ? "Apre tra" : "Opens in"} · {pad(D, 3)}d {pad(H)}h {pad(M)}m {pad(S)}s</span>
        <span className="right">28 — 30.09.2026 ↗</span>
      </div>

      <div ref={stageRef} className="chiaro-stage" style={{ "--mx": "50%", "--my": "50%" }}>
        <div className="ph-bg" />
        <div className="vignette" />
        {/* dark base layer */}
        <div className="chiaro-layer-dark" style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
          <h1 className="chiaro-text" style={{ color: "rgba(250,249,246,0.14)" }}>
            {t.hero.chiaro_text_dark}<br />
            {t.hero.chiaro_text_light}
          </h1>
          <div className="chiaro-sub">{t.hero.chiaro_sub}</div>
        </div>
        {/* yellow reveal layer (only visible under the mouse light) */}
        <div className="chiaro-reveal">
          <h1 className="chiaro-text" style={{ color: "var(--yellow)", margin: 0 }}>
            {t.hero.chiaro_text_dark}<br />
            {t.hero.chiaro_text_light}
          </h1>
        </div>
        <div className="light-mask" />
        <span className="ph-label">28 — 30 sept · cinema conca verde · bergamo</span>

        {/* Symbol top-right */}
        <div style={{ position: "absolute", top: 24, right: 24, zIndex: 4, color: "var(--paper)", opacity: 0.85 }}>
          <DoubleOSymbol size={56} strokeWidth={5} animate={animO} />
        </div>

        {/* CTA bottom */}
        <div style={{ position: "absolute", bottom: 28, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 12, zIndex: 5, flexWrap: "wrap" }}>
          <a className="btn btn-yellow" href="https://www.eventbrite.it/e/biglietti-chiaroscuro-film-fest-2026-1997570059822" target="_blank" rel="noopener">
            {t.hero.cta_submit} <span className="arrow" />
          </a>
          <a className="btn" style={{ border: "1px solid rgba(255,255,255,.5)", color: "var(--paper)" }} href="#programma">
            {t.hero.cta_program} <span className="arrow" />
          </a>
        </div>
      </div>
    </section>);

};

/* ---- shared bits ---- */
const HeroDot = () => (
  <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "var(--yellow)", marginRight: 10, verticalAlign: 2 }} />
);
const HeroCtas = ({ t, ghostHref = "#programma" }) => (
  <div className="hero-cta-row">
    <a className="btn btn-yellow" href="https://www.eventbrite.it/e/biglietti-chiaroscuro-film-fest-2026-1997570059822" target="_blank" rel="noopener">
      {t.hero.cta_submit} <span className="arrow" />
    </a>
    <a className="btn btn-ghost" href={ghostHref}>
      {t.hero.cta_program} <span className="arrow" />
    </a>
  </div>
);

/* Variant D — countdown compact (smaller countdown, headline-led) */
const HeroCompact = ({ t, lang, animO, target }) => {
  const { D, H, M, S } = useCountdown(target);
  const lbl = lang === "it"
    ? { d: "giorni", h: "ore", m: "min", s: "sec", open: "Apre tra" }
    : { d: "days", h: "hrs", m: "min", s: "sec", open: "Opens in" };
  return (
    <section className="hero" data-variant="compact">
      <div className="hero-meta">
        <span><HeroDot />{t.hero.eyebrow}</span>
        <span className="center">{t.hero.edition} — {lang === "it" ? "Bergamo, Italia" : "Bergamo, Italy"}</span>
        <span className="right">{lang === "it" ? "Iscrizioni aperte" : "Submissions open"} ↗</span>
      </div>

      <div className="hero-stage">
        <div className="hero-title-stack">
          <span className="eyebrow"><span className="idx">III</span> · 2026</span>
          <h1 className="hero-headline">
            {t.hero.title_a}<br />
            {t.hero.title_b} <em>—</em> 2026
          </h1>
        </div>

        <div className="cd-strip">
          <span className="cd-strip-kicker">{lbl.open}</span>
          <div className="cd-strip-nums tabular">
            <span><b>{pad(D, 3)}</b><i>{lbl.d}</i></span>
            <span className="sep">:</span>
            <span><b>{pad(H)}</b><i>{lbl.h}</i></span>
            <span className="sep">:</span>
            <span><b>{pad(M)}</b><i>{lbl.m}</i></span>
            <span className="sep">:</span>
            <span><b>{pad(S)}</b><i>{lbl.s}</i></span>
          </div>
        </div>

        <HeroCtas t={t} />
      </div>
    </section>);
};

/* Variant E — editorial index (no big countdown, magazine split) */
const HeroEditorial = ({ t, lang, animO, target }) => {
  const { D } = useCountdown(target);
  const rows = [
    [lang === "it" ? "Date" : "Dates", "28 — 30.09.2026"],
    [lang === "it" ? "Sede" : "Venue", t.hero.venue],
    [lang === "it" ? "Città" : "City", t.hero.city],
    [lang === "it" ? "Edizione" : "Edition", t.hero.edition],
    [lang === "it" ? "Apre tra" : "Opens in", pad(D, 3) + (lang === "it" ? " giorni" : " days")],
  ];
  return (
    <section className="hero" data-variant="editorial">
      <div className="hero-meta">
        <span><HeroDot />{t.hero.eyebrow}</span>
        <span className="center">{t.hero.edition} · 28 — 30.09.2026</span>
        <span className="right">{lang === "it" ? "Iscrizioni aperte" : "Submissions open"} ↗</span>
      </div>

      <div className="hero-stage">
        <div className="ed-grid">
          <div className="ed-main">
            <span className="eyebrow"><span className="idx">III</span> · {lang === "it" ? "Edizione" : "Edition"} 2026</span>
            <h1 className="ed-headline">{t.hero.headline_b}</h1>
            <p className="lede" style={{ maxWidth: "42ch", color: "var(--fg-dim)", margin: 0 }}>{t.hero.sub_b}</p>
            <HeroCtas t={t} />
          </div>
          <aside className="ed-index">
            <div className="ed-symbol"><DoubleOSymbol size={40} strokeWidth={5} animate={animO} /></div>
            {rows.map(([k, v], i) => (
              <div className="ed-row" key={i}>
                <span className="k">{k}</span>
                <span className="v">{v}</span>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>);
};

/* Variant F — marquee (kinetic bands + giant date) */
const HeroMarquee = ({ t, lang, animO, target }) => {
  const { D, H, M, S } = useCountdown(target);
  const items = ["Chiaroscuro", "Film Fest", "28 — 30 Sett 2026", "Bergamo", t.hero.edition];
  const Band = ({ bottom }) => (
    <div className={"marquee-band" + (bottom ? " bottom" : "")} aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((dup) => (
          <span className="marquee-seq" key={dup}>
            {items.map((w, i) => (
              <React.Fragment key={i}>
                <span>{w}</span><span className="star">✲</span>
              </React.Fragment>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
  return (
    <section className="hero" data-variant="marquee">
      <div className="hero-meta">
        <span><HeroDot />{t.hero.eyebrow}</span>
        <span className="center">{t.hero.edition} · 28 — 30.09.2026</span>
        <span className="right">{t.hero.venue} ↗</span>
      </div>

      <div className="hero-stage marquee-stage">
        <Band />
        <div className="marquee-center">
          <span className="eyebrow"><span className="idx">III</span> · 2026</span>
          <h1 className="marquee-title">
            {t.hero.title_a}<br />
            <span style={{ color: "var(--yellow)" }}>{t.hero.title_b}</span> 2026
          </h1>
          <div className="marquee-meta-line tabular">
            {pad(D, 3)}d · {pad(H)}h · {pad(M)}m · {pad(S)}s — {t.hero.venue}
          </div>
          <HeroCtas t={t} />
        </div>
        <Band bottom />
      </div>
    </section>);
};

function Hero({ variant, t, lang, animO, target }) {
  if (variant === "manifesto") return <HeroManifesto t={t} lang={lang} animO={animO} target={target} />;
  if (variant === "chiaroscuro") return <HeroChiaroscuro t={t} lang={lang} animO={animO} target={target} />;
  if (variant === "compact") return <HeroCompact t={t} lang={lang} animO={animO} target={target} />;
  if (variant === "editorial") return <HeroEditorial t={t} lang={lang} animO={animO} target={target} />;
  if (variant === "marquee") return <HeroMarquee t={t} lang={lang} animO={animO} target={target} />;
  return <HeroCountdown t={t} lang={lang} animO={animO} target={target} />;
}

window.Hero = Hero;