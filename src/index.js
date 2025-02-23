import { createHomepage } from "./homepage";
import { createMenu } from "./menu";
import { createContact } from "./contact";

const homepage = createHomepage();
document.body.appendChild(homepage);

const navbar = document.getElementById("nav-bar");
const buttons = navbar.querySelectorAll("button");
const contentDiv = document.getElementById("content");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    contentDiv.innerHTML = "";

    const tabName = event.target.textContent.toLowerCase();

    if (tabName === "home") {
      contentDiv.appendChild(createHomepage());
    } else if (tabName === "menu") {
      contentDiv.appendChild(createMenu());
    } else if (tabName === "contact") {
      contentDiv.appendChild(createContact());
    }
  });
});
