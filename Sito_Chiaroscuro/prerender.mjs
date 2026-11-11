// Dopo la build: scrive il contenuto della pagina dentro dist/index.html,
// così chi non esegue JavaScript (molti crawler delle AI) legge comunque tutto il testo.
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const { render } = await import(pathToFileURL(resolve("dist-ssr/server.js")).href);
const file = resolve("dist/index.html");
const html = readFileSync(file, "utf8");
const marker = '<div id="root"></div>';
if (!html.includes(marker)) throw new Error("prerender: <div id=\"root\"></div> non trovato in dist/index.html");
writeFileSync(file, html.replace(marker, `<div id="root">${render()}</div>`));
rmSync(resolve("dist-ssr"), { recursive: true, force: true });
console.log("prerender: dist/index.html scritto");
