const projects = [
    {
        title: "SDL Snake Clone Repo",
        href: "https://github.com/Lucsarge/snake-clone-sdl",
        image: "https://github.com/Lucsarge/snake-clone-sdl/raw/main/snake-gameplay.gif",
        desc: "Clone of the game Snake clone made in C with SDL, a cross-platform library that managed the visual output and the keyboard input."
    },
    {
        title: "Boid Sanctuary",
        href: "https://github.com/Lucsarge/BoidSanctuary",
        image: "/images/boids-screenshot.png",
        desc: "Personal implementation of Craig Reynolds' \"Boids\" in the Unity Game Engine."
    },
    {
        title: "SFML Boid Simulation",
        href: "https://github.com/Lucsarge/sfml_boid_simulation",
        image: "/images/sfml-boid-screenshot.png",
        desc: "Small C++ project to create a boid simulation assisted by the sfml library in order improve my personal experience with the C++ language."
    }
];

// TODO: move to separate json file for Projects page
// generate each project entry using the projectTemplate
const list = document.getElementById("projectList");
const projTemplate = document.getElementById("projectTemplate");

projects.forEach(project => {
    const clone = projTemplate.content.cloneNode(true);
    clone.querySelector("a").href = project.href;
    clone.querySelector("img").src = project.image;
    clone.querySelector("h2").textContent = project.title;
    clone.querySelector("p").textContent = project.desc;
    list.appendChild(clone);
});

// Draw canvas for a custom background decoration
// canvas variables
const redColor = "#800000";
const whiteColor = "#f3f3f3"

const canvas = document.getElementById("personalizedBackground");
const ctx = canvas.getContext("2d");

window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    console.log(window.innerWidth);
    console.log(window.innerHeight);

    drawBackground();
}

// TODO: add more shapes to the background so that the image has a more complete look to it.
function drawBackground() {
    ctx.lineWidth = 1; // the line width can stay 1 since all the triangles are filled
    
    // white triangle
    drawFilledTriangle(
        window.innerWidth * .60, 0,
        window.innerWidth * .75, 0,
        window.innerWidth * .85, window.innerHeight * .75,
        whiteColor
    );

    // draw red triangle
    drawFilledTriangle(
        0, window.innerHeight,
        window.innerWidth * .5, window.innerHeight,
        window.innerWidth * .95, window.innerHeight * .5,
        redColor
    );
}

// accepts 3 (x, y) coordinates and a color to draw a triangle in the canvas 2D context
function drawFilledTriangle(x1, y1, x2, y2, x3, y3, color) {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
}

resizeCanvas();
