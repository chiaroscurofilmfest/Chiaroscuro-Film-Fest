// app.jsx — main composer for Chiaroscuro home page

const TARGET_2026 = "2026-09-28T18:00:00+02:00";

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "lang": "it",
  "theme": "light",
  "density": "regular",
  "font": "sans",
  "heroVariant": "countdown",
  "animO": true,
  "cursorLight": false
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
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
        variant={t.heroVariant}
        t={copy}
        lang={lang}
        animO={!!t.animO}
        target={TARGET_2026}
      />

      <AboutSection      t={copy} lang={lang} />
      <AtmosphereDivider
        videoId="P6QcBwsAtvE"
        caption={lang === "it" ? "Video report · Edizione II 2025" : "Video report · II Edition 2025"}
        alt="Chiaroscuro Film Fest 2025 — video report"
      />
      <SubmitSection     t={copy} lang={lang} />
      <ProgramSection    t={copy} lang={lang} />
      <StatsSection      t={copy} lang={lang} />
      <WinnersSection    t={copy} lang={lang} />
      <AlboOroSection    t={copy} lang={lang} />
      <JurySection       t={copy} lang={lang} />
      <GuestsSection     t={copy} lang={lang} />
      <IncontraSection   t={copy} lang={lang} />
      <PressSection      t={copy} lang={lang} />
      <AtmosphereGallery t={copy} lang={lang} />
      <PartnersSection   t={copy} lang={lang} />
      <CTAStrip          t={copy} lang={lang} />
      <ContactSection    t={copy} lang={lang} />

      <Footer t={copy} lang={lang} />

      <TweaksPanel>
        <TweakSection label={lang === "it" ? "Generale" : "General"} />
        <TweakRadio
          label={lang === "it" ? "Tema" : "Theme"}
          value={t.theme}
          options={["light", "dark"]}
          onChange={(v) => setTweak("theme", v)}
        />
        <TweakRadio
          label={lang === "it" ? "Densità" : "Density"}
          value={t.density}
          options={["compact", "regular", "comfy"]}
          onChange={(v) => setTweak("density", v)}
        />
        <TweakRadio
          label={lang === "it" ? "Lingua" : "Language"}
          value={t.lang}
          options={["it", "en"]}
          onChange={(v) => setTweak("lang", v)}
        />

        <TweakSection label={lang === "it" ? "Tipografia" : "Typography"} />
        <TweakSelect
          label={lang === "it" ? "Font display" : "Display font"}
          value={t.font}
          options={[
            { value: "sans",    label: "General Sans · editorial neutral" },
            { value: "display", label: "Cabinet Grotesk · display" },
            { value: "serif",   label: "Instrument Serif · cinéphile" },
          ]}
          onChange={(v) => setTweak("font", v)}
        />

        <TweakSection label={lang === "it" ? "Hero" : "Hero"} />
        <TweakSelect
          label={lang === "it" ? "Layout hero" : "Hero layout"}
          value={t.heroVariant}
          options={[
            { value: "countdown",   label: lang === "it" ? "Countdown editoriale" : "Editorial countdown" },
            { value: "compact",     label: lang === "it" ? "Countdown ridotto" : "Compact countdown" },
            { value: "editorial",   label: lang === "it" ? "Editoriale / Indice" : "Editorial / Index" },
            { value: "marquee",     label: lang === "it" ? "Marquee cinetico" : "Kinetic marquee" },
            { value: "manifesto",   label: lang === "it" ? "Manifesto tipografico" : "Typographic manifesto" },
            { value: "chiaroscuro", label: lang === "it" ? "Chiaroscuro (luce/ombra)" : "Chiaroscuro (light/shadow)" },
          ]}
          onChange={(v) => setTweak("heroVariant", v)}
        />
        <TweakToggle
          label={lang === "it" ? "Animazione del marchio “oo”" : "“oo” logo mark animation"}
          value={t.animO}
          onChange={(v) => setTweak("animO", v)}
        />
        <TweakToggle
          label={lang === "it" ? "Spotlight cursore" : "Cursor spotlight"}
          value={t.cursorLight}
          onChange={(v) => setTweak("cursorLight", v)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
