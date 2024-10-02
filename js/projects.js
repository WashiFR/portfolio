'use strict';

import {detailsMode, disableDetailsMode, enableDetailsMode} from "./details-mode.js";
import { projects } from './data/projects-data.js';
import {showBControl, hideBControl, showLeftRightControls, hideLeftRightControls, showTopDownControls, hideTopDownControls} from "./controls-ui.js";

export let projectIndex = 0;

function addClickEvent() {
    let projectsDiv = document.getElementById('projects');
    projectsDiv.addEventListener('click', function(event) {
        let target = event.target;
        removeProjectActive(projectIndex);
        projectIndex = Array.from(projectsDiv.children).indexOf(target);
        enableProjectDetailsMode();
    });
}

export function resetProjectIndex() {
    projectIndex = 0;
}

export function enableProjectDetailsMode() {
    enableDetailsMode();
    createProjectInfo(projects[projectIndex]);
    addProjectActive(projectIndex);
    hideCheckDetails();
    hideLeftRightControls();
    showTopDownControls();
    showBControl();
}

export function disableProjectDetailsMode() {
    disableDetailsMode();
    clearProjectInfo();
    removeProjectActive(projectIndex);
    showCheckDetails();
    showLeftRightControls();
    hideTopDownControls();
    hideBControl();
}

function hideCheckDetails() {
    let checkDetails = document.getElementById('check_details');
    checkDetails.classList.add('hidden');
}

function showCheckDetails() {
    let checkDetails = document.getElementById('check_details');
    checkDetails.classList.remove('hidden');
}

function addProjectActive(index) {
    let projectsDiv = document.getElementById('projects');
    projectsDiv.children[index].classList.add('project_active');
    projectsDiv.children[index].children[0].classList.remove('hidden');
}

function removeProjectActive(index) {
    let projectsDiv = document.getElementById('projects');
    projectsDiv.children[index].classList.remove('project_active');
    projectsDiv.children[index].children[0].classList.add('hidden');
}

function scrollToProject() {
    let projectsDiv = document.getElementById('projects');
    projectsDiv.children[projectIndex].scrollIntoView();
}

export function nextProject() {
    if (!detailsMode) return;
    projectIndex++;
    if (projectIndex > projects.length - 1) {
        projectIndex = 0;
        removeProjectActive(projects.length - 1);
    }
    if (projectIndex > 0) {
        removeProjectActive(projectIndex - 1);
    }
    scrollToProject();
    addProjectActive(projectIndex);
    createProjectInfo(projects[projectIndex]);
}

export function previousProject() {
    if (!detailsMode) return;
    projectIndex--;
    if (projectIndex < 0) {
        projectIndex = projects.length - 1;
        removeProjectActive(0);
    }
    if (projectIndex < projects.length - 1) {
        removeProjectActive(projectIndex + 1);
    }
    scrollToProject();
    addProjectActive(projectIndex);
    createProjectInfo(projects[projectIndex]);
}

function createProject(project) {
    let projectsDiv = document.getElementById('projects');
    let name = project.language.shortName ? project.language.shortName : project.language.name;
    projectsDiv.innerHTML += `
        <div class="project">
            <img class="hidden" src="img/arrows/arrow-choice.png">
            <p>${project.name}</p>
            <div class="project_type">
                <div class="custom_type">
                    <i class="devicon-${project.language.name.toLowerCase()}-plain"
                    style="background-color: ${project.language.color}"></i>
                    ${name}
                </div>
                <span>${project.note}</span>
            </div>
        </div>
    `;
}

export function createAllProjects() {
    projects.forEach(project => {
        createProject(project);
    });
    addClickEvent();
}

function createProjectInfo(project) {
    let projectInfoDiv = document.getElementById('project_info');
    projectInfoDiv.innerHTML = `
        <table>
            <tr>
                <th>Categorie</th>
                <td>${project.category.name}</td>
            </tr>
        </table>
        
        <table>
            <tr>
                <th>Nb. Personnes</th>
                <td>${project.nbPeople}</td>
            </tr>
        </table>
        
        <table>
            <tr>
                <th>Dépot</th>
                <td><a href="${project.link}" target="_blank">Lien du projet</a></td>
            </tr>
        </table>
        
        <div class="project_description description">
            ${project.description}
        </div>
    `;
}

function clearProjectInfo() {
    let projectInfoDiv = document.getElementById('project_info');
    projectInfoDiv.innerHTML = '';
}