// Step 1: Get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.items');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

nextDom.onclick = function() {
    showSlider('next');    
};

prevDom.onclick = function() {
    showSlider('prev');    
};

function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .items');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .items');
    
    if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }

    // Remove "next" or "prev" class after animation
    setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, 300); // Assuming this is the duration of your CSS animation
}
