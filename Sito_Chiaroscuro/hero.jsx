// hero.jsx — Hero: foto della sala, scadenza iscrizioni e countdown

// Scadenze FilmFreeway: il countdown passa da sola alla scadenza successiva
const SUBMIT_DEADLINES = [
  { iso: "2026-12-31T23:59:59+01:00", it: "entro il 31 Dicembre", en: "by December 31", short: { it: "Early bird · 31 dicembre", en: "Early bird · Dec 31" } },
  { iso: "2027-03-31T23:59:59+02:00", it: "entro il 31 Marzo",    en: "by March 31",    short: { it: "Regular · 31 marzo",       en: "Regular · Mar 31" } },
  { iso: "2027-06-30T23:59:59+02:00", it: "entro il 30 Giugno",   en: "by June 30",     short: { it: "Late · 30 giugno",         en: "Late · Jun 30" } },
  { iso: "2027-07-31T23:59:59+02:00", it: "entro il 31 Luglio",   en: "by July 31",     short: { it: "Extended · 31 luglio",     en: "Extended · Jul 31" } },
];
const nextDeadline = () => SUBMIT_DEADLINES.find((d) => new Date(d.iso).getTime() > Date.now());

const HeroCountdown = ({ t, lang, animO }) => {
  const next = nextDeadline();
  const { D, H, M, S } = useCountdown(next ? next.iso : SUBMIT_DEADLINES[SUBMIT_DEADLINES.length - 1].iso);
  return (
    <section className="hero hero--photo dark-sect" data-variant="countdown">
      {/* La sala al buio: lo schermo è l'unica fonte di luce, il testo sta nell'ombra del pubblico */}
      <div className="hero-photo" aria-hidden="true">
        <img
          src={RES("assets/atmosphere/hero-sala.jpg")}
          srcSet={`${RES("assets/atmosphere/hero-sala-1200.jpg")} 1200w, ${RES("assets/atmosphere/hero-sala.jpg")} 2400w`}
          sizes="100vw"
          alt=""
          fetchpriority="high"
        />
      </div>
      <div className="hero-meta">
        <span>
          <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "var(--yellow)", marginRight: 10, verticalAlign: 2 }} />
          {t.hero.eyebrow}
        </span>
        <span className="center">{lang === "it" ? "IV Edizione · 27–29 settembre 2027 · Cinema Conca Verde, Bergamo" : "IV Edition · September 27–29, 2027 · Cinema Conca Verde, Bergamo"}</span>
        <a className="right" href="#iscrizioni">{lang === "it" ? "Iscrizioni 2027 aperte" : "2027 submissions open"} ↗</a>
      </div>

      <div className="hero-stage">
        <div className="hero-top-line">
          <div className="hero-title-stack">
            <h1 className="hero-headline">
              {next ? <>
                {lang === "it" ? "Iscrivi il tuo film" : "Submit your film"}<br />
                {next[lang]}
              </> : (lang === "it" ? "27–29 settembre 2027" : "September 27–29, 2027")}
            </h1>
          </div>
        </div>

        {next && <div>
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
        </div>}

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
          {next && <a className="btn btn-yellow" href="https://filmfreeway.com/chiaroscurofilmfest" target="_blank" rel="noopener">
            {t.hero.cta_submit} <span className="arrow" />
          </a>}
          <a className="btn btn-ghost" href="#iscrizioni">
            {lang === "it" ? "Scadenze e categorie" : "Deadlines and categories"} <span className="arrow" />
          </a>
        </div>
      </div>
    </section>);

};

// Su telefono, quando l'hero esce dallo schermo, resta in basso l'invito a iscriversi
function MobileSubmitBar({ t, lang }) {
  const next = nextDeadline();
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const hero = document.querySelector(".hero");
    if (!hero || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => setShow(!e.isIntersecting), { threshold: 0 });
    io.observe(hero);
    return () => io.disconnect();
  }, []);
  if (!next) return null;
  return (
    <div className={"submit-bar" + (show ? " on" : "")} aria-hidden={!show}>
      <span className="submit-bar-when">{next.short[lang]}</span>
      <a className="btn btn-yellow" href="https://filmfreeway.com/chiaroscurofilmfest" target="_blank" rel="noopener" tabIndex={show ? 0 : -1}>
        {lang === "it" ? "Iscrivi il tuo film" : "Submit your film"} <span className="arrow" />
      </a>
    </div>
  );
}
window.MobileSubmitBar = MobileSubmitBar;

function Hero({ t, lang, animO }) {
  return <HeroCountdown t={t} lang={lang} animO={animO} />;
}
window.Hero = Hero;
