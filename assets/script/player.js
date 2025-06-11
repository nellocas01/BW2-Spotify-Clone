// gestione del player
const audio = new Audio();
audio.volume = 0.5;

export const getAudioElement = () => audio;

export const togglePlayPause = (btn) => {
  if (audio.paused) {
    audio.play();
    btn.classList.replace("bi-play-fill", "bi-pause-fill");
  } else {
    audio.pause();
    btn.classList.replace("bi-pause-fill", "bi-play-fill");
  }
};

export const updateVolumeIcon = (volume, icon) => {
  audio.volume = volume / 100;
  if (audio.volume === 0) {
    icon.className = "bi bi-volume-off text-light fs-2 iconePlayer";
  } else if (audio.volume < 1) {
    icon.className = "bi bi-volume-down text-light fs-2 iconePlayer";
  } else {
    icon.className = "bi bi-volume-up text-light fs-2 iconePlayer";
  }
};

export const bindAudioEvents = (progressBar, playBtn) => {
  audio.addEventListener("timeupdate", () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${percent}%`;
  });

  audio.addEventListener("ended", () => {
    playBtn.classList.replace("bi-pause-fill", "bi-play-fill");
  });
};

export const setPreviewAndPlay = (src) => {
  audio.src = src;
  audio.play();
};
