# Spotify Clone

Questo progetto è una riproduzione parziale di Spotify realizzata con HTML, CSS e JavaScript. L’obiettivo è creare un’interfaccia dinamica che mostri album, artisti e tracce, integrando le API pubbliche di Deezer per la parte dati. È stato sviluppato come esercizio pratico per consolidare competenze su fetch API, manipolazione DOM, gestione dinamica delle pagine tramite query string e responsive design.

---

## 🎯 Obiettivi del progetto

- Riprodurre l’interfaccia base di Spotify, rispettando stile e UI.
- Organizzare il CSS con classi riutilizzabili per uniformare il progetto.
- Creare pagine dinamiche uniche (`album.html` e `artist.html`) popolate tramite ID passati nell’URL.
- Implementare un player fisso in basso che aggiorna i dettagli della traccia selezionata.
- Aggiungere una funzione di ricerca dinamica per album, artisti e tracce tramite API Deezer.
- Garantire un layout responsive e accessibile da desktop e mobile.

---

## ✅ Funzionalità implementate

- Homepage con lista di album popolata dinamicamente tramite API.
- Pagina album dinamica: carica i dati dell’album selezionato usando `URLSearchParams`.
- Pagina artista dinamica: mostra le informazioni e tracce di un artista selezionato.
- Player bottom fixed che mostra titolo e artista della traccia selezionata.
- Funzione ricerca con chiamate API dedicate per query dinamiche.
- Navigazione fluida tra pagine usando parametri URL.
- Design responsive e coerente con i mockup forniti.

---

## 🛠️ Tecnologie utilizzate

- HTML5 e CSS3 (Flexbox, Grid, Media Queries)
- JavaScript (Fetch API, manipolazione DOM, event handling)
- Bootstrap come framework JS
- API Deezer (endpoint pubblici per album, artisti e ricerca)
- Organizzazione modulare dei file CSS e JS
- Utilizzo di URLSearchParams per gestione dinamica dei parametri in URL

---

## 📁 Struttura del progetto

/assets
├── /css
│ ├── home.css
│ ├── album.css
│ ├── artist.css
│ └── circular-fonts.css
├── /fonts # Font utilizzati
├── /imgs # Mockup e immagini
├── /partials # Frammenti HTML comuni (sidebar, player, ecc.)
│ ├── dxside.html
│ ├── sxside.html
│ └── player.html
├── /script
│ ├── api.js # Centralizza chiamate API Deezer
│ ├── home.js
│ ├── album.js
│ ├── artist.js
│ └── login.js
├── index.html # Homepage
├── album.html # Pagina album dinamica
├── artist.html # Pagina artista dinamica
└── login.html # (opzionale)


---

## 📱 Responsività

Il progetto è stato sviluppato per adattarsi a:

- ✅ Desktop
- ✅ Tablet
- ✅ Mobile

Sono stati utilizzati media queries e layout flessibili per garantire una buona esperienza su diversi dispositivi.

---

## 🔧 Come eseguire il progetto

Clona il repository:

```bash
git clone https://github.com/tuo-utente/nome-repo.git
```

Apri index.html nel browser o usa un server locale (es. Live Server di VS Code) per visualizzare l’app.

## 👨‍💻 Autore
[Aniello Casolla] — [27/03/2023]

Progetto realizzato durante esercitazione pratica per approfondire sviluppo frontend dinamico, API integration e responsive design.
