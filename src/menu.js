export function createMenu() {
  const menu = document.createElement("div");
  menu.id = "content";

  const mainTitle = document.createElement("h1");
  mainTitle.textContent = "Menu";
  menu.appendChild(mainTitle);

  return menu;
}
