export function createContact() {
  const contact = document.createElement("div");
  contact.id = "content";

  const mainTitle = document.createElement("h1");
  mainTitle.textContent = "Contact Us";
  contact.appendChild(mainTitle);

  const contactParagraph = document.createElement("p");
  contactParagraph.textContent =
    "Chef\n555-555-5554\ntotallyRealEmail@notFake.com";
  contact.appendChild(contactParagraph);

  return contact;
}
