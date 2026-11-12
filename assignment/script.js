const menuButton = document.querySelector('.menuButton');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    console.log('Menu button clicked');
    nav.classList.toggle('menuOpen');
});