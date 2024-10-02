'use strict';

import {detailsMode} from "./details-mode.js";
import { contentsData } from './data/contents-data.js';
import { updateBirthdayUI } from './birthday.js';
import { createAllProjects } from "./projects.js";

export let navIndex = 1;
let nav = document.getElementById('nav');
let content = document.getElementById('content');
let checkDetails = document.getElementsByClassName('check_details');

function removeNavActive(index) {
    nav.children[index].classList.remove('nav_active');
    nav.children[index].src = `img/icons/nav-icon${index}-white.png`;
}

function addNavActive(index) {
    nav.children[index].classList.add('nav_active');
    nav.children[index].src = `img/icons/nav-icon${index}-black.png`;
}

export function changeContent(index) {
    content.innerHTML = contentsData[index - 1].content;
    
    if (index === 1) {
        updateBirthdayUI();
    } else if (index === 3) {
        createAllProjects();
    }
    
    if (contentsData[index - 1].check_details) {
        checkDetails[0].classList.remove('hidden');
    } else {
        checkDetails[0].classList.add('hidden');
    }
}

export function nextContent() {
    navIndex++;
    if (navIndex > 5) {
        navIndex = 1;
        removeNavActive(5);
    }
    if (navIndex > 1) {
        removeNavActive(navIndex - 1);
    }
    addNavActive(navIndex);
    changeContent(navIndex);
}

export function previousContent() {
    navIndex--;
    if (navIndex < 1) {
        navIndex = 5;
        removeNavActive(1);
    }
    if (navIndex < 5) {
        removeNavActive(navIndex + 1);
    }
    addNavActive(navIndex);
    changeContent(navIndex);
}

nav.addEventListener('click', function(event) {
    let target = event.target;
    if (target.tagName === 'IMG' && !target.classList.contains('arrow') && !detailsMode) {
        removeNavActive(navIndex);
        let images = Array.from(nav.querySelectorAll('img'));
        navIndex = images.indexOf(target);
        changeContent(navIndex);
        addNavActive(navIndex);
    } else if (target.tagName === 'IMG' && target.classList.contains('arrow') && !detailsMode) {
        if (target.id === 'nav_left') {
            previousContent();
        } else if (target.id === 'nav_right') {
            nextContent();
        }
    }
});