let competences = [
    'html5',
    'css3',
    'javascript',
    'php',
    'mysql',
    'oracle',
    'python',
    'java',
    'csharp',
    'markdown'
];

let logiciels = [
    'vscode',
    'intellij',
    'unity',
    'github',
    'git'
];

let competenceDelay = 0;

let containerCompetences = document.getElementById('competences-container');
let containerLogiciels = document.getElementById('logiciels-container');

function createCard(elem, container) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-aos', 'fade-right');
    card.setAttribute('data-aos-delay', competenceDelay.toString());
    competenceDelay += 100;

    let img = document.createElement('img');
    img.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${elem}/${elem}-original.svg`;
    card.appendChild(img);

    let text = document.createElement('h3');
    text.textContent = elem.toUpperCase();
    card.appendChild(text);

    container.appendChild(card);
}

window.addEventListener('load', () => {
    for (let i = 0; i < competences.length; i++) {
        createCard(competences[i], containerCompetences);
    }
    competenceDelay = 0;
    for (let i = 0; i < logiciels.length; i++) {
        createCard(logiciels[i], containerLogiciels);
    }
});