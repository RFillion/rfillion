//Animation navigation
let mobileToggle = document.querySelector('.mobile-toggle')

let toggleTop = document.querySelector('.mobile-toggle .top')
let toggleMiddle = document.querySelector('.mobile-toggle .midle')
let toggleBottom = document.querySelector('.mobile-toggle .bottom')

let mobileNav = document.querySelector('.mobileNav')

let homeContent = document.querySelector('.container-content')

let mobileNavItems = document.querySelectorAll('.mobileNav--navigation-item')

mobileToggle.addEventListener('click', () => {
    if(!(mobileToggle.classList.contains('active'))) {
        mobileToggle.classList.add('active')
        mobileNav.style.visibility = 'visible'

        gsap.timeline()
        .fromTo(mobileNav,
            {y: '100%', opacity: 0},
            {y: 0, opacity: 1, duration: 1, ease: 'expo.out'})
        .fromTo(homeContent,
            {opacity: 1},
            {opacity: 0, duration: .5, ease: 'expo.out'}, .05)
    
        gsap.timeline()
        .fromTo(toggleTop,
            {width: '20px'},
            {width: '30px', duration: .3, ease: 'expo.out'})
        .fromTo(toggleTop,
            {y: -5},
            {y: 2, duration: .8, ease: 'expo.out'})
        
        gsap.timeline()
        .fromTo(toggleBottom,
            {width: '20px'},
            {width: '30px', duration: .3, ease: 'expo.out'})
        .fromTo(toggleBottom,
            {y: 5},
            {y: -2, duration: .8, ease: 'expo.out'})
    } else {
        mobileToggle.classList.remove('active')

        gsap.timeline()
        .fromTo(mobileNav,
            {y: 0, opacity: 1},
            {y: '100%', opacity: 0, duration: 1, ease: 'expo.out', onComplete: () => {
                mobileNav.style.visibility = 'hidden'
        }})
        .fromTo(homeContent, 
            {opacity: 0},
            {opacity: 1, duration: .5, ease: 'expo.out'}, .1)

        gsap.timeline()
        .fromTo(toggleTop,
            {y: 2},
            {y: -5, duration: .8, ease: 'expo.out'})
        .fromTo(toggleTop,
            {width: '30px'},
            {width: '20px', duration: .3, ease: 'expo.out'}, .3)
        gsap.timeline()
        .fromTo(toggleBottom,
            {y: -2},
            {y: 5, duration: .8, ease: 'expo.out'})
        .fromTo(toggleBottom,
            {width: '30px'},
            {width: '20px', duration: .3, ease: 'expo.out'}, .3)
    }
})

mobileNavItems.forEach(item => {
    item.addEventListener('click', () => {
        mobileToggle.classList.remove('active')

        gsap.timeline()
        .fromTo(mobileNav, 
            {opacity: 1},
            {opacity: 0, duration: .3, ease: 'expo.out', onComplete: () => {
                mobileNav.style.visibility = 'hidden'
        }})
        .fromTo(homeContent,
            {opacity: 0},
            {opacity: 1, duration: .5, ease: 'expo.out'}, .05)
        
        gsap.timeline()
        .fromTo(toggleTop,
            {y: 2},
            {y: -5, duration: .8, ease: 'expo.out'})
        .fromTo(toggleTop,
            {width: '30px'},
            {width: '20px', duration: .3, ease: 'expo.out'})
        gsap.timeline()
        .fromTo(toggleBottom,
            {y: -2},
            {y: 5, duration: .8, ease: 'expo.out'})
        .fromTo(toggleBottom,
            {width: '30px'},
            {width: '20px', duration: .3, ease: 'expo.out'})
        
    })
})


