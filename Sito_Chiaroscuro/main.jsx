// Punto di ingresso: React va reso globale prima di caricare gli altri file,
// che lo usano come window.React (come faceva Babel nel browser).
import "./globals.js";
import "./data.js";
import "./components.jsx";
import "./hero.jsx";
import "./sections.jsx";
import "./app.jsx";

// La pagina arriva già scritta (pre-generata in build per Google e per le AI):
// React la sostituisce con la versione interattiva.
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
