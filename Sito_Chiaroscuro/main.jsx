// Punto di ingresso: React va reso globale prima di caricare gli altri file,
// che lo usano come window.React (come faceva Babel nel browser).
import "./globals.js";
import "./data.js";
import "./components.jsx";
import "./hero.jsx";
import "./sections.jsx";
import "./app.jsx";
