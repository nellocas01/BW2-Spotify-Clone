const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q";

const cardPrincipale = document.getElementById("card-principale");
const spinner = document.getElementById("spinner");

async function fetchCardPrincipale(query = "geolier") {
  try {
    // Mostra lo spinner
    spinner.classList.remove("d-none");

    const response = await fetch(`${url}=${query}`);
    const data = await response.json();

    console.log("Dati ricevuti (principale):", data);

    const track = data.data[7]; // solo il primo brano
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
              <h6 class="card-title fw-bold">ALBUM</h6>
              <h1 class="card-title fw-bold">${track.title}</h1>
              <p class="card-text fw-bold">${track.artist.name}</p>
              <p class="card-text fw-bold">
                Ascolta il nuovo singolo di ${track.artist.name}!
              </p>
              <div class="d-flex gap-2">
                <button
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
  } catch (error) {
    console.error("Errore durante il caricamento:", error);
    cardPrincipale.innerHTML = `<p class="text-danger">Errore nel caricamento</p>`;
  } finally {
    // Nascondi lo spinner
    spinner.classList.add("d-none");
  }
}

const cardPlaylist = document.getElementById("card-playlist");

async function fetchCardPlaylist(query = "geolier") {
  try {
    // Mostra lo spinner
    spinner.classList.remove("d-none");

    const response = await fetch(`${url}=${query}`);
    const data = await response.json();

    console.log("Dati ricevuti:", data);

    const songs = data.data.slice(0, 6);
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
    });
  } catch (error) {
    console.error("Errore durante il caricamento:", error);
    cardPrincipale.innerHTML = `<p class="text-danger">Errore nel caricamento</p>`;
  } finally {
    // Nascondi lo spinner
    spinner.classList.add("d-none");
  }
}

async function fetchCards2(query = "Salmo") {
  try {
    // Mostra lo spinner
    spinner.classList.remove("d-none");

    const response = await fetch(`${url}=${query}`);

    const data = await response.json();
    const tracks = data.data.slice(0, 5); // primi 5 brani

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

async function fetchRecenti(query = "eminem") {
  try {
    // Mostra lo spinner
    spinner.classList.remove("d-none");

    const response = await fetch(`${url}=${query}`);

    const data = await response.json();
    const tracks = data.data.slice(0, 5); // primi 5 brani

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

fetchCardPrincipale();
fetchCardPlaylist();
fetchCards2();
fetchRecenti();
