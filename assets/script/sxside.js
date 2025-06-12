export function search({ onSearch }) {
  const btnSearch = document.getElementById("showinput");
  const form = document.getElementById("form-input");
  const input = document.getElementById("input-search");

  if (!btnSearch || !form || !input) {
    console.warn("Elementi sidebar non trovati");
    return;
  }

  btnSearch.addEventListener("click", () => {
    const isVisible = form.style.display === "block";
    form.style.display = isVisible ? "none" : "block";
    if (!isVisible) input.focus();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (query && typeof onSearch === "function") {
      onSearch(query);
    }
  });
}
