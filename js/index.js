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
        image: "images/boids-screenshot.png",
        desc: "Personal implementation of Craig Reynolds' \"Boids\" in the Unity Game Engine."
    },
    {
        title: "SFML Boid Simulation",
        href: "https://github.com/Lucsarge/sfml_boid_simulation",
        image: "images/sfml-boid-screenshot.png",
        desc: "Small C++ project to create a boid simulation assisted by the sfml library in order improve my personal experience with the C++ language."
    }
];

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
