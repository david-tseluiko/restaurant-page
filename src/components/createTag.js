export function createTag(
    elementTag,
    elementClass = false,
    elementText = false
) {
    let element;
    if (typeof elementTag === "string") {
        element = document.createElement(elementTag);
    } else if (typeof elementTag === "object" && elementTag[0] === "img") {
        element = document.createElement(elementTag[0]);
        element.src = elementTag[1];
        element.alt = elementTag[2];
    }

    if (elementClass) {
        element.classList.add(elementClass);
    }

    if (elementText) {
        element.textContent = elementText;
    }

    return element;
}
