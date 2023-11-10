// hamburgermenu

function myFunction(x) {
    x.classList.toggle("change");
  }

// responsive sidebar menu

const menu = document.querySelector('.navbar #menu');
const nav = document.querySelector('.navbar .navbar-nav');

menu.addEventListener('click', function() {
    nav.classList.toggle('active')
});