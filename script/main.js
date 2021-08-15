gsap.registerPlugin(ScrollTrigger);

let Menu = document.getElementById('mobile-menu');
let Close = document.querySelector('.close');
let NavMenu = document.querySelector('.navbar__menu');
let links = document.querySelectorAll('.link');
let arrow = document.querySelector('.arrow');

Menu.addEventListener('click', () => {
    NavMenu.style.opacity = '1';
    NavMenu.style.pointerEvents = 'all';
});

Close.addEventListener('click', () => {
    NavMenu.style.opacity = '0';
    NavMenu.style.pointerEvents = 'none';
});

links.forEach(link => {
    link.addEventListener('click', () => {
        NavMenu.style.opacity = '0';
        NavMenu.style.pointerEvents = 'none';
    });
});

gsap.timeline().to(arrow, 
    {y: 20, ease: 'back.in', yoyo: true, repeat: -1});