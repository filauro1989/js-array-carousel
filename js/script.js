const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];
const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];
const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
];

const divImg = document.querySelector('.car-center');
const thumbImg = document.querySelector('.thumb-container');

for (let i = 0; i < items.length; i++) {
    let image = `<div class="img-container"><img src="${items[i]}" alt=""><h1>${title[i]}</h1><p>${text[i]}</p></div>`;
    let thumbImage = `<div class="img-container opacity"><img src="${items[i]}" alt=""></div>`;
    
    divImg.innerHTML += image;
    thumbImg.innerHTML += thumbImage;
};

// specifico la variabile che seleziona tutte le immagini inserite
const imagesDom = document.querySelectorAll('.car-center .img-container');
const thumbDom = document.querySelectorAll('.thumb-container .img-container');
// seleziono la prima immagine inserita e gli conferisco la classe first e active
imagesDom[0].classList.add('first', 'active');
thumbDom[0].classList.add('first', 'active');
// seleziono l'ultima immagine e gli conferisco la classe last
imagesDom[imagesDom.length - 1].classList.add('last');
thumbDom[imagesDom.length - 1].classList.add('last');

// dichiaro le variabili per le frecce su e giu
let arrowUp = document.querySelector('.arrow-up');
let arrowDown = document.querySelector('.arrow-down');


arrowDown.addEventListener('click', function() {
    const imageActive = document.querySelector('.car-center .active');
    const thumbActive = document.querySelector('.thumb-container .active');

    let imageClasses = imageActive.classList;
    let thumbClasses = thumbActive.classList;

    let last = false;
    for (let index = 0; index < imageClasses.length; index++) {
        if (imageClasses[index] == 'last') {
            last = true;
        }        
    }

    if(last == false) {
        imageActive.classList.remove('active');
        const imgNext = imageActive.nextElementSibling;
        imgNext.classList.add('active');
        thumbActive.classList.remove('active');
        const thumbNext = thumbActive.nextElementSibling;
        thumbNext.classList.add('active');
    }
});

arrowUp.addEventListener('click', function() {
    const imageActive = document.querySelector('.car-center .active');
    const thumbActive = document.querySelector('.thumb-container .active');

    let imageClasses = imageActive.classList;
    let thumbClasses = thumbActive.classList;

    let first = false;
    for (let index = 0; index < imageClasses.length; index++) {
        if (imageClasses[index] == 'first') {
            first = true;
        }        
    }
    for (let index = 0; index < thumbClasses.length; index++) {
        if (thumbClasses[index] == 'first') {
            first = true;
        }        
    }

    if(first == false) {
        imageActive.classList.remove('active');
        const imgNext = imageActive.previousElementSibling;
        imgNext.classList.add('active');
        thumbActive.classList.remove('active');
        const thumbNext = thumbActive.previousElementSibling;
        thumbNext.classList.add('active');
    }
});



