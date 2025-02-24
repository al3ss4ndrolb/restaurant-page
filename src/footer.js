export function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("site-footer");

  const container = document.createElement("div");
  container.classList.add("container");

  const content = document.createElement("p");
  content.classList.add("footer-content");
  content.innerHTML = `Made with <i class="fa-solid fa-heart"></i> by <a href="https://github.com/al3ss4ndrolb" target="_blank" rel="noopener noreferrer">al3ss4ndrolb</a>`;

  container.appendChild(content);
  footer.appendChild(container);

  return footer;
}
