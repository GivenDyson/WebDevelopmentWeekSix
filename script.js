function changeText(){
    const description = document.getElementById("description");
    description.textContent = "Text change by use of JavaScript!";
}

function changeStyle() {
    const title = document.getElementById("main-title");
    title.style.color = "#e63946";
    title.style.fontSize = "2.5rem";
    title.style.fontStyle = "italic";
    title.style.textshadow = "2px 2px 5px #999";
}

function toggleElement(){
    const existing = document.getElementById("dynamic-element");
    if (exiting) {
        existing.remove();
    } else {
        const newElement = document.createElement("p");
        newElement.id = "dynamic-element";
        newElement.textContent = "Dynamically added element!";
        document.body.appendChild(newElement);
    }
}