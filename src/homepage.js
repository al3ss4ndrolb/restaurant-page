import RestaurantImage from "./images/restaurant-image.jpg";

export function createHomepage() {
  const homepage = document.createElement("div");
  homepage.id = "content";

  const mainTitle = document.createElement("h1");
  mainTitle.textContent = "Alessandro's Sandwiches";
  homepage.appendChild(mainTitle);

  const subTitle = document.createElement("h2");
  subTitle.textContent = "The best sandwiches in the world.";
  homepage.appendChild(subTitle);

  const image = document.createElement("img");
  image.src = RestaurantImage;
  image.alt = "A cozy interior of Alessandro's Sandwiches restaurant";
  homepage.appendChild(image);

  return homepage;
}
