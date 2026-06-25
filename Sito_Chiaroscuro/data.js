// data.jsx — content + i18n for Chiaroscuro Film Fest
// Exposed on window for cross-script access.

const COPY = {
  it: {
    nav: {
      festival: "Festival",
      programma: "Programma",
      archivio: "Edizione 2025",
      giuria: "Giuria",
      iscrizioni: "Iscrizioni",
      partner: "Partner",
      contatti: "Contatti",
    },
    ticker: [
      "III Edizione",
      "28 — 30 Settembre 2026",
      "Cinema Conca Verde · Bergamo",
      "Iscrizioni aperte su FilmFreeway",
      "Bold stories. Fresh perspectives.",
    ],
    hero: {
      eyebrow: "International Film Festival",
      title_a: "28·29·30",
      title_b: "Settembre",
      title_year: "2026",
      countdown_label: "Countdown",
      city: "Bergamo, IT",
      venue: "Cinema Conca Verde",
      edition: "Terza Edizione",
      headline_b: "Film che prendono posizione.",
      sub_b: "Registi emergenti da 35 Paesi. Tre serate al Cinema Conca Verde di Bergamo.",
      chiaro_text_dark: "Luce.",
      chiaro_text_light: "Ombra.",
      chiaro_sub: "Muovi il mouse per mettere a fuoco.",
      cta_submit: "Iscrivi il tuo corto",
      cta_program: "Vedi il programma",
    },
    about: {
      eyebrow: "Manifesto",
      title: "Il cinema breve come necessità.",
      lede: "Chiaroscuro è un festival internazionale di cortometraggi con sede a Bergamo, Lombardia.\nDal 2024 porta in Italia opere di cinema indipendente da tutto il mondo — narrative, documentarie, sperimentali — in dialogo con il pubblico e con l'industria.\n",
      items: [
        {
          n: "\n",
          h: "\n\n\n",
          p: "\n\n\n",
        },
        {
          n: "\n",
          h: "",
          p: "\n",
        },
        {
          n: "\n",
          h: "\n",
          p: "\n",
        },
      ],
    },
    submit: {
      eyebrow: "Iscrizioni 2026",
      title: "Mostra il tuo corto a Bergamo.",
      lede: "Le iscrizioni alla terza edizione sono aperte su FilmFreeway. Cerchiamo opere di finzione, documentario e animazione fino a 15 minuti.",
      categories: [
        { k: "BEST INTERNATIONAL", v: "Cortometraggi da tutto il mondo" },
        { k: "BEST ITALIAN", v: "La nuova generazione del cinema italiano" },
        { k: "BEST DOCUMENTARY", v: "Sguardi del reale, brevi e radicali" },
        { k: "BEST ANIMATION", v: "Linguaggi e tecniche d'animazione" },
      ],
      deadlines: [
        { k: "Early bird", v: "31 Marzo 2026" },
        { k: "Regular", v: "30 Giugno 2026" },
        { k: "Late", v: "31 Luglio 2026" },
        { k: "Notifica", v: "Settembre 2026" },
      ],
      cta: "Iscrivi su FilmFreeway",
    },
    stats: {
      eyebrow: "Edizione II · 2025",
      title: "Il festival in cifre.",
      items: [
        { n: "250+", l: "Opere iscritte" },
        { n: "35", l: "Paesi rappresentati" },
        { n: "25", l: "Film in concorso" },
      ],
    },
    winners: {
      eyebrow: "Vincitori 2025",
      title: "I quattro premi principali.",
      lede: "I riconoscimenti delle categorie in concorso, scelti da una giuria di registi, sceneggiatori, attori e produttori.",
      items: [
        {
          award: "Best International", title: "The Steak",
          director: "Kiarash Dadgar", country: "Canada / Iran", year: "2024",
          poster: "assets/posters/the-steak.jpg",
          synopsis: "I preparativi per una festa di compleanno precipitano nel caos a causa di un evento terribile."
        },
        {
          award: "Best Italian", title: "Padre",
          director: "Michele Gallone", country: "Italia", year: "2024",
          poster: "assets/posters/padre.jpg",
          synopsis: "In un futuro prossimo, le emozioni sono in vendita. Francesco ha venduto il suo amore per la figlia Anna — una scelta dolorosa, fatta solo perché la malattia terminale della bambina rendeva tutto inevitabile. Mario, mosso da un ambiguo spirito di sacrificio, paga il prezzo più alto che un padre possa provare."
        },
        {
          award: "Best Documentary", title: "Il mare breve",
          director: "Matteo Gamannossi & Riccardo Cocumarolo", country: "Italia", year: "2024",
          poster: "assets/posters/il-mare-breve.jpg",
          synopsis: "Da quando era giovane, come il nonno e il padre prima di lui, Hans Petur ha vissuto in totale isolamento come guardiano del faro di Akraberg — una delle rocce più remote d'Europa, alle Isole Fær Øer. L'ultima notte di vento e vuoto, deve decidere se la pensione sia davvero un premio, o se quello che desidera resti soltanto l'avventura di una solitudine perfetta, senza tempo né compagnia."
        },
        {
          award: "Best Animation", title: "Playing God",
          director: "Matteo Burani", country: "Italia", year: "2024",
          poster: "assets/posters/playing-god.jpg",
          synopsis: "Una scultura di creta prende vita nell'oscurità di un laboratorio, circondata da creature misteriose…"
        },
      ],
      cta: "Vedi tutti i premi",
    },
    jury: {
      eyebrow: "Giuria 2026",
      title: "Una giuria d'eccezione.",
      items: [
        {
          name: "Alessio Boni",
          role: "Presidente di Giuria · Attore",
          bio: "Tra i più riconoscibili interpreti italiani della sua generazione. Ha lavorato con Marco Tullio Giordana, Ferzan Özpetek e Cristina Comencini attraversando cinema, teatro e televisione.\n",
          portrait: "assets/jury/alessio-boni.webp",
        },
        {
          name: "Hilary Tiscione",
          role: "Scrittrice, critica, regista",
          bio: "Coordinatrice del Master in Sceneggiatura dell'Università IULM. Nel 2025 ha diretto il documentario Cannibali.",
          portrait: "assets/jury/hilary-tiscione.jpg",
        },
        {
          name: "Erika Ponti",
          role: "Producer · Oki Doki Film",
          bio: "Founder & CEO di Oki Doki Film. Producer e già Artistic Director di un festival di cortometraggi.",
          portrait: "assets/jury/erika-ponti.webp",
        },
        {
          name: "Daniele Pini",
          role: "Regista, sceneggiatore",
          bio: "Ha diretto corti premiati in numerosi festival. Nel 2020 ha diretto il documentario Impressionisti Segreti.",
          portrait: "assets/jury/daniele-pini.png",
        },
      ],
    },
    jury2025: {
      eyebrow: "Giuria 2025",
      title: "La giuria della seconda edizione.",
      items: [
        { name: "Elettra Canovi", role: "Presidente di Giuria · Director of Scripted Content, HBO Max Italia" },
        { name: "Giorgio Marchesi", role: "Attore di cinema, teatro e televisione" },
        { name: "Hilary Tiscione", role: "Scrittrice · Coordinatrice Master Sceneggiatura IULM" },
        { name: "Beppe Manzi", role: "Regista, sceneggiatore · Fondatore Oki Doki Film" },
      ],
    },
    guests: {
      eyebrow: "Ospiti 2025",
      title: "Le voci che hanno attraversato il festival.",
      items: [
        { name: "Naja Phạm Lockwood", role: "Regista USA · Sundance 2025",                    portrait: "assets/guests/naja.jpg"      },
        { name: "Giuseppe Carrieri",   role: "Regista · candidato David di Donatello",    portrait: "assets/guests/carrieri.jpg"  },
        { name: "Beppe Tufarulo",      role: "Regista · Sky Arte, Amazon Prime",                portrait: "assets/guests/tufarulo.jpg"  },
        { name: "Elettra Canovi",     role: "Director of Local Original Productions · HBO Max Italia", portrait: "assets/guests/canovi.jpg" },
      ],
    },
    incontra: {
      eyebrow: "Social media",
      title: "Chiaroscuro Incontra.",
      lede: "Conversazioni con registi e ospiti durante le serate al Cinema Conca Verde. Film, carriera, linguaggio, visione.",
      past: ["Zingaretti", "Mastandrea", "Sorrentino", "Aureliano Amadei", "Laura Samani", "Naja Phạm Lockwood"],
      cta: "Guarda i reel su Instagram",
    },
    press: {
      eyebrow: "Press",
      title: "Hanno scritto del festival.",
      items: [
        {
          pub: "Elle",
          date: "12.2025",
          headline: "Le vite degli altri al Chiaroscuro Film Fest",
          blurb: "Su Elle, il racconto del festival di cortometraggi di Bergamo e degli autori emergenti che porta in sala.",
          url: "https://www.elle.com/it/showbiz/cinema/a67885649/chiaroscuro-film-fest-festival-cortometraggi-bergamo/",
        },
        {
          pub: "Bergamo News",
          date: "18.12.2025",
          headline: "Due corti premiati a Bergamo nella corsa agli Oscar 2026",
          blurb: "Il cortometraggio documentario \"On Healing Land, Birds Perch\" è stato presentato in anteprima europea al Chiaroscuro Film Fest.",
          url: "https://www.bergamonews.it/2025/12/18/due-corti-premiati-a-bergamo-nella-corsa-agli-oscar-2026/855612/",
        },
        {
          pub: "Bergamo News",
          date: "02.10.2025",
          headline: "Il festival di Bergamo che mette a fuoco le voci emergenti del cinema",
          blurb: "Oltre 300 partecipanti, 35 Paesi rappresentati e una giuria internazionale per la seconda edizione del Chiaroscuro Film Fest.",
        },
        {
          pub: "Corriere della Sera",
          date: "25.09.2024",
          headline: "«Chiaroscuro»: il nuovo festival dei cortometraggi in omaggio a Caravaggio",
          blurb: "Allo Spazio Polaresco la prima edizione del festival internazionale di corti che rende omaggio a Bergamo e a Caravaggio.",
          url: "https://bergamo.corriere.it/notizie/cultura-e-spettacoli/24_settembre_25/spazio-polaresco-chiaroscuro-il-nuovo-festival-dei-cortometraggi-in-omaggio-a-caravaggio-52392690-7ed0-4e3b-99d5-10102a686xlk.shtml",
        },
      ],
    },
    partners: {
      eyebrow: "Partner",
      title: "Una rete di cultura, cinema e territorio.",
      items: [
        { name: "Cinema Conca Verde", role: "Sede ufficiale" },
        { name: "Alpha Charlie Production", role: "Powered by" },
        { name: "Mandelli Arte\n\n", role: "Collaborazione artistica" },
        { name: "Edizioni Pulcinoelefante", role: "Premio speciale 2025" },
      ],
      become: "Diventa partner",
    },
    contact: {
      eyebrow: "Contatti",
      title: "Scriviamoci.",
      email: "chiaroscurofilmfest@gmail.com",
      director: { role: "Direzione Artistica", name: "Lorenzo Bombara", phone: "+39 331 9513670" },
      producer: { role: "Produzione", name: "Pietro Cestari", phone: "+39 366 4946327" },
      city: { role: "Sede", name: "Cinema Conca Verde", line: "Bergamo, Italia" },
      ig: "@chiaroscurofilmfest",
      filmfreeway: "filmfreeway.com/chiaroscurofilmfest",
    },
    footer: {
      tagline: "Cinema breve, emergente, a Bergamo.",
      colophon: "© 2026 Chiaroscuro Film Fest — Tutti i diritti riservati.",
      legal: ["Privacy", "Cookie", "Trasparenza"],
    },
  },
  en: {
    nav: {
      festival: "Festival",
      programma: "Program",
      archivio: "2025 Edition",
      giuria: "Jury",
      iscrizioni: "Submit",
      partner: "Partners",
      contatti: "Contact",
    },
    ticker: [
      "Third Edition",
      "September 28 — 30, 2026",
      "Cinema Conca Verde · Bergamo",
      "Submissions open on FilmFreeway",
      "Bold stories. Fresh perspectives.",
    ],
    hero: {
      eyebrow: "International Film Festival",
      title_a: "28·29·30",
      title_b: "September",
      title_year: "2026",
      countdown_label: "Countdown",
      city: "Bergamo, IT",
      venue: "Cinema Conca Verde",
      edition: "Third Edition",
      headline_b: "Films that take a stand.",
      sub_b: "Emerging directors from 35 countries. Three evenings at Cinema Conca Verde, Bergamo.",
      chiaro_text_dark: "Light.",
      chiaro_text_light: "Shadow.",
      chiaro_sub: "Move the mouse to focus.",
      cta_submit: "Submit your short",
      cta_program: "See the program",
    },
    about: {
      eyebrow: "Manifesto",
      title: "The short film as necessity.",
      lede: "Chiaroscuro is an international short film festival based in Bergamo, Lombardy.\nSince 2024 it has brought independent cinema from around the world to Italy — narrative, documentary, experimental — in dialogue with audiences and the industry.\n",
      items: [
        { n: "01", h: "The duality of chiaroscuro", p: "Inspired by Caravaggio: light and shadow as a metaphor for cinema and our times." },
        { n: "02", h: "Emerging voices", p: "We focus on young, independent, international authors — with an honest gaze on reality." },
        { n: "03", h: "Community & territory", p: "Independent by choice. No commercial pressure, no compromise on selection." },
      ],
    },
    submit: {
      eyebrow: "Submissions 2026",
      title: "Bring your short film to Bergamo.",
      lede: "Submissions for the third edition are now open on FilmFreeway. We accept fiction, documentary and animation up to 15 minutes.",
      categories: [
        { k: "BEST INTERNATIONAL", v: "Shorts from across the world" },
        { k: "BEST ITALIAN", v: "Italy's next generation" },
        { k: "BEST DOCUMENTARY", v: "Brief, radical glimpses of the real" },
        { k: "BEST ANIMATION", v: "Languages and techniques of animation" },
      ],
      deadlines: [
        { k: "Early bird", v: "March 31, 2026" },
        { k: "Regular",   v: "June 30, 2026" },
        { k: "Late",      v: "July 31, 2026" },
        { k: "Notification", v: "September 2026" },
      ],
      cta: "Submit on FilmFreeway",
    },
    stats: {
      eyebrow: "II Edition · 2025",
      title: "The festival in numbers.",
      items: [
        { n: "250+", l: "Submissions" },
        { n: "35",   l: "Countries" },
        { n: "25",   l: "Films screened" },
      ],
    },
    winners: {
      eyebrow: "2025 Winners",
      title: "The four main awards.",
      lede: "The competition-category awards, selected by a jury of directors, writers, actors and producers. The full palmarès — craft and special awards — is in the archive.",
      items: [
        {
          award: "Best International", title: "The Steak",
          director: "Kiarash Dadgar", country: "Canada / Iran", year: "2024",
          poster: "assets/posters/the-steak.jpg",
          synopsis: "A birthday party preparation is thrown into chaos by an awful event."
        },
        {
          award: "Best Italian", title: "Padre",
          director: "Michele Gallone", country: "Italy", year: "2024",
          poster: "assets/posters/padre.jpg",
          synopsis: "In the near future, emotions are for sale. Francesco sold his love for his daughter Anna — a painful choice he made only because her terminal illness left him no alternative. Mario, driven by an ambiguous spirit of sacrifice, pays the highest price a father can feel."
        },
        {
          award: "Best Documentary", title: "A Short Sea",
          director: "Matteo Gamannossi & Riccardo Cocumarolo", country: "Italy", year: "2024",
          poster: "assets/posters/il-mare-breve.jpg",
          synopsis: "Since he was young, like his grandfather and father before him, Hans Petur has lived in total isolation as the lighthouse keeper of Akraberg — one of the most remote rocks in Europe, in the Faroe Islands. On his final night of wind and emptiness, he must decide whether retirement is truly a reward, or if what he longs for is nothing more than the adventure of that perfect, timeless solitude."
        },
        {
          award: "Best Animation", title: "Playing God",
          director: "Matteo Burani", country: "Italy", year: "2024",
          poster: "assets/posters/playing-god.jpg",
          synopsis: "A clay sculpture comes to life in the darkness of a laboratory, surrounded by mysterious creatures…"
        },
      ],
      cta: "See all the awards",
    },
    jury: {
      eyebrow: "2026 Jury",
      title: "International, intimate, demanding.",
      items: [
        {
          name: "Alessio Boni",
          role: "Jury President · Actor",
          bio: "One of the most recognisable Italian performers of his generation. He has worked with Marco Tullio Giordana, Ferzan Özpetek and Cristina Comencini across film, theatre and television.\n",
          portrait: "assets/jury/alessio-boni.webp",
        },
        {
          name: "Hilary Tiscione",
          role: "Writer, critic, director",
          bio: "Writer, critic and coordinator of the Screenwriting Master at IULM University. In 2025 she directed the documentary Cannibali.",
          portrait: "assets/jury/hilary-tiscione.jpg",
        },
        {
          name: "Erika Ponti",
          role: "Producer · Oki Doki Film",
          bio: "Founder & CEO of Oki Doki Film. Producer and former Artistic Director of a short film festival.",
          portrait: "assets/jury/erika-ponti.webp",
        },
        {
          name: "Daniele Pini",
          role: "Director, screenwriter",
          bio: "Director and screenwriter. Founder of Nikada Film, producing TV commercials and music videos; his shorts have won awards at numerous festivals. In 2020 he made his feature debut with the documentary Impressionisti Segreti, produced by Sky Arte.",
          portrait: "assets/jury/daniele-pini.png",
        },
      ],
    },
    jury2025: {
      eyebrow: "2025 Jury",
      title: "The second edition jury.",
      items: [
        { name: "Elettra Canovi",  role: "President · Director of Scripted Content, HBO Max Italy" },
        { name: "Giorgio Marchesi", role: "Film, theatre and TV actor" },
        { name: "Hilary Tiscione",  role: "Writer · Screenwriting Master coordinator, IULM" },
        { name: "Beppe Manzi",      role: "Director, screenwriter · Founder, Oki Doki Film" },
      ],
    },
    guests: {
      eyebrow: "2025 Guests",
      title: "The voices that crossed the festival.",
      items: [
        { name: "Naja Phạm Lockwood", role: "US Director · Sundance 2025",                       portrait: "assets/guests/naja.jpg"      },
        { name: "Giuseppe Carrieri",  role: "Director, IULM · David di Donatello nominee",         portrait: "assets/guests/carrieri.jpg"  },
        { name: "Beppe Tufarulo",     role: "Director · Sky Arte, Amazon Prime",                   portrait: "assets/guests/tufarulo.jpg"  },
        { name: "Elettra Canovi",    role: "Director of Local Original Productions · HBO Max Italy", portrait: "assets/guests/canovi.jpg" },
      ],
    },
    incontra: {
      eyebrow: "Original format",
      title: "Chiaroscuro Incontra.",
      lede: "Conversations with directors and guests during the festival evenings at Cinema Conca Verde. Film, career, language, vision.",
      past: ["Zingaretti", "Mastandrea", "Sorrentino", "Aureliano Amadei", "Laura Samani", "Naja Phạm Lockwood"],
      cta: "Watch the reels on Instagram",
    },
    press: {
      eyebrow: "Press",
      title: "What they wrote.",
      items: [
        {
          pub: "Elle",
          date: "12.2025",
          headline: "Le vite degli altri al Chiaroscuro Film Fest",
          blurb: "Elle on the Bergamo short-film festival and the emerging authors it brings to the screen.",
          url: "https://www.elle.com/it/showbiz/cinema/a67885649/chiaroscuro-film-fest-festival-cortometraggi-bergamo/",
        },
        {
          pub: "Bergamo News",
          date: "18.12.2025",
          headline: "Two shorts premiered in Bergamo make the 2026 Oscars race",
          blurb: "Documentary short \"On Healing Land, Birds Perch\" had its European premiere at Chiaroscuro Film Fest.",
          url: "https://www.bergamonews.it/2025/12/18/due-corti-premiati-a-bergamo-nella-corsa-agli-oscar-2026/855612/",
        },
        {
          pub: "Bergamo News",
          date: "02.10.2025",
          headline: "The Bergamo festival putting emerging voices in focus",
          blurb: "Over 300 attendees, 35 countries and an international jury for the second edition of Chiaroscuro Film Fest.",
        },
        {
          pub: "Corriere della Sera",
          date: "25.09.2024",
          headline: "«Chiaroscuro»: the new short-film festival paying homage to Caravaggio",
          blurb: "Spazio Polaresco hosts the first edition of the international short-film festival honouring Bergamo and Caravaggio.",
          url: "https://bergamo.corriere.it/notizie/cultura-e-spettacoli/24_settembre_25/spazio-polaresco-chiaroscuro-il-nuovo-festival-dei-cortometraggi-in-omaggio-a-caravaggio-52392690-7ed0-4e3b-99d5-10102a686xlk.shtml",
        },
      ],
    },
    partners: {
      eyebrow: "Partners",
      title: "A network of culture, cinema, territory.",
      items: [
        { name: "Cinema Conca Verde",       role: "Official venue" },
        { name: "Alpha Charlie Production", role: "Production house partner" },
        { name: "Mandelli Arte",            role: "Artistic collaboration" },
        { name: "Edizioni Pulcinoelefante", role: "2025 Special Award" },
      ],
      become: "Become a partner",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk.",
      email: "chiaroscurofilmfest@gmail.com",
      director: { role: "Artistic Direction", name: "Lorenzo Bombara", phone: "+39 331 9513670" },
      producer: { role: "Production",         name: "Pietro Cestari",  phone: "+39 366 4946327" },
      city:     { role: "Venue",              name: "Cinema Conca Verde", line: "Bergamo, Italy" },
      ig: "@chiaroscurofilmfest",
      filmfreeway: "filmfreeway.com/chiaroscurofilmfest",
    },
    footer: {
      tagline: "Short film, independent, Bergamo.",
      colophon: "© 2026 Chiaroscuro Film Fest — All rights reserved.",
      legal: ["Privacy", "Cookies", "Transparency"],
    },
  },
};

