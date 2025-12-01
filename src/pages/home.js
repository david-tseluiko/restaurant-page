import { createTag } from "../components/createTag.js";
import pizzaImg from "../img/pizza.jpg";

export function createHomepage() {
    const content = document.querySelector("#content");

    const homepageContainer = createTag("div", "homepage");

    const title = createTag(
        "h1",
        "homepage-title",
        "Best Pizza in the United States"
    );
    const description = createTag(
        "h2",
        "homepage-description",
        "Made with passion since 1934"
    );
    const img = createTag(["img", pizzaImg, "Pizza Image"], "homepage-image");
    const order = createTag(
        "p",
        "homepage-pizza-order",
        "Order online or visit us!"
    );

    homepageContainer.append(title, description, img, order);
    content.appendChild(homepageContainer);
}
