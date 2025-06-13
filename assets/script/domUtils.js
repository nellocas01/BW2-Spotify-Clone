// file che crea elementi DOM dinamici

// ************ALBUM************
export const createCardAlbum = (
  imgCard,
  imgArtist,
  album,
  artist,
  anno,
  brani,
  min,
  sec,
  idArtist
) => {
  const card = document.querySelector("#albumInfo");
  card.innerHTML = `<div class="row">
    <div class="col-12 col-lg-6 align-self-center pb-3 pb-lg-0">
      <img
        style="min-height: 200px; min-width: 200px"
        id="cover"
        class="img-fluid"
        src="${imgCard}"
        alt="${album}"
      />
    </div>
    <div class="col-9 col-lg-5 text-white d-flex flex-column justify-content-end align-self-center">
      <h3 id="type" class="small fw-semibold m-0">ALBUM</h3>
      <h2 id="titolo-card" class="display-1 fw-bold mb-4">${album}</h2>
      <div>
        <img
          class="img-fluid rounded-circle"
          src="${imgArtist}"
          alt="${artist}"
          width="24px"
        />
        <small class="fw-bold"><a class='text-decoration-none text-light' href='artist.html?id=${idArtist}' id='artista'>${artist}</a> &bull; ${anno} &bull; ${brani} brani,</small>
        <small>${min} min ${sec} sec.</small>
      </div>
    </div>
  </div>`;
};

let i = 1;
export const createSongAlbum = (
  title,
  artist,
  riproduzioni,
  min,
  sec,
  idArtist,
  img,
  preview
) => {
  const row = document.querySelector("#row-canzoni");
  const div = document.createElement("div");
  div.id = "riga";
  div.className =
    "row mb-2 justify-content-between gap-3 justify-content-lg-start align-items-center p-1 rounded-2 position-relative";
  div.innerHTML = `
    <i id='playIcon' style='left:-5px' class="bi bi-play-fill position-absolute d-none fs-1"></i>
    <div class="col-1 songNumber d-none d-lg-block">${i}</div>
    <div class="col-4">
      <a class="fs-6 fw-bold mb-0 d-block text-decoration-none position-relative text-light">
        ${title}
      </a>
      <small class="light-gray"><a class='text-decoration-none text-light' href='artist.html?id=${idArtist}' id='artista'>${artist}</a></small>
    </div>
    <div class="col-3 text-end light-gray d-none d-lg-block">${riproduzioni}</div>
    <div class="col-3 text-end light-gray d-none d-lg-block">
      <span style='opacity: 0' class="icone me-3"><i class="bi bi-heart"></i></span>
      ${min}:${sec}
      <span style='opacity: 0' class="icone ms-3"><i class="bi bi-three-dots"></i></span>
    </div>
    <div class="col-3 text-end light-gray d-block d-lg-none"><i class="bi bi-three-dots-vertical"></i></div>
  `;
  row.appendChild(div);
  i++;

  div.onclick = function () {
    creaCardPlayer(img, title, artist, idArtist, preview);
  };
};

export const creaCardPlayer = (img, title, artist, idArtist, preview) => {
  const col = document.querySelector("#cardPlayer");
  col.style.opacity = "1";
  col.innerHTML = `<div class="card bg-dark border-0">
  <div class="row g-0">
    <div class="col-4 col-md-4">
      <img
        src="${img}"
        style="min-height: 60px; min-width: 60px"
        class="img-fluid rounded-0"
        alt="${title}"
      />
    </div>
    <div class="col-8 col-md-8">
      <div class="card-body">
        <h6 id="titoloPlayer" class="card-title text-light text-truncate">
          <a class="text-decoration-none text-light" href="#"
            >${title}</a
          >
        </h6>
        <p id="artistaPlayer" class="card-text">
          <a class="text-decoration-none text-light text-nowrap" href="artist.html?id=${idArtist}">${artist}</a>
        </p>
      </div>
    </div>
  </div>
</div>`;

  document.querySelector(".title-player").style.opacity = "1";
  document.querySelector(".title-player").innerText = `${title}`;
  // ottieni elementi HTML del player audio

  const playBtn = document.querySelector(".iconaPlay");

  // imposta file audio da riprodurre
  audio.src = `${preview}`;
  audio.play();
  playBtn.classList.remove("bi-play-fill");
  playBtn.classList.add("bi-pause-fill");
};

