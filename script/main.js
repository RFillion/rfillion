//Animation navigation
let mobileToggle = document.querySelector('.mobile-toggle')

let toggleTop = document.querySelector('.mobile-toggle .top')
let toggleMiddle = document.querySelector('.mobile-toggle .midle')
let toggleBottom = document.querySelector('.mobile-toggle .bottom')

let mobileNav = document.querySelector('.mobileNav')

let mobileNavItems = document.querySelectorAll('.mobileNav--navigation-item')

mobileToggle.addEventListener('click', () => {
    if(!(mobileToggle.classList.contains('active'))) {
        mobileToggle.classList.add('active')
        mobileNav.style.visibility = 'visible'
        gsap.fromTo(mobileNav,
            {y: '100%', opacity: 0},
            {y: 0, opacity: 1, duration: 1, ease: 'expo.out'})
    
        gsap.fromTo(toggleTop,
            {y: -5},
            {y: 2, duration: 1, ease: 'expo.out'})
        gsap.fromTo(toggleBottom,
            {y: 5},
            {y: -2, duration: 1, ease: 'expo.out'})
    } else {
        mobileToggle.classList.remove('active')

        gsap.fromTo(mobileNav,
            {y: 0, opacity: 1},
            {y: '100%', opacity: 0, duration: 1, ease: 'expo.out', onComplete: () => {
                mobileNav.style.visibility = 'hidden'
        }})

        gsap.fromTo(toggleTop,
            {y: 2},
            {y: -5, duration: 1, ease: 'expo.out'})
        gsap.fromTo(toggleBottom,
            {y: -2},
            {y: 5, duration: 1, ease: 'expo.out'})
    }
})

mobileNavItems.forEach(item => {
    item.addEventListener('click', () => {
        mobileToggle.classList.remove('active')

        gsap.fromTo(mobileNav, 
            {opacity: 1},
            {opacity: 0, duration: .3, ease: 'expo.out'})
        
        gsap.fromTo(toggleTop,
            {y: 2},
            {y: -5, duration: 1, ease: 'expo.out'})
        gsap.fromTo(toggleBottom,
            {y: -2},
            {y: 5, duration: 1, ease: 'expo.out'})
        
    })
})