// Programme data — II Edition 2025 (the 2026 schedule is not yet defined).
const PROGRAM = {
  days: [
    { id: "d1", label: { it: "Lun 29 Set", en: "Mon Sep 29" }, full: { it: "Lunedì 29 Settembre 2025", en: "Monday, September 29, 2025" } },
    { id: "d2", label: { it: "Mar 30 Set", en: "Tue Sep 30" }, full: { it: "Martedì 30 Settembre 2025", en: "Tuesday, September 30, 2025" } },
    { id: "d3", label: { it: "Mer 1 Ott", en: "Wed Oct 1" }, full: { it: "Mercoledì 1 Ottobre 2025", en: "Wednesday, October 1, 2025" } },
  ],
  categories: {
    it: { all: "Tutto", screening: "Proiezione", talk: "Incontro", award: "Premiazione" },
    en: { all: "All",    screening: "Screening", talk: "Talk",      award: "Awards"      },
  },
  slots: [
    // Day 1 — Lunedì 29 Settembre
    { day: "d1", time: "18:00", cat: "screening", name_it: "Blocco di proiezioni · concorso", name_en: "Screening block · competition", meta_it: "Cortometraggi in concorso · 18:00–19:00", meta_en: "Shorts in competition · 6:00–7:00 PM" },
    { day: "d1", time: "19:00", cat: "talk",      name_it: "Proiezione speciale · Le faremo sapere", name_en: "Special screening · Le faremo sapere", meta_it: "Con il regista Beppe Tufarulo, il protagonista Marchesi e il produttore Manzi", meta_en: "With director Beppe Tufarulo, lead actor Marchesi and producer Manzi" },
    { day: "d1", time: "21:00", cat: "screening", name_it: "Blocco di proiezioni · concorso", name_en: "Screening block · competition", meta_it: "Cortometraggi in concorso · 21:00–23:00", meta_en: "Shorts in competition · 9:00–11:00 PM" },
    { day: "d1", time: "23:00", cat: "award",     name_it: "Premiazioni della serata", name_en: "Evening awards", meta_it: "Il fantasma di carta · High Tide · Oro e Contanti · L'Aînée", meta_en: "Il fantasma di carta · High Tide · Oro e Contanti · L'Aînée" },

    // Day 2 — Martedì 30 Settembre
    { day: "d2", time: "18:00", cat: "screening", name_it: "Blocco di proiezioni · concorso", name_en: "Screening block · competition", meta_it: "Cortometraggi in concorso · 18:00–20:00", meta_en: "Shorts in competition · 6:00–8:00 PM" },
    { day: "d2", time: "21:00", cat: "talk",      name_it: "Proiezione speciale · Shoes e Milk Teeth", name_en: "Special screening · Shoes & Milk Teeth", meta_it: "Il regista Giuseppe Carrieri in dialogo con Tiscione", meta_en: "Director Giuseppe Carrieri in conversation with Tiscione" },
    { day: "d2", time: "22:00", cat: "screening", name_it: "Blocco di proiezioni · concorso", name_en: "Screening block · competition", meta_it: "Cortometraggi in concorso · 22:00–23:00", meta_en: "Shorts in competition · 10:00–11:00 PM" },
    { day: "d2", time: "23:00", cat: "award",     name_it: "Premiazioni della serata", name_en: "Evening awards", meta_it: "Dreams Like Paper Boats · The Drowned · Il Criaturo Sintetico · Die letzte Wette", meta_en: "Dreams Like Paper Boats · The Drowned · Il Criaturo Sintetico · Die letzte Wette" },

    // Day 3 — Mercoledì 1 Ottobre
    { day: "d3", time: "18:00", cat: "screening", name_it: "Blocco di proiezioni · concorso", name_en: "Screening block · competition", meta_it: "Cortometraggi in concorso · 18:00–19:00", meta_en: "Shorts in competition · 6:00–7:00 PM" },
    { day: "d3", time: "19:00", cat: "talk",      name_it: "Proiezione speciale · On Healing Land, Birds Perch", name_en: "Special screening · On Healing Land, Birds Perch", meta_it: "Incontro con Naja Phạm Lockwood, intervistata da Silvia Locatelli", meta_en: "A conversation with Naja Phạm Lockwood, interviewed by Silvia Locatelli" },
    { day: "d3", time: "21:00", cat: "screening", name_it: "Blocco di proiezioni · concorso", name_en: "Screening block · competition", meta_it: "Cortometraggi in concorso · 21:00–23:00", meta_en: "Shorts in competition · 9:00–11:00 PM" },
    { day: "d3", time: "23:00", cat: "award",     name_it: "Premiazione finale · con Alberto Casiraghy", name_en: "Final awards · with Alberto Casiraghy", meta_it: "Voiceless · Il mare breve · The Distance Between Us · Padre · Playing God · The Steak", meta_en: "Voiceless · Il mare breve · The Distance Between Us · Padre · Playing God · The Steak" },
  ],
};

