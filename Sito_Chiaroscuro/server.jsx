// Ingresso per la pre-generazione: stessi moduli del sito, resi in HTML statico.
import "./ssr-globals.js";
import "./data.js";
import "./components.jsx";
import "./hero.jsx";
import "./sections.jsx";
import "./app.jsx";
import { renderToString } from "react-dom/server";

export function render() {
  return renderToString(<window.App />);
}
