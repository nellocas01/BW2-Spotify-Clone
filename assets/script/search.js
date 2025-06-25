const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q";

// const spinner = document.getElementById("spinner");
const container = document.getElementById("search-details");

let i = 1;
export async function fetchSearch(query) {
  try {
    container.innerHTML = ""; // Pulisci il contenitore prima di riempirlo

    const response = await fetch(`${url}=${query}`);
    const data = await response.json();
    const tracks = data.data;

    if (tracks.length === 0) {
      container.innerHTML = `<p>Nessun risultato trovato per "${query}".</p>`;
      return;
    }

    tracks.forEach((track) => {
      const div = document.createElement("div");
      div.className =
        "row mb-2 justify-content-between gap-3 justify-content-lg-start align-items-center p-1 rounded-2 position-relative text-white";
      div.id = "riga";
      div.style.cursor = "pointer";

      const duration = track.duration;
      const min = Math.floor(duration / 60);
      const sec = String(duration % 60).padStart(2, "0");

      div.innerHTML = `
          <i id="playIcon" style="left:-5px" class="bi bi-play-fill         position-absolute d-none fs-1"></i>
          <div class="col-1 songNumber d-none d-lg-block">${i}
          <img
            src="${track.album.cover_small}"
            alt="Copertina album"
            class="img-fluid rounded me-2 d-none d-lg-block"
            style="width: 56px; height: 56px; object-fit: cover;"
          />
          </div>
          <div class="col-4">
            <a class="fs-6 fw-bold mb-0 d-block text-decoration-none        position-relative text-light" href="#">
              ${track.title}
            </a>
            <small class="light-gray">
              <a class="text-decoration-none text-light" href="artist.html?id=${
                track.artist.id
              }" id="artista">
                ${track.artist.name}
              </a>
            </small>
          </div>
          <div class="col-3 text-end light-gray d-none d-lg-block">${track.rank.toLocaleString()}</div>
          <div class="col-3 text-end light-gray d-none d-lg-block">
            ${min}:${sec}
          </div>
        `;

      container.appendChild(div);
      i++;
    });
  } catch (error) {
    console.error("Errore durante il caricamento:", error);
    container.innerHTML = `<p class="text-danger">Errore nel caricamento dei risultati</p>`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("q");
  if (query) {
    fetchSearch(query);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-input");
  const input = document.getElementById("input-search");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const query = input.value.trim();
      if (query) {
        // fetchRecenti(query);
        // Redireziona a search.html passando la query
        window.location.href = `search.html?q=${query}`;
      }
    });
  }
});
