const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar-go');
  const logo   = document.querySelector('#logo');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 40 && window.scrollY < 177) {
        navbar.classList.add('navbar-gray');
        logo.classList.add('img-untwist');
      } else if (window.scrollY >= 177) {
        navbar.classList.add('navbar-red');
        navbar.classList.remove('navbar-gray');
      }
    });
  }
}


document.addEventListener('scroll', () => {
  console.log(window.scrollY);
  initUpdateNavbarOnScroll();
});
