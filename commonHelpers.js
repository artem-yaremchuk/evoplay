import"./assets/styles-7f8bcfed.js";import{S as l}from"./assets/vendor-c8b3e011.js";(()=>{const o=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),r=document.querySelectorAll(".mob-menu-link"),s=()=>{const t=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!t),o.classList.toggle("is-open");const c=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[c](document.body)},i=()=>{o.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body)};e.addEventListener("click",s),n.addEventListener("click",s),r.forEach(t=>{t.addEventListener("click",i)}),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(o.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();new l(".gallery-swiper",{loop:!0,navigation:{nextEl:".gallery-slider-button-next",prevEl:".gallery-slider-button-prev"},breakpoints:{320:{slidesPerView:"auto",spaceBetween:16},1200:{slidesPerView:3,spaceBetween:25}}});const a=document.querySelector(".js-faq-list"),d=o=>{var e,n;(n=(e=o.target.closest(".js-faq-control-button"))==null?void 0:e.closest(".js-faq-list-item"))==null||n.classList.toggle("active")};a.addEventListener("click",d);new l(".reviews-swiper",{loop:!0,navigation:{nextEl:".reviews-slider-button-next",prevEl:".reviews-slider-button-prev"},breakpoints:{100:{slidesPerView:1,spaceBetween:16,grid:{rows:2}},1200:{slidesPerView:2,spaceBetween:24,grid:{rows:2}}}});
//# sourceMappingURL=commonHelpers.js.map
