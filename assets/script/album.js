import { getAlbumById } from "./api.js";
import { createCardAlbum, createSongAlbum } from "./domUtils.js";
import { bindHoverEventsToTracks } from "./events.js";
import {
  bindAudioEvents,
  getAudioElement,
  togglePlayPause,
  updateVolumeIcon,
} from "./player.js";

const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get("id");

window.onload = async () => {
  try {
    const album = await getAlbumById(id);
    renderAlbum(album);
    // console.log(album);
  } catch (err) {
    console.error("Errore nel caricamento dell'album:", err);
  }
};

export const renderAlbum = (album) => {
  const row = document.querySelector("#row-canzoni");
  row.innerHTML = "";
  const release_date = album.release_date;
  const year = new Date(release_date).getFullYear();
  const durata = album.duration;
  const minuti = Math.floor(durata / 60);
  const secondi = durata % 60;

  createCardAlbum(
    album.cover_big,
    album.artist.picture_small,
    album.title,
    album.artist.name,
    year,
    album.nb_tracks,
    minuti,
    secondi,
    album.artist.id
  );

  const arrayCanzoni = album.tracks.data;
  for (const canzone of arrayCanzoni) {
    const rank = canzone.rank;
    const riproduzioni = rank.toLocaleString(undefined, {
      minimumFractionDigits: 0,
    });
    const durations = canzone.duration;
    const min = Math.floor(durations / 60);
    const sec = durations % 60;

    createSongAlbum(
      canzone.title,
      canzone.artist.name,
      riproduzioni,
      min,
      sec,
      canzone.artist.id,
      canzone.album.cover_medium,
      canzone.preview
    );
  }

  bindHoverEventsToTracks();
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
