gsap.registerPlugin(ScrollTrigger);

//variables
let Menu = document.getElementById('mobile-menu');
let navBar = document.querySelector('.navbar');
let Close = document.querySelector('.close');
let NavMenu = document.querySelector('.navbar__menu');
let links = document.querySelectorAll('.link');
let arrow = document.querySelector('.arrow');

//bouton hamburger
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

//animation GSAP
gsap.timeline().to(arrow, 
    {y: 20, ease: 'back.in', yoyo: true, repeat: -1});

//scrolling
window.onscroll = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navBar.style.background = "#1a1a1a";
    }
    
}

//Cartes
fetch("job.json")
.then(response => response.json())
.then(result => {creerCarte(result)});

function creerCarte(Info) {
    let html = '';

    Info.jobs.forEach(job => {
        let titre = job.Titre;
        let image = job.Image;
        let description = job.Description;
        let lien = job.Lien;

        html += `<div class="col-12 col-lg-6">
            <div class="card">
              <img src="${image}" alt="" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">${titre}</h5>
                <p class="card-text">${description}</p>
                <a href="${lien}" target="_blank" class="btn btn-primary">Accéder</a>
              </div>
            </div>
          </div>`;

          document.querySelector('.cartes').innerHTML = html;
    });
}