// 2025 archive — winners + finalists
const ARCHIVE_2025 = {
  winners: [
    { award: "Best International", title: "The Steak",     director: "Kiarash Dadgar",                     country: "Canada / Iran", year: "2024", runtime: "14′", poster: "assets/posters/the-steak.jpg" },
    { award: "Best Italian",       title: "Padre",         director: "Michele Gallone",                    country: "Italia",        year: "2024", runtime: "16′", poster: "assets/posters/padre.jpg" },
    { award: "Best Documentary",   title: "Il mare breve", director: "Matteo Gamannossi & Riccardo Cocumarolo", country: "Italia",    year: "2024", runtime: "22′", poster: "assets/posters/il-mare-breve.jpg" },
    { award: "Best Animation",     title: "Playing God",   director: "Matteo Burani",                      country: "Italia",        year: "2024", runtime: "8′",  poster: "assets/posters/playing-god.jpg"  },
  ],
  // Full 2025 palmarès — craft & special awards (in addition to the four main
  // competition awards above). recipient = person honoured when applicable.
  awards: [
    { award_it: "Chiaroscuro Award",                award_en: "Chiaroscuro Award",          title: "The Distance Between Us", director: "Léo Fontaine",                country: "Francia",  recipient: "" },
    { award_it: "Miglior Fotografia",               award_en: "Best Cinematography",        title: "Dreams Like Paper Boats", director: "Samuel Suffren",              country: "Haiti",    recipient: "" },
    { award_it: "Miglior Montaggio\n& Sceneggiatura", award_en: "Best Editing & Screenplay", title: "High Tide", director: "Noha Choukrallah", country: "Francia", recipient: "Nicolas Bier · Noha Choukrallah" },
    { award_it: "Miglior Suono",                    award_en: "Best Sound",                 title: "Voiceless",               director: "Samuel Patthey",              country: "Svizzera", recipient: "Thomas Gassmann" },
    { award_it: "Miglior Scenografia",              award_en: "Best Production Design",     title: "Il Criaturo Sintetico",   director: "Sarah Narducci",              country: "Italia",   recipient: "Gian Lorenzo Casadio & Vanessa Bondesani" },
    { award_it: "Miglior Film Sperimentale",        award_en: "Best Experimental",          title: "The Drowned",             director: "Davide Negri & Alessandro Reato", country: "Italia", recipient: "" },
    { award_it: "Miglior Attrice",                  award_en: "Best Performance",           title: "L'Aînée",                 director: "Alma Jodorowsky",             country: "Francia",  recipient: "Betty Pierucci-Berthoud" },
    { award_it: "Miglior Attore",                   award_en: "Best Male Performance",      title: "Oro e Contanti",          director: "Luca Buzzi Reschini",         country: "Italia",   recipient: "Andrea Fuorto, Davide Iachini & Federico Mainardi" },
    { award_it: "Miglior Student Film",         award_en: "Best Student Film",          title: "Die letzte Wette",        director: "Meike Wüstenberg",            country: "Austria",  recipient: "" },
    { award_it: "Menzione Speciale",                award_en: "Special Mention",            title: "Il fantasma di carta",    director: "Fulvio Davide Ricca",         country: "Italia",   recipient: "" },
  ],
  fuoriConcorso: [
    { title: "Le Faremo Sapere", director: "Beppe Tufarulo",    note_it: "Fuori concorso · ospite",          note_en: "Out of competition · guest" },
    { title: "Shoes",             director: "Giuseppe Carrieri", note_it: "Fuori concorso · ospite",          note_en: "Out of competition · guest" },
    { title: "Milk Teeth",        director: "Giuseppe Carrieri", note_it: "Fuori concorso · ospite",          note_en: "Out of competition · guest" },
    { title: "On Healing Land, Birds Perch", director: "Naja Phạm Lockwood", note_it: "Anteprima europea", note_en: "European premiere" },
  ],
};

window.COPY = COPY;
window.PROGRAM = PROGRAM;
window.ARCHIVE_2025 = ARCHIVE_2025;
