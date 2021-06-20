//hamburger menu
let menuBtn = document.querySelector('.menu-btn');
let menuItems = document.querySelector('.menu-items');
let menuItem = document.querySelectorAll('.menu-item');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    menuItems.classList.toggle('open');
});

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        if(menuBtn.classList.contains('open')) {
            menuBtn.classList.toggle('open');
            menuItems.classList.toggle('open');
        }
    })
})

//ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

gsap.to('.header', {
    scrollTrigger: {
        start: 'top',
        trigger: '.header',
        toggleActions: 'play none none reverse',
    },
    backgroundColor: 'white',
    duration: 0.2,
})