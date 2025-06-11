// file che centralizza le chiamate API
const API_BASE = "https://striveschool-api.herokuapp.com/api/deezer";

/**
 * Effettua una fetch sicura ai dati da una URL specifica
 * @param {string} url - endpoint completo
 * @returns {Promise<any>} - dati o errore
 */
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP Error ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Fetch Error:", error);
    return null;
  }
}

/**
 * Ottiene i dati di un album
 * @param {string|number} albumId
 */
export async function getAlbumById(albumId) {
  return fetchData(`${API_BASE}/album/${albumId}`);
}

/**
 * Ottiene i dati di un artista
 * @param {string|number} artistId
 */
export async function getArtistById(artistId) {
  return fetchData(`${API_BASE}/artist/${artistId}`);
}

/**
 * Effettua una ricerca
 * @param {string} query - Testo da cercare
 */
export async function searchTracks(query) {
  return fetchData(`${API_BASE}/search?q=${encodeURIComponent(query)}`);
}
