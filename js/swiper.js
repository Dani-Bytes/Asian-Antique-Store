// initialize the arts swiper
var artsSwiperElement = document.querySelector('.artsSwiper');
if (artsSwiperElement) {
    var swiper = new Swiper(artsSwiperElement, {
        grabCursor: true,
        effect: 'creative',
        creativeEffect: {
            prev: {
                shadow: false,
                translate: [0, 0, -400],
            },
            next: {
                translate: ['100%', 0, 0],
            },
        },
    });
} else {
    console.error("artsSwiper element not found!");
}