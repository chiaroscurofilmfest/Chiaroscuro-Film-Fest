# Chiaroscuro Film Fest — sito ufficiale

Sito one-page di chiaroscurofilmfest.it, bilingue IT/EN. React compilato con Vite, pubblicato su Vercel dalla cartella `Sito_Chiaroscuro` del repository GitHub `Chiaroscuro-Film-Fest`.

## Come si aggiorna

1. Modifica i file sorgente (di solito solo `data.js` per i testi).
2. Caricali su GitHub dentro `Sito_Chiaroscuro` (Add file → Upload files).
3. Vercel compila e pubblica da solo in circa un minuto. Se la compilazione fallisce, resta online la versione precedente.

Il sito non si riapre in Claude Design: la struttura è cambiata con il passaggio a Vite.

## File

```
index.html        pagina principale: meta, anteprima social, font
privacy.html      privacy e cookie (IT + EN)
trasparenza.html  dati dell'ente
main.jsx          punto di ingresso: carica i moduli nell'ordine giusto
globals.js        rende React globale per gli altri file
data.js           TUTTI i testi IT/EN, programma, palmarès
app.jsx           ordine delle sezioni della pagina
hero.jsx          hero con foto, scadenze iscrizioni e countdown
sections.jsx      tutte le sezioni
components.jsx    menu, footer, intestazioni di sezione
styles.css        stili
assets/           immagini (copiate così come sono nella build)
vite.config.js    configurazione della compilazione
vercel.json       dice a Vercel come compilare
```

`uploads/` e `Chiaroscuro Film Fest.html` restano solo in locale: sono gli originali e il vecchio file unico di Claude Design, non vanno caricati.

## Scadenze iscrizioni

Le date del countdown sono in `hero.jsx` (`SUBMIT_DEADLINES`): l'hero passa da solo alla scadenza successiva e, dopo l'ultima, mostra le date del festival. Le stesse date, in forma di tabella, sono in `data.js` (`submit.deadlines`). Per una nuova edizione vanno aggiornate in entrambi i posti.

## Provarlo in locale

```bash
npm install
npm run dev       # anteprima con aggiornamento automatico
npm run build     # compila in dist/
npm run preview   # serve la versione compilata
```
