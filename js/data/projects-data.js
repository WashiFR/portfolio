'use strict';

const categories = {
    SiteWeb : {
        name : 'Site Web'
    },
    ApplicationWeb : {
        name : 'Application Web'
    },
    ApplicationMobile : {
        name : 'Application Mobile'
    },
    ApplicationDesktop : {
        name : 'Application Desktop'
    },
    ApplicationMixedReality : {
        name : 'Application de Réalité Mixte'
    },
    JeuVideo : {
        name : 'Jeu Vidéo'
    },
    Bot : {
        name : 'Bot'
    },
    Autre : {
        name : 'Autre'
    }
}

const languages = {
    Java : {
        name: 'Java',
        color: 'red'
    },
    Php :
    {
        name: 'Php',
        color: '#777bb3'
    },
    Javascript :
    {
        name: 'Javascript',
        shortName: 'JS',
        color: '#f7df1e'
    },
    Python :
    {
        name: 'Python',
        color: '#ffd845'
    },
    Unity :
    {
        name: 'Unity',
        color: 'black'
    },
    Html :
    {
        name: 'Html5',
        shortName: 'Html',
        color: 'red'
    },
}

export const projects = [
    {
        name: 'Dragon Ball',
        note: '10/10',
        language: languages.Html,
        nbPeople: '2',
        link: 'https://github.com/WashiFR/dbz-website',
        description: 'Un site sur le thème Dragon Ball Z fait en Html/Css pour l\'IUT.',
        category: categories.SiteWeb
    },
    {
        name: 'Web Portrait',
        note: '10/10',
        language: languages.Html,
        nbPeople: '1',
        link: 'https://github.com/WashiFR/web-portrait',
        description: 'Un site web faisoant notre portrait pour l\'IUT.',
        category: categories.SiteWeb
    },
    {
        name: 'Tamagotchi',
        note: '10/10',
        language: languages.Javascript,
        nbPeople: '1',
        link: 'https://github.com/WashiFR/tamagotchi-js',
        description: 'Un tamagotchi fait en JS pour l\'IUT.',
        category: categories.ApplicationWeb
    },
    {
        name: 'Démineur',
        note: '10/10',
        language: languages.Javascript,
        nbPeople: '1',
        link: 'https://github.com/WashiFR/demineur',
        description: 'Un démineur fait en Javascript.',
        category: categories.ApplicationWeb
    },
    {
        name: 'Fight Game',
        note: '10/10',
        language: languages.Javascript,
        nbPeople: '1',
        link: 'https://github.com/WashiFR/FightGameJS',
        description: 'Un jeu de combat avec des memes d\'interner (petit remake de mon projet Python) fait en Javascript.',
        category: categories.ApplicationWeb
    },
    {
        name: 'Touiteur',
        note: '10/10',
        language: languages.Php,
        nbPeople: '4',
        link: 'https://github.com/dylanbaud/touiteur',
        description: 'Twitter (en mieux) fait en PHP pour la 2ème année du BUT.',
        category: categories.SiteWeb
    },
    {
        name: 'Zeldiablo',
        note: '10/10',
        language: languages.Java,
        nbPeople: '4',
        link: 'https://github.com/WashiFR/2023_Zeldiablo_weier3u_lemeunie6u_chauvel8u_dietric43u',
        description: 'Un jeu de type Donjon fait en JavaFx pour la première année du BUT.',
        category: categories.JeuVideo
    },
    {
        name: 'Trebbo',
        note: '10/10',
        language: languages.Java,
        nbPeople: '4',
        link: 'https://github.com/IUTNancyCharlemagne/groupes-sae-s3a_baudson_colson_pedretti_weier',
        description: 'Un todolist comme Trello fait en JavaFx pour la 2ème année du BUT.',
        category: categories.ApplicationDesktop
    },
    {
        name: 'CubRunner',
        note: '10/10',
        language: languages.Unity,
        nbPeople: '1',
        link: 'https://github.com/WashiFR/Unity-runner-game',
        description: 'Un jeu de course infini fait en C# avec Unity. Mon premier jeu.',
        category: categories.JeuVideo
    },
    {
        name: 'Roguelike',
        note: '10/10',
        language: languages.Unity,
        nbPeople: '1',
        link: 'https://github.com/WashiFR/Roguelike-2D',
        description: 'Un jeu de type RogueLike fait en C# avec Unity. (Non terminé car trop ambitieux)',
        category: categories.JeuVideo
    },
    {
        name: 'PolyLens',
        note: '10/10',
        language: languages.Unity,
        nbPeople: '2',
        link: 'https://github.com/Okiles/PolyLens',
        description: 'Projet en Réalité Mixte réalisé pour l\'école Polytech Nancy lors de mon stage de 2ème année de BUT.',
        category: categories.ApplicationMixedReality
    },
    {
        name: 'Projet NSI',
        note: '10/10',
        language: languages.Python,
        nbPeople: '2',
        link: 'https://github.com/WashiFR/Projet',
        description: 'Un projet de NSI fait en Python (auquel j\'ai ajouté un autre projet personnel).',
        category: categories.Autre
    },
    {
        name: 'FrankyBot',
        note: '10/10',
        language: languages.Python,
        nbPeople: '1',
        link: 'https://github.com/WashiFR/Franky-bot',
        description: 'Un bot discord fait en Python.',
        category: categories.Bot
    }
]