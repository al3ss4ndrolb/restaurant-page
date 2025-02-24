import RestaurantImage from "./images/restaurant-image.jpg";

export function createHomepage() {
  const homepage = document.createElement("div");
  homepage.classList.add("homepage");

  // Hero Section
  const hero = document.createElement("section");
  hero.classList.add("hero");

  const heroContent = document.createElement("div");
  heroContent.classList.add("hero-content");

  const mainTitle = document.createElement("h1");
  mainTitle.textContent = "L'Étoile";

  const heroText = document.createElement("p");
  heroText.textContent =
    "A culinary journey through contemporary French cuisine";

  const reserveBtn = document.createElement("a");
  reserveBtn.href = "#";
  reserveBtn.classList.add("btn");
  reserveBtn.textContent = "Reserve a Table";

  heroContent.appendChild(mainTitle);
  heroContent.appendChild(heroText);
  heroContent.appendChild(reserveBtn);
  hero.appendChild(heroContent);
  homepage.appendChild(hero);

  // About Section
  const about = document.createElement("section");
  about.classList.add("about-section");

  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("container", "about-grid");

  const aboutContent = document.createElement("div");
  aboutContent.classList.add("about-content");

  const aboutTitle = document.createElement("h2");
  aboutTitle.textContent = "Our Story";

  const aboutText = document.createElement("p");
  aboutText.textContent =
    "At L'Étoile, we believe in creating unforgettable dining experiences. Our executive chef combines traditional French techniques with modern innovation to create dishes that are both familiar and surprising.";

  aboutContent.appendChild(aboutTitle);
  aboutContent.appendChild(aboutText);

  const aboutImage = document.createElement("img");
  aboutImage.src = "./images/restaurant-image.jpg";
  aboutImage.alt = "L'Étoile interior";
  aboutImage.classList.add("about-image");

  aboutContainer.appendChild(aboutContent);
  aboutContainer.appendChild(aboutImage);
  about.appendChild(aboutContainer);
  homepage.appendChild(about);

  // Features Section
  const features = document.createElement("section");
  features.classList.add("features", "container");

  const featureItems = [
    {
      icon: "fa-solid fa-star",
      title: "Michelin Starred",
      text: "Recognized for exceptional cuisine",
    },
    {
      icon: "fa-solid fa-wine-glass",
      title: "Fine Wines",
      text: "Curated selection of rare vintages",
    },
    {
      icon: "fa-solid fa-utensils",
      title: "Seasonal Menu",
      text: "Fresh, local ingredients",
    },
  ];

  featureItems.forEach((item) => {
    const featureItem = document.createElement("div");
    featureItem.classList.add("feature-item");

    const icon = document.createElement("i");
    icon.className = item.icon;

    const title = document.createElement("h3");
    title.textContent = item.title;

    const text = document.createElement("p");
    text.textContent = item.text;

    featureItem.appendChild(icon);
    featureItem.appendChild(title);
    featureItem.appendChild(text);
    features.appendChild(featureItem);
  });

  homepage.appendChild(features);

  return homepage;
}
