'use strict';

import {detailsMode} from "./details-mode.js";
import {navIndex, previousContent, nextContent, changeContent} from "./change-content.js";
import {resetProjectIndex, enableProjectDetailsMode, disableProjectDetailsMode, previousProject, nextProject} from "./projects.js";
import {contentsData} from "./data/contents-data.js";

window.onload = function() {
    changeContent(navIndex);
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft' && !detailsMode) {
        previousContent();
        resetProjectIndex();
    } else if (event.key === 'ArrowRight' && !detailsMode) {
        nextContent();
        resetProjectIndex();
    } else if (event.key === 'ArrowUp' && navIndex === 3) {
        previousProject();
    } else if (event.key === 'ArrowDown' && navIndex === 3) {
        nextProject();
    }
});

document.addEventListener('keyup', function(event) {
    if ((event.key === 'a' || event.key === 'Enter' || event.key === ' ') && contentsData[navIndex - 1].check_details) {
        enableProjectDetailsMode();
    } else if (event.key === 'b' || event.key === 'Escape') {
        disableProjectDetailsMode();
    }
});