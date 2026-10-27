// app.jsx — main composer for Chiaroscuro home page

const TWEAK_DEFAULTS = {
  "lang": "it",
  "theme": "light",
  "density": "regular",
  "font": "sans",
  "heroVariant": "countdown",
  "animO": true,
  "cursorLight": false
};

function App() {
  // Lingua iniziale dal browser: italiano per chi ha il browser in italiano, inglese per tutti gli altri
  const [t, setT] = React.useState(() => ({
    ...TWEAK_DEFAULTS,
    lang: (navigator.language || "it").toLowerCase().startsWith("it") ? "it" : "en",
  }));
  const setTweak = (k, v) => setT((prev) => ({ ...prev, [k]: v }));
  const lang = t.lang === "en" ? "en" : "it";
  const setLang = (l) => setTweak("lang", l);
  const copy = window.COPY[lang];

  // Apply theme + density + font to html root
  React.useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = t.theme;
    root.dataset.density = t.density;
    root.dataset.font = t.font;
    root.lang = lang;
  }, [t.theme, t.density, t.font, lang]);

  return (
    <React.Fragment>
      <ChiaroscuroCursor enabled={!!t.cursorLight} />

      <Nav t={copy} lang={lang} setLang={setLang} theme={t.theme} />

      <Hero
        t={copy}
        lang={lang}
        animO={!!t.animO}
      />

      <AboutSection      t={copy} lang={lang} />
      <SubmitSection     t={copy} lang={lang} />
      <WinnersSection    t={copy} lang={lang} />
      <AlboOroSection    t={copy} lang={lang} />
      <JurySection       t={copy} lang={lang} />
      <GuestsSection     t={copy} lang={lang} />
      <IncontraSection   t={copy} lang={lang} />
      <PressSection      t={copy} lang={lang} />

      {/* Capitolo III Edizione: video, numeri, programma, galleria */}
      <AtmosphereDivider
        videoId="VPemJXzBDMg"
        caption={lang === "it" ? "Video report · Edizione III 2026" : "Video report · III Edition 2026"}
        alt="Chiaroscuro Film Fest 2026 — video report"
      />
      <StatsSection      t={copy} lang={lang} />
      <ProgramSection    t={copy} lang={lang} />
      <AtmosphereGallery t={copy} lang={lang} />

      <PartnersSection   t={copy} lang={lang} />

      <Footer t={copy} lang={lang} />
      <MobileSubmitBar t={copy} lang={lang} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
