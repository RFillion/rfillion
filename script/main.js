let menuBtn = document.querySelector('.menu-btn');
let menuItems = document.querySelector('.menu-items');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    menuItems.classList.toggle('open');
});