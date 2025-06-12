import { fetchSearch } from "./search.js";
import { search } from "./sxside.js";

async function includeHTML(id, file) {
  const el = document.getElementById(id);
  if (!el) return;
  const res = await fetch(file);
  const html = await res.text();
  el.innerHTML = html;

  if (id === "sxside") {
    search({
      onSearch: (query) => {
        fetchSearch(query);
      },
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  includeHTML("sxside", "assets/partials/sxside.html");
  includeHTML("dxside", "assets/partials/dxside.html");
  includeHTML("player-container", "assets/partials/player.html");
});
