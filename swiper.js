//  const Swiper = document.querySelector('.Swiper');
// const swiper = new swiper('.swiper',{
// import Swiper from 'swiper';
let swiper = new Swiper('.swiper-container', {

    slidePerView: 1,

    effect: "creative",

    creativeEffect: {
        prev:{

            translate: [0,0,-400],
        },
        next: {

            translate: ["100%",0,0],

        },
    },

    loop: true,

    direction: "horizontal",

    autoplay: {
        delay: 5000,
    },

    speed: 400,

    spaceBetween: 100,
});

let swiper2 = new Swiper('.swiper2', {

    slidesPerView: 3,
    spaceBetween: 35,
    slidesPerGroup: 1,
    Loop: true,
    fade: true,
    centerSlide: true,
    grabCursor: true,
    LoopfillGroupwithBLank: true,
    
    autoplay: {
        delay: 5000,
    },

    speed: 400,
    spaceBetween: 100,

    breakpoints:{
        320: {
            slidsePerView: 1,


        },
        768: {
            slidesPerView: 2,

        },
        968: {
            slidesPerView: 3,
        }
    }
});
let swiper3 = new Swiper('.swiper3', {

    slidesPerView: 2,
    spaceBetween: 35,
    slidesPerGroup: 1,
    Loop: true,
    fade: true,
    centerSlide: true,
    grabCursor: true,
    LoopfillGroupwithBLank: true,
    
    autoplay: {
        delay: 5000,
    },

    speed: 400,
    // spaceBetween: 100,

    breakpoints:{
        320: {
            slidsePerView: 1,


        },
        768: {
            slidesPerView: 2,

        },
        968: {
            slidesPerView: 2,
        }
    }
});


