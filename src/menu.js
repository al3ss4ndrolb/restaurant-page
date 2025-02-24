export function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu-page");

  // Menu Header
  const header = document.createElement("div");
  header.classList.add("menu-header");

  const headerContent = document.createElement("div");
  headerContent.classList.add("container");

  const title = document.createElement("h1");
  title.textContent = "Our Menu";

  const subtitle = document.createElement("p");
  subtitle.textContent =
    "A carefully curated selection of contemporary French cuisine";

  headerContent.appendChild(title);
  headerContent.appendChild(subtitle);
  header.appendChild(headerContent);
  menu.appendChild(header);

  // Menu Content
  const menuContent = document.createElement("div");
  menuContent.classList.add("menu-container");

  const menuSections = [
    {
      title: "Entrées",
      items: [
        {
          name: "Foie Gras au Torchon",
          price: "32",
          description: "House-made foie gras with brioche toast and fig jam",
          tags: ["Signature", "Contains Alcohol"],
          wine: "Sauternes, Château Suduiraut 2010",
        },
        {
          name: "Tartare de Thon",
          price: "28",
          description:
            "Yellowfin tuna tartare with avocado, citrus, and wasabi",
          tags: ["Raw", "Gluten-free"],
          wine: "Chablis 1er Cru, William Fèvre 2018",
        },
      ],
    },
    {
      title: "Plats Principaux",
      items: [
        {
          name: "Canard à l'Orange",
          price: "45",
          description: "Duck breast with orange sauce, roasted vegetables",
          tags: ["Signature", "Gluten-free"],
          wine: "Pinot Noir, Domaine de la Romanée-Conti 2015",
        },
        {
          name: "Homard Bleu",
          price: "65",
          description:
            "Poached blue lobster, vanilla butter sauce, seasonal vegetables",
          tags: ["Seafood", "Signature"],
          wine: "Meursault, Domaine Roulot 2017",
        },
      ],
    },
    {
      title: "Desserts",
      items: [
        {
          name: "Soufflé au Chocolat",
          price: "18",
          description: "Grand cru chocolate soufflé with vanilla ice cream",
          tags: ["Classic", "Contains Alcohol"],
          wine: "Porto Vintage, Taylor's 2003",
        },
        {
          name: "Tarte Tatin",
          price: "16",
          description: "Caramelized apple tart with Normandy cream",
          tags: ["Vegetarian"],
          wine: "Jurançon, Domaine Cauhapé 2016",
        },
      ],
    },
  ];

  menuSections.forEach((section) => {
    const menuSection = document.createElement("div");
    menuSection.classList.add("menu-section");

    const sectionTitle = document.createElement("h2");
    sectionTitle.classList.add("menu-section-title");
    sectionTitle.textContent = section.title;
    menuSection.appendChild(sectionTitle);

    const menuGrid = document.createElement("div");
    menuGrid.classList.add("menu-grid");

    section.items.forEach((item) => {
      const menuItem = document.createElement("div");
      menuItem.classList.add("menu-item");

      const itemHeader = document.createElement("div");
      itemHeader.classList.add("menu-item-header");

      const itemName = document.createElement("span");
      itemName.classList.add("menu-item-name");
      itemName.textContent = item.name;

      const itemPrice = document.createElement("span");
      itemPrice.classList.add("menu-item-price");
      itemPrice.textContent = `€${item.price}`;

      itemHeader.appendChild(itemName);
      itemHeader.appendChild(itemPrice);

      const itemDescription = document.createElement("p");
      itemDescription.classList.add("menu-item-description");
      itemDescription.textContent = item.description;

      const itemTags = document.createElement("div");
      itemTags.classList.add("menu-item-tags");
      item.tags.forEach((tag) => {
        const tagSpan = document.createElement("span");
        tagSpan.classList.add("menu-item-tag");
        tagSpan.textContent = tag;
        itemTags.appendChild(tagSpan);
      });

      const winePairing = document.createElement("p");
      winePairing.classList.add("wine-pairing");
      winePairing.innerHTML = `<i class="fa-solid fa-wine-glass"></i> ${item.wine}`;

      menuItem.appendChild(itemHeader);
      menuItem.appendChild(itemDescription);
      menuItem.appendChild(itemTags);
      menuItem.appendChild(winePairing);

      menuGrid.appendChild(menuItem);
    });

    menuSection.appendChild(menuGrid);
    menuContent.appendChild(menuSection);
  });

  menu.appendChild(menuContent);
  return menu;
}
