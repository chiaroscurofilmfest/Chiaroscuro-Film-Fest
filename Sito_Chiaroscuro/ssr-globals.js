// Ambiente minimo per generare la pagina in Node: gli altri file si aspettano
// di trovare React e qualche oggetto del browser come globali.
import React from "react";

globalThis.window = globalThis;
globalThis.React = React;
globalThis.RES = (p) => p;
// la versione pre-generata è sempre in italiano, qualunque sia la lingua del server di build
globalThis.__PRERENDER_LANG = "it";
