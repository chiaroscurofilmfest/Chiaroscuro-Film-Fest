// Build del sito: compila i .jsx una volta sola (niente Babel nel browser)
// e copia così com'è la cartella assets/, perché le immagini sono indicate
// come testo nei file JS e Vite non le troverebbe da solo.
import { defineConfig } from "vite";
import { cpSync } from "node:fs";
import { resolve } from "node:path";

export default defineConfig({
  publicDir: false,
  build: {
    assetsDir: "build",
    rollupOptions: {
      input: {
        main: resolve("index.html"),
        trasparenza: resolve("trasparenza.html"),
        privacy: resolve("privacy.html"),
      },
    },
  },
  plugins: [
    {
      name: "copy-assets",
      closeBundle() {
        cpSync("assets", "dist/assets", { recursive: true });
        // file che Google e i crawler cercano nella radice del sito
        cpSync("robots.txt", "dist/robots.txt");
        cpSync("sitemap.xml", "dist/sitemap.xml");
        // verifica di Google Search Console: deve restare nella radice del sito
        cpSync("google5f895e867161a17c.html", "dist/google5f895e867161a17c.html");
      },
    },
  ],
});
