// sections.jsx — homepage sections for Chiaroscuro Film Fest

const { useState, useMemo } = React;

// ─── Full-bleed atmosphere divider (image or YouTube video) ────────────────
function AtmosphereDivider({ src, videoId, caption, alt, height = "70vh", ratio = "16/9" }) {
  return (
    <section className="atmosphere" style={{ padding: 0, borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <figure style={{ margin: 0, position: "relative" }}>
        <div style={{ position: "relative", overflow: "hidden", aspectRatio: videoId ? ratio : undefined, height: videoId ? "auto" : height, maxHeight: 900, background: "#0a0a0a" }}>
          {videoId ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3`}
              title={alt || "Chiaroscuro Film Fest"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0, display: "block" }}
            />
          ) : (
            <img src={src} alt={alt || ""} loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          )}
        </div>
        {caption && (
          <figcaption style={{
            padding: "16px var(--gutter)",
            display: "flex", justifyContent: "space-between", alignItems: "baseline",
            fontFamily: "var(--f-mono)", fontSize: 11, letterSpacing: "0.08em",
            textTransform: "uppercase", color: "var(--fg-dim)",
            background: "var(--bg)",
            gap: 24, flexWrap: "wrap",
          }}>
            <span>{caption}</span>
            <span style={{ color: "var(--fg-faint)" }}>↳ II · 2025</span>
          </figcaption>
        )}
      </figure>
    </section>
  );
}

// ─── About / Manifesto ─────────────────────────────────────────────────────
function AboutSection({ t, lang }) {
  return (
    <section id="festival" className="shell">
      <SectionHead
        idx="§ 01"
        eyebrow={t.about.eyebrow}
        title={t.about.title}
        lede={t.about.lede}
      />
      {(() => {
        // Only render items that actually carry content — skip blank
        // placeholders so we don't leave empty hairlines on the page.
        const items = t.about.items.filter(
          (it) => (it.h && it.h.trim()) || (it.p && it.p.trim())
        );
        if (!items.length) return null;
        return (
          <div className="about-grid">
            {items.map((it, i) => (
              <div className="item" key={i}>
                <span className="num">{it.n}</span>
                <h3>{it.h}</h3>
                <p>{it.p}</p>
              </div>
            ))}
          </div>
        );
      })()}
    </section>
  );
}

// ─── Submit / FilmFreeway CTA + categories + deadlines ─────────────────────
function SubmitSection({ t, lang }) {
  return (
    <section id="iscrizioni" className="dark-sect">
      <div className="shell">
      <SectionHead
        idx="§ 02"
        eyebrow={t.submit.eyebrow}
        title={t.submit.title}
        lede={t.submit.lede}
      />

      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "clamp(32px, 4vw, 64px)", alignItems: "start" }} className="submit-grid">
        <div>
          <div className="kicker" style={{ marginBottom: 16 }}>{lang === "it" ? "Categorie" : "Categories"}</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, borderTop: "1px solid var(--line)" }}>
            {t.submit.categories.map((c, i) => (
              <li key={i} style={{ display: "grid", gridTemplateColumns: "minmax(180px, 1fr) 2fr", gap: 24, padding: "20px 0", borderBottom: "1px solid var(--line)", alignItems: "baseline" }}>
                <span style={{ fontFamily: "var(--f-mono)", fontSize: 12, letterSpacing: "0.08em", color: "var(--fg)" }}>{c.k}</span>
                <span style={{ color: "var(--fg-dim)", fontSize: 15 }}>{c.v}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ position: "sticky", top: 110, display: "flex", flexDirection: "column", gap: 18, border: "1px solid var(--line)", padding: 28, background: "rgba(255,255,255,0.04)" }}>
          <div className="kicker">{lang === "it" ? "Scadenze" : "Deadlines"}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {t.submit.deadlines.map((d, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBottom: 8, borderBottom: i < t.submit.deadlines.length - 1 ? "1px dashed var(--line)" : "none" }}>
                <span style={{ fontSize: 14 }}>{d.k}</span>
                <span style={{ fontFamily: "var(--f-mono)", fontSize: 13, letterSpacing: "0.02em" }}>{d.v}</span>
              </div>
            ))}
          </div>
          <a className="btn btn-yellow" href="https://filmfreeway.com/chiaroscurofilmfest" target="_blank" rel="noopener" style={{ justifyContent: "center", marginTop: 8 }}>
            {t.submit.cta} <span className="arrow" />
          </a>
          <span style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--fg-dim)", textAlign: "center", letterSpacing: "0.06em" }}>
            filmfreeway.com/chiaroscurofilmfest
          </span>
        </div>
      </div>
      </div>
    </section>
  );
}

// ─── Stats strip ───────────────────────────────────────────────────────────
function StatsSection({ t, lang }) {
  return (
    <section className="shell">
      <SectionHead idx="§ 04" eyebrow={t.stats.eyebrow} title={t.stats.title} />
      <div className="stats">
        {t.stats.items.map((s, i) => (
          <div className="stat" key={i}>
            <div className="big tabular">{s.n}</div>
            <div className="lab">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Winners 2025 grid (dark, cinematic, with posters) ────────────────────
function WinnersSection({ t, lang }) {
  return (
    <section id="edizione" className="dark-sect">
      <div className="shell">
        <SectionHead idx="§ 05" eyebrow={t.winners.eyebrow} title={t.winners.title} lede={t.winners.lede} />
        <div className="winners-grid">
          {t.winners.items.map((f, i) => (
            <article className="winner" key={i}>
              <div className="winner-poster">
                {f.poster
                  ? <img src={f.poster} alt={`${f.title} — locandina`} loading="lazy" />
                  : <Placeholder ratio="2/3" label={f.title} />
                }
                <div className="winner-badge">
                  <span className="award-mark">★</span> {f.award}
                </div>
                <div className="winner-hover">
                  <div className="winner-hover-inner">
                    <div className="kicker" style={{ marginBottom: 10 }}>{lang === "it" ? "Sinossi" : "Synopsis"}</div>
                    <p>{f.synopsis}</p>
                  </div>
                </div>
              </div>
              <div className="winner-meta">
                <h3 className="winner-title">{f.title}</h3>
                <div className="winner-byline">
                  <span>{f.director}</span>
                  <span className="dot">·</span>
                  <span className="muted">{f.country}</span>
                  <span className="dot">·</span>
                  <span className="muted">{f.year}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 40, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
          <span className="kicker">{lang === "it" ? "Quattro premi principali · quindici riconoscimenti" : "Four main awards · fifteen honours"}</span>
          <a className="link-arrow" href="#albo">
            {t.winners.cta} <span className="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Jury (presidente lead + cards with real portraits + bios) ────────────
function JurySection({ t, lang }) {
  const president = t.jury.items[0];
  const rest = t.jury.items.slice(1);
  return (
    <section id="giuria" className="shell">
      <SectionHead idx="§ 07" eyebrow={t.jury.eyebrow} title={t.jury.title} />

      {/* Lead: Presidente */}
      <article className="jury-lead">
        <div className="jury-lead-portrait">
          {president.portrait
            ? <img src={president.portrait} alt={president.name} loading="lazy" />
            : <Placeholder ratio="4/5" label={president.name} />
          }
          <div className="jury-lead-tag">
            <span className="award-mark">★</span> {lang === "it" ? "Presidente di Giuria" : "Jury President"}
          </div>
        </div>
        <div className="jury-lead-text">
          <div className="kicker" style={{ marginBottom: 14 }}>{lang === "it" ? "Edizione III · 2026" : "III Edition · 2026"}</div>
          <h3 className="h-2" style={{ marginBottom: 10 }}>{president.name}</h3>
          <div className="role" style={{ marginBottom: 24, fontFamily: "var(--f-mono)", fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--fg-dim)" }}>{president.role}</div>
          {president.bio && <p className="lede" style={{ color: "var(--fg)", maxWidth: "52ch" }}>{president.bio}</p>}
        </div>
      </article>

      {/* Other jurors */}
      <div className="jury-rest">
        {rest.map((p, i) => (
          <article className="juror" key={i}>
            <div className="juror-portrait">
              {p.portrait
                ? <img src={p.portrait} alt={p.name} loading="lazy" />
                : <Placeholder ratio="4/5" label={p.name} />
              }
            </div>
            <div className="juror-meta">
              <h4 className="juror-name">{p.name}</h4>
              <div className="juror-role">{p.role}</div>
              {p.bio && <p className="juror-bio">{p.bio}</p>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ─── Guests grid (with real portraits) ─────────────────────────────────────
function GuestsSection({ t, lang }) {
  return (
    <section className="shell">
      <SectionHead idx="§ 08" eyebrow={t.guests.eyebrow} title={t.guests.title} />
      <div className="people">
        {t.guests.items.map((p, i) => (
          <div className="person" key={i}>
            <div className="portrait-wrap">
              {p.portrait
                ? <img className="portrait-img" src={p.portrait} alt={p.name} loading="lazy" />
                : <Placeholder ratio="4/5" label={p.name} />}
            </div>
            <div className="name">{p.name}</div>
            <div className="role">{p.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Chiaroscuro Incontra (dark section) ──────────────────────────────────
function IncontraSection({ t, lang }) {
  return (
    <section className="dark-sect">
      <div className="shell">
        <SectionHead idx="§ 09" eyebrow={t.incontra.eyebrow} title={t.incontra.title} lede={t.incontra.lede} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 32 }}>
          {[
            { src: "assets/atmosphere/reel-sorrentino.png", label: "Paolo Sorrentino",   href: "https://www.instagram.com/reel/DTxMR2MjHp_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
            { src: "assets/atmosphere/reel-mastandrea.png", label: "Valerio Mastandrea", href: "https://www.instagram.com/reel/DHynZI8Ndkc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
            { src: "assets/atmosphere/reel-samani.png",     label: "Laura Samani",       href: "https://www.instagram.com/reel/DXMmCggN9R1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
          ].map((r, i) => (
            <a key={i} href={r.href} target="_blank" rel="noopener"
               style={{ position: "relative", aspectRatio: "9/16", overflow: "hidden", background: "#0a0a0a", display: "block" }}
               className="reel">
              <img src={r.src} alt={r.label} loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 600ms cubic-bezier(.2,.7,.2,1), filter 320ms ease", filter: "brightness(0.8)" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.6) 100%)" }} />
              <div style={{ position: "absolute", left: 14, bottom: 14, color: "var(--paper)", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,.16)", backdropFilter: "blur(8px)", display: "inline-flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,.3)" }}>
                  <span style={{ width: 0, height: 0, borderLeft: "9px solid var(--paper)", borderTop: "6px solid transparent", borderBottom: "6px solid transparent", marginLeft: 2 }} />
                </span>
                <span style={{ fontFamily: "var(--f-mono)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase" }}>{r.label}</span>
              </div>
              <span style={{ position: "absolute", top: 14, right: 14, fontFamily: "var(--f-mono)", fontSize: 9.5, padding: "4px 7px", background: "rgba(0,0,0,.5)", color: "var(--paper)", letterSpacing: "0.08em", textTransform: "uppercase", backdropFilter: "blur(4px)" }}>Reel</span>
            </a>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 32, alignItems: "end", paddingTop: 32, borderTop: "1px solid var(--line)" }}>
          <div>
            <div className="kicker" style={{ marginBottom: 14 }}>{lang === "it" ? "Già intervistati" : "Past guests"}</div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {t.incontra.past.map((n, i) => <span key={i} className="tag">{n}</span>)}
            </div>
          </div>
          <a className="link-arrow" href="https://instagram.com/chiaroscurofilmfest" target="_blank" rel="noopener" style={{ justifySelf: "end" }}>
            {t.incontra.cta} <span className="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Atmosfera 2025 — editorial gallery ────────────────────────────────────
function AtmosphereGallery({ t, lang }) {
  return (
    <section className="shell">
      <SectionHead
        idx="§ 11"
        eyebrow={lang === "it" ? "Atmosfera 2025" : "Atmosphere 2025"}
        title={lang === "it" ? "Tre serate al Cinema Conca Verde." : "Three evenings at Cinema Conca Verde."}
        rhs={lang === "it"
          ? "Cinema, conversazioni, premi.\nFrammenti dalla seconda edizione."
          : "Cinema, conversations, awards.\nFragments from the second edition."}
      />
      <div className="gallery-grid">
        <a className="gallery-cell big" style={{ gridArea: "big" }}>
          <img src="assets/atmosphere/foyer.jpg" alt={lang === "it" ? "Foyer · programmi" : "Foyer · programmes"} loading="lazy" />
          <span className="gallery-cap">{lang === "it" ? "Foyer · programmi" : "Foyer · programmes"}</span>
        </a>
        <a className="gallery-cell" style={{ gridArea: "a" }}>
          <img src="assets/atmosphere/sonorizzazione-annoni.png" alt={lang === "it" ? "Sonorizzazione live · Edmondo Annoni" : "Live scoring · Edmondo Annoni"} loading="lazy" />
          <span className="gallery-cap">{lang === "it" ? "Sonorizzazione live · Edmondo Annoni" : "Live scoring · Edmondo Annoni"}</span>
        </a>
        <a className="gallery-cell" style={{ gridArea: "b" }}>
          <img src="assets/atmosphere/award-experimental.jpg" alt={lang === "it" ? "Premiazione · Best Experimental" : "Award · Best Experimental"} loading="lazy" />
          <span className="gallery-cap">{lang === "it" ? "Premiazione · Best Experimental" : "Award · Best Experimental"}</span>
        </a>
      </div>
    </section>
  );
}
function PressSection({ t, lang }) {
  return (
    <section className="shell">
      <SectionHead idx="§ 10" eyebrow={t.press.eyebrow} title={t.press.title} />
      <div className="press">
        {t.press.items.map((p, i) => (
          <a className="press-card" key={i} href={p.url || "#"}
             target={p.url ? "_blank" : undefined} rel={p.url ? "noopener noreferrer" : undefined}
             onClick={p.url ? undefined : (e)=>e.preventDefault()}>
            <div className="pub">
              <span className="pub-name">{p.pub}</span>
              <span className="pub-date">{p.date}</span>
            </div>
            <div className="headline">{p.headline}</div>
            <div className="blurb">{p.blurb}</div>
            <div style={{ marginTop: 8 }}>
              <span className="link-arrow muted">{lang === "it" ? "Leggi" : "Read"} <span className="arrow" /></span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

// ─── Partners ──────────────────────────────────────────────────────────────
function PartnersSection({ t, lang }) {
  return (
    <section id="partner" className="shell">
      <SectionHead idx="§ 12" eyebrow={t.partners.eyebrow} title={t.partners.title} />
      <div className="partners">
        {t.partners.items.map((p, i) => (
          <div className="partner" key={i}>
            <div className="role">{p.role}</div>
            <div className="name">{p.name}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 28, display: "flex", justifyContent: "flex-end" }}>
        <a className="link-arrow" href={`mailto:chiaroscurofilmfest@gmail.com?subject=Partner%202026`}>
          {t.partners.become} <span className="arrow" />
        </a>
      </div>
    </section>
  );
}

// ─── Programma (in-page, day + category filter) ──────────────────────────────
function ProgramSection({ t, lang }) {
  const [day, setDay] = useState("d1");
  const [cat, setCat] = useState("all");
  const cats = window.PROGRAM.categories[lang];
  const allCats = ["all", "screening", "talk", "award"];
  const slots = useMemo(
    () => window.PROGRAM.slots.filter((s) => s.day === day && (cat === "all" || s.cat === cat)),
    [day, cat]
  );
  const dayObj = window.PROGRAM.days.find((d) => d.id === day);
  return (
    <section id="programma" className="shell">
      <SectionHead
        idx="§ 03"
        eyebrow={lang === "it" ? "Programma · II Edizione" : "Program · II Edition"}
        title={lang === "it" ? "Tre serate al Conca Verde." : "Three evenings at Conca Verde."}
        lede={lang === "it"
          ? "La scaletta dell'edizione 2025.\nIl programma della III edizione sarà annunciato prossimamente."
          : "The 2025 edition line-up.\nThe 2026 third-edition programme will be announced soon."}
      />
      <div className="day-tabs" role="tablist" aria-label={lang === "it" ? "Giorni" : "Days"}>
        {window.PROGRAM.days.map((d) => (
          <button key={d.id} className={day === d.id ? "on" : ""} onClick={() => setDay(d.id)}>{d.label[lang]}</button>
        ))}
      </div>
      <div className="cat-tabs" role="tablist" aria-label={lang === "it" ? "Categorie" : "Categories"}>
        {allCats.map((c) => (
          <button key={c} className={cat === c ? "on" : ""} onClick={() => setCat(c)}>{cats[c]}</button>
        ))}
      </div>
      <div className="kicker" style={{ paddingBottom: 12 }}>{dayObj.full[lang]}</div>
      <div className="schedule">
        {slots.length === 0 ? (
          <div style={{ padding: "60px 0", textAlign: "center", color: "var(--fg-dim)", fontFamily: "var(--f-mono)", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            {lang === "it" ? "Nessun evento per questa categoria." : "No events in this category."}
          </div>
        ) : slots.map((s, i) => (
          <div className="slot" key={i}>
            <span className="time">{s.time}</span>
            <div className="body">
              <div className="name">{lang === "it" ? s.name_it : s.name_en}</div>
              <div className="meta">{lang === "it" ? s.meta_it : s.meta_en}</div>
            </div>
            <span className="cat" data-cat={s.cat}>{cats[s.cat]}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Albo d'oro 2025 (full palmarès) ─────────────────────────────────────────
function AlboOroSection({ t, lang }) {
  return (
    <section id="albo" className="shell">
      <SectionHead
        idx="§ 06"
        eyebrow={lang === "it" ? "Albo d'oro · 2025" : "Roll of honour · 2025"}
        title={lang === "it" ? "Tutti i premi della II edizione." : "The complete 2025 palmarès."}
      />
      <div className="schedule" style={{ borderTop: "1px solid var(--line-strong)" }}>
        {window.ARCHIVE_2025.awards.map((a, i) => (
          <div className="slot" key={i} style={{ gridTemplateColumns: "minmax(180px, 0.95fr) 1.25fr 1.1fr 110px", alignItems: "center" }}>
            <span className="cat">{lang === "it" ? a.award_it : a.award_en}</span>
            <div className="body">
              <div className="name">{a.title}</div>
              <div className="meta">{a.director}</div>
            </div>
            <div className="body">
              <div className="meta" style={{ textTransform: "none", letterSpacing: "0.02em", color: a.recipient ? "var(--fg-dim)" : "var(--fg-faint)" }}>{a.recipient || "—"}</div>
            </div>
            <span className="time" style={{ textAlign: "right" }}>{a.country}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── CTA strip (yellow) ────────────────────────────────────────────────────
function CTAStrip({ t, lang }) {
  return (
    <section style={{ padding: 0, borderTop: 0 }}>
      <div className="cta-strip">
        <h2>{lang === "it" ? "Iscrizioni alla III Edizione" : "Submit to the third edition"}<br/>
          <span style={{ color: "rgba(24,24,24,.55)" }}>{lang === "it" ? "aperte su FilmFreeway." : "open on FilmFreeway."}</span>
        </h2>
        <div className="rhs">
          <span className="deadline">{lang === "it" ? "Scadenza estesa · 31 Luglio 2026" : "Extended deadline July 31, 2026"}</span>
          <a className="btn btn-dark" href="https://filmfreeway.com/chiaroscurofilmfest" target="_blank" rel="noopener">
            {t.submit.cta} <span className="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Contacts (a small grid above footer) ──────────────────────────────────
function ContactSection({ t, lang }) {
  return (
    <section className="shell">
      <SectionHead idx="§ 13" eyebrow={t.contact.eyebrow} title={t.contact.title} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, paddingTop: 8, borderTop: "1px solid var(--line)" }} className="contact-grid">
        {[t.contact.director, t.contact.producer, t.contact.city].map((c, i) => (
          <div key={i} style={{ padding: "28px 0", borderRight: i < 2 ? "1px solid var(--line)" : "none", paddingRight: 24 }}>
            <div className="kicker" style={{ marginBottom: 12 }}>{c.role}</div>
            <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.005em" }}>{c.name}</div>
            <div className="muted" style={{ marginTop: 6, fontFamily: "var(--f-mono)", fontSize: 13 }}>
              {c.phone || c.line}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a className="btn btn-ghost" href={`mailto:${t.contact.email}`}>
          {t.contact.email} <span className="arrow" />
        </a>
        <a className="btn btn-ghost" href="https://instagram.com/chiaroscurofilmfest" target="_blank" rel="noopener">
          {t.contact.ig} <span className="arrow" />
        </a>
        <a className="btn btn-ghost" href="https://filmfreeway.com/chiaroscurofilmfest" target="_blank" rel="noopener">
          {t.contact.filmfreeway} <span className="arrow" />
        </a>
      </div>
    </section>
  );
}

Object.assign(window, {
  AboutSection, SubmitSection, StatsSection, WinnersSection,
  JurySection, GuestsSection, IncontraSection, PressSection,
  PartnersSection, CTAStrip, ContactSection,
  AtmosphereDivider, AtmosphereGallery,
  ProgramSection, AlboOroSection,
});
