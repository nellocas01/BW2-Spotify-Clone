import { creaCardPlayer } from "./domUtils.js";
import { bindHoverEventsToTracks } from "./events.js";
import {
  bindAudioEvents,
  getAudioElement,
  togglePlayPause,
  updateVolumeIcon,
} from "./player.js";

const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q";

const cardPrincipale = document.getElementById("card-principale");
const spinner = document.getElementById("spinner");

function getUserQuery(query, fallback) {
  return localStorage.getItem(query) || fallback;
}

async function fetchCardPrincipale() {
  const query = getUserQuery("userQuery1", "geolier");
  try {
    // Mostra lo spinner
    spinner.classList.remove("d-none");

    const response = await fetch(`${url}=${query}`);
    const data = await response.json();

    console.log("Dati ricevuti (principale):", data);

    const track = data.data[0]; // solo il primo brano
    cardPrincipale.innerHTML = `
        <div class="row g-0">
          <div class="col-2">
            <img
              src="${track.album.cover_medium}"
              class="img-fluid"
              alt="${track.album.title}"
            />
          </div>
          <div class="col-6">
            <div class="card-body">
              <h1 class="card-title fw-bold">${track.title}</h1>
              <a class="text-info text-decoration-none" href="artist.html?id=${track.artist.id}">
              <p class="card-text fw-bold">${track.artist.name}</p>
              </a>
              <a class="text-info text-decoration-none" id="btn-play1" style="cursor: pointer">
              <p class="card-text fw-bold">
                Ascolta il nuovo singolo di ${track.artist.name}!
              </p>
              </a>
              <div class="d-flex gap-2">
                <button
                  id="btn-play2"
                  style="background-color: #1ed760"
                  class="btn px-4 py-2 rounded-pill fw-bold"
                >
                  Play
                </button>
                <button
                  style="background-color: #2125297c"
                  class="btn px-4 py-2 rounded-pill fw-bold text-light border border-1 border-light"
                >
                  Salva
                </button>
                <button class="btn rounded-pill fw-bold text-light">
                  <i class="bi bi-three-dots text-secondary fs-3"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;

    const btnPlay1 = cardPrincipale.querySelector("#btn-play1");
    const btnPlay2 = cardPrincipale.querySelector("#btn-play2");
    btnPlay1.addEventListener("click", () => {
      creaCardPlayer(
        track.album.cover_medium,
        track.album.title,
        track.artist.name,
        track.artist.id,
        track.preview
      );
    });
    btnPlay2.addEventListener("click", () => {
      creaCardPlayer(
        track.album.cover_medium,
        track.album.title,
        track.artist.name,
        track.artist.id,
        track.preview
      );
    });

    bindHoverEventsToTracks();
  } catch (error) {
    console.error("Errore durante il caricamento:", error);
    cardPrincipale.innerHTML = `<p class="text-danger">Errore nel caricamento</p>`;
  } finally {
    // Nascondi lo spinner
    spinner.classList.add("d-none");
  }
}

const cardPlaylist = document.getElementById("card-playlist");

async function fetchCardPlaylist() {
  const query = getUserQuery("userQuery1", "geolier");
  try {
    // Mostra lo spinner
    spinner.classList.remove("d-none");

    const response = await fetch(`${url}=${query}`);
    const data = await response.json();

    console.log("Dati ricevuti:", data);

    const songs = data.data.slice(1, 7);
    cardPlaylist.innerHTML = "";

    songs.forEach((track) => {
      const card = document.createElement("div");
      card.class = "col";
      card.innerHTML = `    
        <div
          style="background-color: #363636"
          class="card mb-3 border-0 text-light rounded-2"
        >
          <div class="row g-0">
            <div class="col-md-2">
              <img
                style="min-height: 70px; min-width: 70px"
                src="${track.album.cover_medium}"
                class="img-fluid rounded-start"
                alt="${track.album.title}"
              />
            </div>
            <div class="col-md-10">
              <div class="card-body">
                 <h6 class="card-title mb-0">${track.title}</h6>
                 <p class="card-text"><small>${track.artist.name}</small></p>
              </div>
            </div>
          </div>
        </div>
      `;

      cardPlaylist.appendChild(card);

      cardPlaylist.onclick = function () {
        creaCardPlayer(
          track.album.cover_medium,
          track.album.title,
          track.artist.name,
          track.artist.id,
          track.preview
        );
      };

      bindHoverEventsToTracks();
    });
  } catch (error) {
    console.error("Errore durante il caricamento:", error);
    cardPrincipale.innerHTML = `<p class="text-danger">Errore nel caricamento</p>`;
  } finally {
    // Nascondi lo spinner
    spinner.classList.add("d-none");
  }
}

async function fetchCards2() {
  const query = getUserQuery("userQuery2", "Salmo");
  try {
    // Mostra lo spinner
    spinner.classList.remove("d-none");

    const response = await fetch(`${url}=${query}`);

    const data = await response.json();
    const tracks = data.data.slice(0, 4); // primi 4 brani

    const container = document.getElementById("cards2");
    container.innerHTML = ""; // pulizia iniziale

    tracks.forEach((track) => {
      const col = document.createElement("div");
      col.className = "col";

      col.innerHTML = `    
        <div
              style="background-color: #171717"
              class="card border-0 text-light"
            >
              <div class="px-4 pt-4 pb-1 rounded-3">
                <img
                src="${track.album.cover_medium}"
                  class="card-img img-fluid"
                  alt="${track.album.title}
                />
              </div>
              <div class="card-body px-4">
                <h5 class="card-title fs-5">${track.title}</h5>
                <p class="card-text text-secondary">${track.artist.name}</p>
              </div>
            </div>
      `;

      // evento click
      col.firstElementChild.addEventListener("click", () => {
        window.location.href = `album.html?id=${track.album.id}`;
      });

      container.appendChild(col);
    });
  } catch (error) {
    console.error("Errore durante il caricamento:", error);
    cardPrincipale.innerHTML = `<p class="text-danger">Errore nel caricamento</p>`;
  } finally {
    // Nascondi lo spinner
    spinner.classList.add("d-none");
  }
}

async function fetchRecenti() {
  const query = getUserQuery("userQuery3", "eminem");
  try {
    // Mostra lo spinner
    spinner.classList.remove("d-none");

    const response = await fetch(`${url}=${query}`);

    const data = await response.json();
    const tracks = data.data.slice(0, 4); // primi 4 brani

    const container = document.getElementById("recenti");
    container.innerHTML = ""; // pulizia iniziale

    tracks.forEach((track) => {
      const col = document.createElement("div");
      col.className = "col";

      // Crea il markup della card
      col.innerHTML = `    
    <div
      class="card border-0 text-light"
      style="background-color: #171717; cursor: pointer"
    >
      <div class="px-4 pt-4 pb-1 rounded-3">
        <img
          src="${track.album.cover_medium}"
          class="card-img img-fluid"
          alt="${track.album.title}"
        />
      </div>
      <div class="card-body px-4">
        <h5 class="card-title fs-5">${track.title}</h5>
        <p class="card-text text-secondary">${track.artist.name}</p>
      </div>
    </div>
  `;

      // evento click
      col.firstElementChild.addEventListener("click", () => {
        window.location.href = `album.html?id=${track.album.id}`;
      });

      container.appendChild(col);
    });
  } catch (error) {
    console.error("Errore durante il caricamento:", error);
    cardPrincipale.innerHTML = `<p class="text-danger">Errore nel caricamento</p>`;
  } finally {
    // Nascondi lo spinner
    spinner.classList.add("d-none");
  }
}

// Gestione player UI
document.querySelector(".form-range")?.addEventListener("input", (e) => {
  updateVolumeIcon(e.target.value, document.querySelector("#icona-volume"));
});

document.querySelector("#icona-volume")?.addEventListener("click", () => {
  getAudioElement().volume = 0;
  document.querySelector("#icona-volume").className =
    "bi bi-volume-mute text-light fs-2 iconePlayer";
});

document.querySelector(".iconaPlay")?.addEventListener("click", () => {
  togglePlayPause(document.querySelector(".iconaPlay"));
});

bindAudioEvents(
  document.querySelector(".progress-bar"),
  document.querySelector(".iconaPlay")
);

fetchCardPrincipale();
fetchCardPlaylist();
fetchCards2();
fetchRecenti();
