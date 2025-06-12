const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q";

// const spinner = document.getElementById("spinner");
const container = document.getElementById("search-details");

export async function fetchSearch(query) {
  try {
    container.innerHTML = ""; // Pulisci il contenitore prima di riempirlo

    const response = await fetch(`${url}=${query}`);
    const data = await response.json();
    const tracks = data.data.slice(0, 5); // primi 5 risultati

    if (tracks.length === 0) {
      container.innerHTML = `<p>Nessun risultato trovato per "${query}".</p>`;
      return;
    }

    tracks.forEach((track) => {
      const card = document.createElement("div");
      card.className = "card bg-dark text-white mb-3";
      card.innerHTML = `
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${track.album.cover_big}" class="img-fluid rounded-start" alt="${track.title}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${track.title}</h5>
              <p class="card-text">
                Artista: <a class="text-info" href="artist.html?id=${track.artist.id}">
                  ${track.artist.name}
                </a>
              </p>
              <button class="btn btn-outline-light btn-sm" onclick="playPreview('${track.preview}')">▶️ Preview</button>
            </div>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Errore durante il caricamento:", error);
    container.innerHTML = `<p class="text-danger">Errore nel caricamento dei risultati</p>`;
  }
}

function apriCerca() {
  const form = document.getElementById("form-input");
  const input = document.getElementById("input-search");

  const isVisible = form.style.display === "block";
  form.style.display = isVisible ? "none" : "block";

  if (!isVisible) {
    input.focus(); // focus automatico appena appare
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

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (query) {
      // fetchRecenti(query);
      // Redireziona a search.html passando la query
      window.location.href = `search.html?q=${query}`;
    }
  });
});
