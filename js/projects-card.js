const projects = {
    "web": {
        Tamagotchi: {
            title: "Tamagotchi",
            description: "Un tamagotchi fait en JavaScript pour l'IUT.",
            image: "./img/tamagotchi.png",
            url: "https://github.com/WashiFR/tamagotchi-js"
        },
        DBZ: {
            title: "Dragon Ball Z",
            description: "Un site sur le thème Dragon Ball Z fait en HTML/CSS pour l'IUT.",
            image: "./img/dbz.png",
            url: "https://github.com/WashiFR/dbz-website"
        },
        WebPortrait: {
            title: "Web Portrait",
            description: "Un site faisant notre portrait fait en HTML/CSS pour l'IUT.",
            image: "./img/web-portrait.png",
            url: "https://github.com/WashiFR/web-portrait"
        },
        Demineur: {
            title: "Démineur",
            description: "Un démineur fait en JavaScript.",
            image: "./img/demineur.png",
            url: "https://github.com/WashiFR/demineur"
        }
    },
    "jeux": {
        Runner: {
            title: "CubRunner",
            description: "Un jeu de course infinie fait en C# avec Unity. Mon premier jeu.",
            image: "./img/cubrunner.png",
            url: "https://github.com/WashiFR/Unity-runner-game"
        },
        RogueLike: {
            title: "RogueLike",
            description: "Un jeu de type RogueLike fait en C# avec Unity. (Non terminé car trop ambitieux)",
            image: "./img/roguelike.png",
            url: "https://github.com/WashiFR/Roguelike-2D"
        }
    },
    "python": {
        ProjetNSI: {
            title: "Projet NSI",
            description: "Un projet de NSI fait en Python. Auquel j'ai ajouté un autre projet personnel.",
            image: "./img/projet-nsi.png",
            url: "https://github.com/WashiFR/Projet"
        },
        FrankyBot: {
            title: "FrankyBot",
            description: "Un bot Discord fait en Python.",
            image: "./img/frankybot.png",
            url: "https://github.com/WashiFR/Franky-bot"
        }
    }
};

let projetsDelay = 0;

let projetsContainer = document.getElementById("projets-container");

let buttonAll = document.getElementById("all");
let buttonWeb = document.getElementById("web");
let buttonJeux = document.getElementById("jeux");
let buttonPython = document.getElementById("python");
let activeBtn = buttonAll;

function createProjectCard(project) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-aos", "fade-up");
    card.setAttribute('data-aos-delay', projetsDelay.toString());
    projetsDelay += 100;

    let cardImage = document.createElement("div");
    cardImage.classList.add("card-image");
    cardImage.style.backgroundImage = `url(${project.image})`;
    card.appendChild(cardImage);

    // let image = document.createElement("img");
    // image.src = project.image;
    // card.appendChild(image);

    let cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    card.appendChild(cardContent);

    let title = document.createElement("h3");
    title.innerText = project.title;
    cardContent.appendChild(title);

    let description = document.createElement("p");
    description.innerText = project.description;
    cardContent.appendChild(description);

    projetsContainer.appendChild(card);

    card.addEventListener("click", function () {
        window.open(project.url);
    });
}

window.onload = function () {
    for (let category in projects) {
        for (let project in projects[category]) {
            createProjectCard(projects[category][project]);
        }
    }

    for (let btn of [buttonAll, buttonWeb, buttonJeux, buttonPython]) {
        btn.addEventListener("click", function () {
            projetsDelay = 0;
            activeBtn.classList.toggle("active-btn")
            activeBtn = this;
            btn.classList.toggle("active-btn")
            projetsContainer.innerHTML = "";
            let category = this.id;
            if (category !== "all") {
                for (let project in projects[category]) {
                    createProjectCard(projects[category][project]);
                }
            } else {
                for (let category in projects) {
                    projectsDelay = 0;
                    for (let project in projects[category]) {
                        createProjectCard(projects[category][project]);
                    }
                }
            }
        });
    }
}