'use strict';
let nextBtn = document.querySelector('.carousel__next'); // következő nyíl, gomb, szöveg
let prevBtn = document.querySelector('.carousel__prev'); // előző nyíl, gomb, szöveg
let slider = document.querySelector('.carousel__container'); // slide-okat tartalmazó konténer
let sliderLength = slider.querySelectorAll('.slide').length; // slide-ok száma (most 3 db)
let pageCounter = document.querySelector(".carousel__pages");
let container = document.querySelector(".carousel__pages p");
let count = 1; // számláló 1-es értékkel

let nextSlide = () => {
    var firstBullet = document.querySelector(".carousel__bullets .bullet:first-child");
    var secondBullet = document.querySelector(".carousel__bullets .bullet:nth-child(2)");
    var distanceBetweenTheTwoFirstBullet = secondBullet.offsetLeft - firstBullet.offsetLeft;
    if(count < sliderLength) {
        slider.style.left = "-" + count * 50 + "vw";
        document.querySelector('.carousel__bullets .bullet .active').style.left =  count * distanceBetweenTheTwoFirstBullet + "px";
        count++;
        container.innerHTML  = count + " / " + sliderLength;
    } else if (count >= sliderLength)  {
        return false;
    }
    if (count > 1) {
        document.querySelector('.carousel__prev').style.visibility = "visible";
    }
    if (count == sliderLength) {
        document.querySelector('.carousel__next').style.visibility = "hidden";
    } else if (count < sliderLength) {
        document.querySelector('.carousel__next').style.visibility = "visible";
    }
}

let prevSlide = () => {
    var firstBullet = document.querySelector(".carousel__bullets .bullet:first-child");
    var secondBullet = document.querySelector(".carousel__bullets .bullet:nth-child(2)");
    var distanceBetweenTheTwoFirstBullet = secondBullet.offsetLeft - firstBullet.offsetLeft;
    if(count > 1) {
        count = count - 2;
        slider.style.left = "-" + count * 50 + "vw";
        document.querySelector('.carousel__bullets .bullet .active').style.left =  count * distanceBetweenTheTwoFirstBullet + "px";
        count++;
        container.innerHTML  = count + " / " + sliderLength;
    } else if(count = 1) {
        return false;
    }
    if (count == sliderLength) {
        document.querySelector('.carousel__next').style.visibility = "hidden";
    } else if (count < sliderLength) {
        document.querySelector('.carousel__next').style.visibility = "visible";
    }
    if (count == 1) {
        document.querySelector('.carousel__prev').style.visibility = "hidden";
    }
}

function getTheBullets () {
    for (let i = 0; i < sliderLength; i++) {
        var dot = document.createElement('div');
        dot.classList.add("bullet");
        document.querySelector('.carousel__bullets').appendChild(dot);
    }
    var activeDot = document.createElement('div');
    activeDot.classList.add("active");
    document.querySelector('.carousel__bullets .bullet').appendChild(activeDot);
}

nextBtn.addEventListener('click', function () {
    nextSlide();
});

prevBtn.addEventListener('click', function () {
    prevSlide();
});

document.addEventListener('DOMContentLoaded', function () {
    if (count == 1) {
        document.querySelector('.carousel__prev').style.visibility = "hidden";
    }
    container.innerHTML  = count + " / " + sliderLength;
    getTheBullets();
});
// const navigationBullets = document.querySelectorAll('.carousel__bullets div');
// for (const navigationBullet of navigationBullets) {
//     navigationBullet.addEventListener('click', function (e) {
//         e.target.parentElement.querySelectorAll( ".active" ).forEach( e =>
//         e.classList.remove( "active" ) );

//         e.target.classList.add( "active" );
//         // count = this.id;
//         // count -= 1;
//         // slider.style.left = "-" + count * 500 + "px";
//         // count++;
//         console.log(count);
//     });
// }