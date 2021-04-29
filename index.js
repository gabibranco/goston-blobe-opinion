const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar-go');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 100) {
        navbar.classList.add('navbar-red');
      } else {
        navbar.classList.remove('navbar-red');
      }
    });
  }
}


document.addEventListener('scroll', () => {
  initUpdateNavbarOnScroll();
});
