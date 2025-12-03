import { createTag } from "../components/createTag.js";

import pinImg from "../img/map.png";

export function createContactpage() {
    const content = document.querySelector("#content");

    const contactPageContainer = createTag("div", "contact-page");

    const phone = createTag("div", "contact-phone", "📱 123 456 789");
    const street = createTag(
        "div",
        "content-street",
        "233 S Wacker Dr, Chicago, IL 60606"
    );
    const img = createTag(["img", pinImg, "Location on the map"], "contact-img");

    contactPageContainer.append(phone, street, img);
    content.appendChild(contactPageContainer);
}
