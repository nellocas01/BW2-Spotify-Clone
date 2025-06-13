const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q";

// const spinner = document.getElementById("spinner");
const container = document.getElementById("search-details");

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
      const card = document.createElement("div");
      // card.className = "card bg-dark text-white mb-3";
      card.class = "col";
      card.innerHTML = `
        <div class="card mb-3 border-0 text-light rounded-2" style="background-color: #363636;">
  <div class="row g-0 align-items-center">
    <!-- Cover -->
    <div class="col-md-2 d-flex justify-content-center align-items-center">
      <img
        src="${track.album.cover_big}"
        alt="Copertina album di ${track.title}"
        class="img-fluid rounded-start"
        style="max-width: 100px;" />
    </div>
    <!-- Info Brano -->
    <div class="col-md-8">
      <div class="card-body py-2">
        <p class="card-text mb-0">
          Titolo: 
        <a class="text-info text-decoration-none" href="artist.html?id=${track.artist.id}">
        ${track.title}
        </a>
        </p>
        <p class="card-text mb-0">
          Artista: 
          <a class="text-info text-decoration-none" href="artist.html?id=${track.artist.id}">
            ${track.artist.name}
          </a>
        </p>
      </div>
    </div>
    <!-- Pulsante Preview -->
    <div class="col-md-2 d-flex justify-content-center">
      <button class="btn btn-outline-light btn-sm" onclick="playPreview('${track.preview}')">
        ▶️ Preview
      </button>
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
