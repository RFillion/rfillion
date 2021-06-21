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

//Animation
let Arrow = document.getElementById('Animation');

gsap.fromTo(Arrow, 
    {y:0},
    {y: 5, yoyo: true, repeat: -1, ease: 'power1.inOut'}
);

//ScrollTrigger
/*gsap.registerPlugin(ScrollTrigger);

gsap.to('.header', {
    scrollTrigger: {
        start: 'top',
        trigger: '.header',
        toggleActions: 'play none none reverse',
    },
    backdropFilter: 'blur(20px)',
    duration: 0.2,
});*/