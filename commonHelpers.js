import"./assets/styles-cc978348.js";import{S as r}from"./assets/vendor-c8b3e011.js";(()=>{const o=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),c=document.querySelectorAll(".mob-menu-link"),n=()=>{const t=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!t),o.classList.toggle("is-open");const l=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[l](document.body)},i=()=>{o.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body)};e.addEventListener("click",n),s.addEventListener("click",n),c.forEach(t=>{t.addEventListener("click",i)}),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(o.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();const d=document.querySelector(".js-faq-list"),a=o=>{var e;(e=o.target.closest(".js-faq-list-item"))==null||e.classList.toggle("active")};d.addEventListener("click",a);new r(".reviews-swiper",{loop:!0,grid:{rows:2},navigation:{nextEl:".reviews-slider-button-next",prevEl:".reviews-slider-button-prev"},breakpoints:{100:{slidesPerView:1,spaceBetween:16},1200:{slidesPerView:2,spaceBetween:24}}});
//# sourceMappingURL=commonHelpers.js.map
