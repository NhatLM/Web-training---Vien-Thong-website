var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 0,
    centeredSlides: true,
    loop:true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints:{
        1023 :{
            slidesPerView:3,
            slidesPerGroup:1,
        },
        768:{
            slidesPerView:2,
            slidesPerGroup:2,
        }
    }
});

