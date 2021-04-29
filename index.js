const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar-go');
  const logo   = document.querySelector('#logo');
  const firstP = document.querySelector('#first-p');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 36 && window.scrollY < 142) {
        navbar.classList.add('navbar-grey');
        logo.classList.add('img-untwist');
        logo.classList.add('logo-small');
        firstP.classList.remove('first-p');
        firstP.classList.add('content-p');
        navbar.classList.remove('navbar-red');
      } else if (window.scrollY >= 142 && window.scrollY < 415) {
        navbar.classList.add('navbar-red');
        navbar.classList.remove('navbar-grey');
        navbar.classList.remove('navbar-black');
        logo.classList.remove('img-untwist-black');
        logo.classList.add('img-untwist');
      } else if (window.scrollY >= 415) {
        navbar.classList.remove('navbar-red');
        navbar.classList.add('navbar-black');
        logo.classList.remove('img-untwist');
        logo.classList.add('img-untwist-black');
      }
    });
  }
}


document.addEventListener('scroll', () => {
  console.log(window.scrollY);
  initUpdateNavbarOnScroll();
});
