export const bindHoverEventsToTracks = () => {
  document.querySelectorAll("#riga").forEach((riga) => {
    riga.addEventListener("mouseenter", () => {
      riga.querySelectorAll(".icone").forEach(i => i.style.opacity = "1");
    });
    riga.addEventListener("mouseleave", () => {
      riga.querySelectorAll(".icone").forEach(i => i.style.opacity = "0");
    });
  });
};
