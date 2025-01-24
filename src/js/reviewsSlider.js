import Swiper from 'swiper/bundle';

new Swiper('.reviews-swiper', {
  loop: true,
  navigation: {
    nextEl: '.reviews-slider-button-next',
    prevEl: '.reviews-slider-button-prev',
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 16,
      grid: {
        rows: 2,
      },
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 24,
      grid: {
        rows: 2,
      },
    },
  },
});
