import "./style.css";
import { createHomepage } from "./pages/home.js";
import { createMenupage } from "./pages/menu.js";
import { createContactpage } from "./pages/contact.js";

const navigation = document.querySelector(".nav");
const content = document.querySelector("#content");
const pages = [createHomepage, createMenupage, createContactpage];

createHomepage();

navigation.addEventListener("click", (event) => {
    const index = [...event.target.parentElement.children].indexOf(
        event.target
    );
    const findPressedButton = navigation.children[index];

    if (findPressedButton.classList.length < 2) {
        for (let button of Array.from(navigation.children)) {
            if (button.classList.length === 2) {
                button.classList.remove("active");
                break;
            }
        }

        findPressedButton.classList.add("active");
        content.innerHTML = "";
        pages[index]();
    }
});
