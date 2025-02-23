export function Contact() {
  contact = document.createElement("div");
  contact.id = "content";

  const mainTitle = document.createElement("h1");
  mainTitle.textContent("Contact Us");
  content.appendChild(mainTitle);

  const contactParagraph = document.createElement("p");
  contactParagraph.textContent(
    "Chef /n 555-555-5554 /n totallyRealEmail@notFake.com"
  );
}
