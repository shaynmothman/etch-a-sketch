const containerGrid = document.querySelector('#container-grid');
const btnResolution = document.querySelector('#btn-resolution');
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
let resolution = 0;
let boxWidth = 0;

/* Trigger prompt and other functions when the button is clicked */
btnResolution.addEventListener("click", (event) => {
    resolution = prompt('Input the amount of rows and columns as a single number:');
    boxWidth = 100/resolution;

    /* Limit input to 100 squares for rendering efficiency */
    if (resolution > 0 && resolution <= 100) {
        createGrid(resolution, boxWidth);
        addHoverEffect();
        containerGrid.style.visibility = 'visible';
        h1.textContent = 'Etch-A-Nic';
        p.textContent = 'Hover over the area below to reveal:'
    } else if (resolution == null) {
        return;
    } else {
        alert('Resolution must be between 0 and 101.');
        let promptResolution = new Event('click');
        btnResolution.dispatchEvent(promptResolution);
    };
});

/* Clear and repopulate the grid based on input */
function createGrid(resolution, boxWidth) {
    /* Remove any existing grid boxes */
    while (containerGrid.firstChild) {
        containerGrid.removeChild(containerGrid.lastChild);
    };

    /* Populate new boxes */
    for (let i = 0; i < resolution**2; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.cssText = `width: ${boxWidth}%; padding-bottom: ${boxWidth}%;`;
        containerGrid.appendChild(box);
    };    
}

/* Reduce opacity of grid squares on hover */
function addHoverEffect() {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach((box) => {
        box.style.opacity = 1.0;
        box.addEventListener('mouseenter', (event) => {
            if (box.style.opacity > 0) {
                box.style.opacity = +box.style.opacity - 0.1;
            }
        });
    });
}