// ************ARTIST************
export const createCardArtist = (artist, img, ascoltatori) => {
  const card = document.querySelector("#artistBanner");
  card.style.backgroundImage = `url("${img}")`;

  const content = document.querySelector("#artistCardContent");
  content.innerHTML = `<div class="d-flex align-items-center">
  <div class="position-relative">
    <svg
      id="verifiedIcon"
      role="img"
      height="24"
      width="24"
      aria-hidden="true"
      class="Svg-sc-ytk21e-0 kcjDTG b0NcxAbHvRbqgs2S8QDg position-relative z-2"
      viewBox="0 0 24 24"
      data-encore-id="icon"
    >
      <path
        d="M10.814.5a1.658 1.658 0 0 1 2.372 0l2.512 2.572 3.595-.043a1.658 1.658 0 0 1 1.678 1.678l-.043 3.595 2.572 2.512c.667.65.667 1.722 0 2.372l-2.572 2.512.043 3.595a1.658 1.658 0 0 1-1.678 1.678l-3.595-.043-2.512 2.572a1.658 1.658 0 0 1-2.372 0l-2.512-2.572-3.595.043a1.658 1.658 0 0 1-1.678-1.678l.043-3.595L.5 13.186a1.658 1.658 0 0 1 0-2.372l2.572-2.512-.043-3.595a1.658 1.658 0 0 1 1.678-1.678l3.595.043L10.814.5zm6.584 9.12a1 1 0 0 0-1.414-1.413l-6.011 6.01-1.894-1.893a1 1 0 0 0-1.414 1.414l3.308 3.308 7.425-7.425z"
      ></path>
    </svg>
    <span id="verifyBg"></span>
  </div>

  <p class="text-white px-2 my-0">Artista Verificato</p>
</div>
<h1 class="text-white fw-bold" style="font-size: 4rem">${artist}</h1>
<p class="text-white">${ascoltatori} ascoltatori mensili</p>
</div>
`;
};

// let i = 1;
export const createSongArtist = (
  title,
  img,
  riproduzioni,
  min,
  sec,
  idArtist,
  artist,
  preview
) => {
  const row = document.querySelector("#tracks");
  const div = document.createElement("div");
  div.id = "riga";
  div.className =
    "row mb-3 justify-content-between align-items-center justify-content-lg-start p-1 rounded-2 position-relative";

  div.innerHTML = `<i id='playIcon' style='left:10px' class="bi bi-play-fill position-absolute d-none fs-1"></i>
  <div class="col-1 text-end light-gray">${i}</div>
  <div class="col-7 col-xl-4 d-flex gap-2 align-items-center">
    <img src="${img}" alt="${title}" />
    <span>

       <a class="fs-6 fw-bold mb-0 d-block text-decoration-none position-relative text-light">
          ${title}
        </a>
      
      <small class="d-block d-xl-none light-gray">${riproduzioni}</small>
    </span>
  </div>
  <div class="col-3 d-none d-xl-block">
    <small class="light-gray">${riproduzioni}</small>
  </div>
  <div class="col-3 text-end light-gray d-none d-lg-block">
  <span style='opacity: 0' class="icone me-3"><i class="bi bi-heart"></i></span>
    ${min}:${sec}
    <span style='opacity: 0' class="icone ms-3"><i class="bi bi-three-dots"></i></span>
  </div>
  <div class="col-3 text-end light-gray d-block d-lg-none">
    <i class="bi bi-three-dots-vertical"></i>
  </div>`;

  row.appendChild(div);
  i++;

  div.onclick = function () {
    creaCardPlayer(img, title, artist, idArtist, preview);
  };
};

export const createLike = (img, artist) => {
  const col = document.querySelector("#like");
  col.innerHTML = `<h3 class="text-white fs-5 fw-bold ms-5 mb-4">Brani che ti piacciono</h3>
    <div class="d-flex ms-5">
      <div class="position-relative">
        <i class="bi bi-heart-fill position-absolute text-white end-0 bottom-0 z-2"></i>
        <img
          src="${img}"
          alt="${artist}"
          class="rounded-circle"
          height="80px"
          width="80px"
        />
        <span id="hearthBg"></span>
      </div>

      <div style="min-width: 160px" class="px-3 d-flex flex-column justify-content-center">
        <h6 class="text-white">Hai messo mi piace a 11 brani</h6>
        <p class="light-gray">Di ${artist}</p>
      </div>
    </div>`;
};
