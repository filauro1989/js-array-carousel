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

const imgContainer = document.querySelector('.car-center');
const thumbImg = document.querySelector('.thumb-container');

for (let i = 0; i < items.length; i++) {
    let image = `<div class="img-container"><img src="${items[i]}" alt=""></div>`;
    let thumbImage = `<div class="img-container opacity"><img src="${items[i]}" alt=""></div>`;
    
    imgContainer.innerHTML += image;
    thumbImg.innerHTML += thumbImage;
}

// specifico la variabile che seleziona tutte le immagini centrali inserite
const imagesDom = document.querySelectorAll('.car-center .img-container');
// seleziono la prima immagine inserita e gli conferisco la classe first e active
imagesDom[0].classList.add('first', 'active');
// seleziono l'ultima immagine e gli conferisco la classe last
imagesDom[imagesDom.length - 1].classList.add('last');

// dichiaro le variabili per le frecce su e giu
let arrowUp = document.querySelector('.arrow-up');
let arrowDown = document.querySelector('.arrow-down');


arrowUp.addEventListener('click', function(){

});



