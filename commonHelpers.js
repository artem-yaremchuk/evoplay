import"./assets/styles-cb9e5a36.js";import{S as s}from"./assets/vendor-c8b3e011.js";(()=>{const n=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),l=document.querySelector(".js-close-menu"),r=document.querySelectorAll(".mob-menu-link"),o=()=>{const t=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!t),n.classList.toggle("is-open");const c=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[c](document.body)},i=()=>{n.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body)};e.addEventListener("click",o),l.addEventListener("click",o),r.forEach(t=>{t.addEventListener("click",i)}),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(n.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();new s(".gallery-swiper",{loop:!0,navigation:{nextEl:".gallery-slider-button-next",prevEl:".gallery-slider-button-prev"},breakpoints:{320:{slidesPerView:"auto",spaceBetween:16},1200:{slidesPerView:3,spaceBetween:25}}});const a=document.querySelector(".js-faq-list"),d=n=>{var e;(e=n.target.closest(".js-faq-list-item"))==null||e.classList.toggle("active")};a.addEventListener("click",d);new s(".reviews-swiper",{loop:!0,grid:{rows:2},navigation:{nextEl:".reviews-slider-button-next",prevEl:".reviews-slider-button-prev"},breakpoints:{100:{slidesPerView:1,spaceBetween:16},1200:{slidesPerView:2,spaceBetween:24}}});
//# sourceMappingURL=commonHelpers.js.map
