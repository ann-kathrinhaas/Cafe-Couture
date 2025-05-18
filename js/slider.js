const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    centeredSlides: true,
    initialSlide: 0,
    //   loop: true,
    //   loopedSlides: 3,
    spaceBetween: 0,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});