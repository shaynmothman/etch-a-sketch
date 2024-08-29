const containerGrid = document.querySelector("#container-grid");
const btnResolution = document.querySelector("#btn-resolution");
let resolution = 0;
let boxWidth = 0;

btnResolution.addEventListener("click", (event) => {
    resolution = prompt("Input the desired resolution:");
    boxWidth = 100/resolution;
    console.log(resolution);

    if (resolution > 0 && resolution <= 100) {
        createGrid(resolution, boxWidth);
    } else {
        alert("Resolution must be between 0 and 101.");
        let promptResolution = new Event('click');
        btnResolution.dispatchEvent(promptResolution);
    };
});

function createGrid(resolution, boxWidth) {
    /* Remove any existing grid boxes */
    while (containerGrid.firstChild) {
        containerGrid.removeChild(containerGrid.lastChild);
    };

    /* Populate new boxes */
    for (let i = 0; i < resolution**2; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.cssText = `width: ${boxWidth}%; padding-bottom: ${boxWidth}%;`;
        containerGrid.appendChild(box);
    };
}

/* This isn't working properly yet */

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener('mouseover', (event) => {
        console.log("Hover");
        const currOpacity = parseFloat(
            window.getComputedStyle(box).getPropertyValue("--box_opacity")
        );
        const opacity = Math.min(currOpacity - 0.1, 0);

        box.style.setProperty("--box_opacity", opacity);
    })
});

