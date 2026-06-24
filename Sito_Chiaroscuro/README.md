# Chiaroscuro Film Fest — Sito ufficiale

Sito one-page del **Chiaroscuro Film Fest** (III Edizione · 28–30 settembre 2026 · Cinema Conca Verde, Bergamo).
Festival internazionale di cortometraggi indipendenti.

Single-page application in **React** con sezioni editoriali, archivio palmarès, giuria, ospiti, partner, bilingue **IT/EN**, tema chiaro/scuro.

---

## Struttura del progetto

```
index.html         → entry point. Carica font, React/Babel, e i moduli .jsx/.js
styles.css         → tutti gli stili + breakpoint responsive (mobile-first safeguards)
data.js            → contenuti del sito (window.COPY it/en, archivio 2025, dati film/giuria/ospiti)
app.jsx            → composer principale: monta tutte le sezioni + pannello Tweaks
components.jsx     → Nav (con menu mobile), Footer, cursore, primitive condivise
hero.jsx           → varianti dell'hero (countdown, manifesto, marquee, chiaroscuro…)
sections.jsx       → tutte le sezioni di contenuto (about, programma, giuria, gallery…)
tweaks-panel.jsx   → pannello di controllo SOLO editor (vedi nota sotto)
assets/            → immagini effettivamente usate dal sito
  ├─ posters/      → locandine vincitori
  ├─ jury/         → ritratti giuria
  ├─ guests/       → ritratti ospiti
  ├─ atmosphere/   → foto evento + reel
  └─ *.png         → logotipi e simbolo
```

## Come avviarlo in locale

Serve un server statico qualsiasi (i moduli vengono caricati via `<script src>`, quindi `file://` non basta):

```bash
npx serve .
# oppure
python3 -m http.server 8000
```

Poi apri `http://localhost:8000`.

## Pubblicazione online

Il sito è statico: si può deployare così com'è su **Netlify, Vercel, GitHub Pages, Cloudflare Pages** caricando l'intera cartella. `index.html` è la root.

## ⚠️ Nota per la produzione (Babel in-browser)

Attualmente i file `.jsx` vengono transpilati **nel browser** con `@babel/standalone` (vedi `<script type="text/babel">` in `index.html`). Funziona online, ma rallenta il primo caricamento e non è ottimale per la produzione.

**Raccomandazione per Claude Code:** introdurre un build step (es. **Vite**) per pre-compilare i `.jsx`, rimuovere `@babel/standalone` e servire un bundle JS minificato. La logica dei componenti non va toccata, solo il setup di build.

## Internazionalizzazione (IT/EN)

Tutti i testi vivono in `data.js` sotto `window.COPY.it` / `window.COPY.en`. Il toggle lingua è nella nav. Default: italiano.

## Tema chiaro/scuro

Controllato da `document.documentElement.dataset.theme` (`light` / `dark`). Default: `light`.

## Pannello "Tweaks" (solo editor)

`tweaks-panel.jsx` è uno strumento di esplorazione design (varianti hero, densità, font…). **Resta nascosto in produzione**: si attiva solo dentro l'editor che lo ospita, quindi non è visibile agli utenti finali del sito pubblicato. Può essere rimosso del tutto se non serve più: togliere il blocco `<TweaksPanel>…</TweaksPanel>` in `app.jsx`, lo `<script>` di `tweaks-panel.jsx` in `index.html`, e sostituire `useTweaks` con uno stato React normale per lingua/tema.

## Dipendenze esterne (CDN / link)

- Font: General Sans + Cabinet Grotesk (Fontshare), Instrument Serif + JetBrains Mono (Google Fonts)
- React 18 + Babel standalone (unpkg)
- Video report: YouTube embed
- Iscrizioni: FilmFreeway
- Reel: link Instagram

## Date chiave

- III Edizione: **28–30 settembre 2026**
- Sede: Cinema Conca Verde, Bergamo
