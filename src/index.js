import "./styles/main.css";
import "./styles/homepage.css";
import "./styles/menu.css";
import "./styles/contact.css";

import { createHomepage } from "./homepage";
import { createMenu } from "./menu";
import { createContact } from "./contact";
import { createFooter } from "./footer";

const contentDiv = document.getElementById("content");
const footerDiv = document.getElementById("footer");

// Initialize with homepage
contentDiv.appendChild(createHomepage());

// Add footer
footerDiv.appendChild(createFooter());

const navbar = document.getElementById("nav-bar");
const buttons = navbar.querySelectorAll("button");

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
