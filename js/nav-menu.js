let navMenu = document.getElementsByClassName('nav-menu');
let navMenuBtn = document.getElementsByClassName('menu');

navMenuBtn[0].addEventListener('click', function() {
    navMenu[0].classList.toggle('active');
});