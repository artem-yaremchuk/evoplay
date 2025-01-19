const navLinks = document.querySelectorAll('.js-legal-nav-link');

navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('current');
    link.setAttribute('aria-current', 'page');
  }
});
