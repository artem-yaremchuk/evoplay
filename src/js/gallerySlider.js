import Swiper from 'swiper/bundle';

new Swiper('.gallery-swiper', {
  loop: true,
  navigation: {
    nextEl: '.gallery-slider-button-next',
    prevEl: '.gallery-slider-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});
