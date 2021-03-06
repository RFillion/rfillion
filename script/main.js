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
.then(result => {Cards(result)});

function Cards(Info) {
    let htmlCartes = '';
    let htmlModal = '';

    Info.jobs.forEach(job => {
        let titre = job.Titre;
        let target = job.target;
        let id = job.id;
        let image = job.Image;
        let description = job.Description;
        let lien = job.Lien;
        let footer = document.querySelector(".footerTag");

        htmlCartes += `<div class="col-12 col-lg-6 carte">
            <div class="card">
              <img src="${image}" class="card-img-top">
              <div class="card-body">
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="${target}">${titre}</button>
              </div>
            </div>
          </div>`;
          document.querySelector('.cartes').innerHTML = htmlCartes;

          htmlModal += `<div class="modal fade" id="${id}" tabindex="-1">
          <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <img src="${image}">
                <h3 class="modal-title" id="${id}">${titre}</h3>
                <p>${description}</p>
                <button type="button" class="btn btn-primary"><a href="${lien}" target="_blank">Voir le projet</a></button>
              </div>
            </div>
          </div>
        </div>`;
        footer.insertAdjacentHTML('afterend', htmlModal);
    });
}




