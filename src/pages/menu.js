import { createTag } from "../components/createTag.js";

import pepperoniImg from "../img/pepperoni.jpg";
import margheritaImg from "../img/margherita.jpg";
import salsicciaImg from "../img/salsiccia.jpg";
import pomodoroImg from "../img/pomodoro.jpg";

function MenuItem(img, title, description) {
    return { img, title, description };
}

export function createMenupage() {
    const content = document.querySelector("#content");

    const menuPageContainer = createTag("div", "menu-page");

    const menuItemContentList = [
        MenuItem(
            pepperoniImg,
            "Pepperoni",
            "cured pork and beef, seasoned with paprika and chili peppers"
        ),
        MenuItem(
            margheritaImg,
            "Margherita",
            "tomato sauce, fresh basil, mozzarella cheese, and extra-virgin olive oil"
        ),
        MenuItem(
            salsicciaImg,
            "Salsiccia",
            "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"
        ),
        MenuItem(
            pomodoroImg,
            "Pomodoro",
            "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli"
        ),
    ];

    for (let i = 0; i < menuItemContentList.length; i++) {
        const menuItem = createTag("div", "menu-item");

        const img = createTag([
            "img",
            menuItemContentList[i].img,
            `${menuItemContentList[i].title} Image`,
        ]);
        const title = createTag(
            "div",
            "menu-title",
            menuItemContentList[i].title
        );
        const description = createTag(
            "div",
            "menu-description",
            menuItemContentList[i].description
        );

        menuItem.append(img, title, description);
        menuPageContainer.appendChild(menuItem);
    }

    content.appendChild(menuPageContainer);
}
