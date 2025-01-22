import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

new Swiper('.reviews-swiper', {
  loop: true,
  grid: {
    rows: 2,
  },
  navigation: {
    nextEl: '.reviews-slider-button-next',
    prevEl: '.reviews-slider-button-prev',
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
  },
});
