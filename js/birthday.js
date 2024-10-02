'use strict';

const birthday = new Date('2004-9-21');

function daysUntilBirthday() {
    let today = new Date();
    let nextBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
    if (today > nextBirthday) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }
    return Math.floor((nextBirthday - today) / 86400000);
}

function daysSinceBorn() {
    return Math.floor((new Date() - birthday) / 86400000);
}

function age() {
    let today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    if (today.getMonth() < birthday.getMonth() || (today.getMonth() === birthday.getMonth() && today.getDate() < birthday.getDate())) {
        age--;
    }
    return age;
}

export function updateBirthdayUI() {
    let progressBar = document.getElementById('exp-bar');
    let expBarValueText = document.getElementById('exp-bar-text');
    let totalDays = document.getElementById('total-days');
    let ageText = document.getElementById('age');
    
    progressBar.value = progressBar.max - daysUntilBirthday();
    expBarValueText.innerHTML = daysUntilBirthday().toString();
    totalDays.innerHTML = daysSinceBorn().toString();
    ageText.innerHTML = `Niv. ${age().toString()}`;
}