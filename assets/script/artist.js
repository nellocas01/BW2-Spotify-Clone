import { getArtistById, getArtistTopTracks } from "./api.js";
import { createCardArtist, createLike, createSongArtist } from "./domUtils.js";
import { bindHoverEventsToTracks } from "./events.js";
import {
  bindAudioEvents,
  getAudioElement,
  togglePlayPause,
  updateVolumeIcon,
} from "./player.js";

const params = new URLSearchParams(window.location.search);
const artistId = params.get("id");

// Render functions
export const renderArtist = (artist) => {
  // Header
  const fansFormatted = artist.nb_fan.toLocaleString();
  createCardArtist(artist.name, artist.picture_xl, fansFormatted);
  createLike(artist.picture_medium, artist.name);
};

export const renderTopTracks = (tracks) => {
  const container = document.querySelector("#tracks");
  container.innerHTML = "";

  tracks.forEach((track, index) => {
    const plays = track.rank.toLocaleString();
    const min = Math.floor(track.duration / 60);
    const sec = track.duration % 60;

    createSongArtist(
      track.title_short,
      track.album.cover_small,
      plays,
      min,
      sec,
      track.artist.id,
      track.artist.name,
      track.preview
    );
  });

  // Hover icons
  bindHoverEventsToTracks();
};

// Fetch & init
window.onload = async () => {
  try {
    const artist = await getArtistById(artistId);
    renderArtist(artist);
    console.log(artist);

    // const top = await getArtistTopTracks(artistId);
    // renderTopTracks(top.data || []);
  } catch (err) {
    console.error("Errore caricamento artista o tracce:", err);
  }
};

// Gestione player UI
document.querySelector(".form-range").addEventListener("input", (e) => {
  updateVolumeIcon(e.target.value, document.querySelector("#icona-volume"));
});

document.querySelector("#icona-volume").addEventListener("click", () => {
  getAudioElement().volume = 0;
  document.querySelector("#icona-volume").className =
    "bi bi-volume-mute text-light fs-2 iconePlayer";
});

document.querySelector(".iconaPlay").addEventListener("click", () => {
  togglePlayPause(document.querySelector(".iconaPlay"));
});

bindAudioEvents(
  document.querySelector(".progress-bar"),
  document.querySelector(".iconaPlay")
);
