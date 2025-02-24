export function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact-page");

  const container = document.createElement("div");
  container.classList.add("contact-container");

  // Contact Information
  const info = document.createElement("div");
  info.classList.add("contact-info");

  const title = document.createElement("h2");
  title.textContent = "Contact Us";
  info.appendChild(title);

  const description = document.createElement("p");
  description.textContent =
    "For reservations and inquiries, please contact us or fill out the form. We look forward to welcoming you to L'Étoile.";
  info.appendChild(description);

  const details = document.createElement("div");
  details.classList.add("contact-details");

  const contactItems = [
    {
      icon: "fa-solid fa-location-dot",
      text: "42 Rue de la Gastronomie, 75008 Paris",
    },
    { icon: "fa-solid fa-phone", text: "+33 1 23 45 67 89" },
    { icon: "fa-solid fa-envelope", text: "reservations@letoile.com" },
  ];

  contactItems.forEach((item) => {
    const contactItem = document.createElement("div");
    contactItem.classList.add("contact-item");

    const icon = document.createElement("i");
    icon.className = item.icon;

    const text = document.createElement("span");
    text.textContent = item.text;

    contactItem.appendChild(icon);
    contactItem.appendChild(text);
    details.appendChild(contactItem);
  });

  info.appendChild(details);

  // Opening Hours
  const hours = document.createElement("div");
  hours.classList.add("opening-hours");

  const hoursTitle = document.createElement("h3");
  hoursTitle.textContent = "Opening Hours";
  hours.appendChild(hoursTitle);

  const hoursList = document.createElement("ul");
  hoursList.classList.add("hours-list");

  const schedule = [
    { day: "Tuesday - Friday", hours: "12:00 - 14:30, 19:00 - 22:30" },
    { day: "Saturday", hours: "19:00 - 23:00" },
    { day: "Sunday - Monday", hours: "Closed" },
  ];

  schedule.forEach((item) => {
    const li = document.createElement("li");
    const day = document.createElement("span");
    day.textContent = item.day;
    const time = document.createElement("span");
    time.textContent = item.hours;
    li.appendChild(day);
    li.appendChild(time);
    hoursList.appendChild(li);
  });

  hours.appendChild(hoursList);
  info.appendChild(hours);

  // Contact Form
  const form = document.createElement("form");
  form.classList.add("contact-form");

  const formGroups = [
    { label: "Name", type: "text", required: true },
    { label: "Email", type: "email", required: true },
    { label: "Phone", type: "tel", required: true },
    { label: "Number of Guests", type: "number", required: true },
    { label: "Preferred Date", type: "date", required: true },
    { label: "Message", type: "textarea", required: false },
  ];

  formGroups.forEach((group) => {
    const formGroup = document.createElement("div");
    formGroup.classList.add("form-group");

    const label = document.createElement("label");
    label.classList.add("form-label");
    label.textContent = group.label;
    if (group.required) label.textContent += "*";

    let input;
    if (group.type === "textarea") {
      input = document.createElement("textarea");
      input.rows = 4;
    } else {
      input = document.createElement("input");
      input.type = group.type;
    }
    input.classList.add("form-input");
    input.required = group.required;

    formGroup.appendChild(label);
    formGroup.appendChild(input);
    form.appendChild(formGroup);
  });

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.classList.add("submit-btn");
  submitBtn.textContent = "Send Message";
  form.appendChild(submitBtn);

  container.appendChild(info);
  container.appendChild(form);
  contact.appendChild(container);

  return contact;
}
