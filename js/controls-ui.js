'use strict';

export function showLeftRightControls() {
    let leftControl = document.getElementById('control_left');
    let rightControl = document.getElementById('control_right');
    leftControl.classList.remove('hidden');
    rightControl.classList.remove('hidden');
}

export function hideLeftRightControls() {
    let leftControl = document.getElementById('control_left');
    let rightControl = document.getElementById('control_right');
    leftControl.classList.add('hidden');
    rightControl.classList.add('hidden');
}

export function showTopDownControls() {
    let topControl = document.getElementById('control_top');
    let downControl = document.getElementById('control_down');
    topControl.classList.remove('hidden');
    downControl.classList.remove('hidden');
}

export function hideTopDownControls() {
    let topControl = document.getElementById('control_top');
    let downControl = document.getElementById('control_down');
    topControl.classList.add('hidden');
    downControl.classList.add('hidden');
}

export function showBControl() {
    let bControl = document.getElementById('control_b');
    bControl.classList.remove('hidden');
}

export function hideBControl() {
    let bControl = document.getElementById('control_b');
    bControl.classList.add('hidden');
}