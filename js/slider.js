const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    centeredSlides: true,
    loop: true,
    initialSlide: 0,
    autoplay: {
        delay: 3000,
    },
    spaceBetween: 0,
    on: {
        slideChangeTransitionEnd: () => updatePagination(),
    }
});

updatePagination();

function updatePagination() {
    const activeSlide = document.querySelector('.swiper-slide-active');
    if (!activeSlide) return;

    const realIndex = parseInt(activeSlide.dataset.real);
    if (isNaN(realIndex)) return;

    document.querySelectorAll('.swiper-pagination-bullet').forEach((bullet, i) => {
        bullet.classList.remove('swiper-pagination-bullet-active');
        if (i === realIndex) {
            bullet.classList.add('swiper-pagination-bullet-active');
        }
    });
}

document.querySelectorAll('.swiper-pagination-bullet').forEach((bullet) => {
    bullet.addEventListener('click', () => {
        const index = parseInt(bullet.dataset.index);
        swiper.slideToLoop(index);
    });
});