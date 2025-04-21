'use strict';

const carouselImages = [
    {   
        'id':'1',
        'url':'./assets/images/motorstormapocalypse.gif'
    },
    {   
        'id':'2',
        'url':'./assets/images/Mortal-Shell-gameplay-1-1076x516.jpg'
    },
    {   
        'id':'3',
        'url':'./assets/images/splitsecond.gif'
    },
    {   
        'id':'4',
        'url':'./assets/images/bloodborne.gif'
    }
]

const containerItems = document.getElementById("container-items");

const loadImages = (carouselImages,container) =>{
    carouselImages.forEach(image => {
        container.innerHTML +=
        `
            <div class="carouselItem">
                <img src='${image.url}'>
            </div>
        `
    })
}

loadImages(carouselImages, containerItems);

let carouselItems = document.querySelectorAll('.carouselItem');

const previous = () => {
    const lastItem = carouselItems[carouselItems.length - 1];
    containerItems.insertBefore(lastItem, carouselItems[0]);
    carouselItems = document.querySelectorAll('.carouselItem'); 
}
const next = () => {
    containerItems.appendChild(carouselItems[0]);
    carouselItems = document.querySelectorAll('.carouselItem');
}

document.querySelector('#previous').addEventListener('click',previous);
document.querySelector('#next').addEventListener('click',next);