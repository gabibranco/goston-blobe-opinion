const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar-go');
  const logo   = document.querySelector('#logo');
  const firstP = document.querySelector('#first-p');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 36 && window.scrollY < 210) {
        navbar.classList.add('navbar-grey');
        logo.classList.add('img-untwist');
        logo.classList.add('logo-small');
        firstP.classList.remove('first-p');
        firstP.classList.add('content-p');
        navbar.classList.remove('navbar-red');
      } else if (window.scrollY >= 210 && window.scrollY < 500) {
        navbar.classList.add('navbar-red');
        navbar.classList.remove('navbar-black');
        logo.classList.remove('img-untwist-black');
        logo.classList.add('img-untwist');
      } else if (window.scrollY >= 500 && window.scrollY < 800) {
        navbar.classList.remove('navbar-red');
        navbar.classList.add('navbar-black');
        logo.classList.remove('img-untwist');
        logo.classList.add('img-untwist-black');
        navbar.classList.remove('navbar-yellow');
      } else if (window.scrollY >= 800 && window.scrollY < 1098) {
        navbar.classList.add('navbar-yellow');
        navbar.classList.remove('navbar-black');
        logo.classList.remove('img-untwist-black');
        logo.classList.add('img-untwist');
        navbar.classList.remove('navbar-blue');
      } else if (window.scrollY >= 1098 && window.scrollY < 1290) {
        navbar.classList.remove('navbar-yellow');
        navbar.classList.add('navbar-blue');
        logo.classList.remove('img-untwist');
        logo.classList.add('img-untwist-black');
        logo.classList.remove('navbar-grey');
      }  else if (window.scrollY >= 1290 && window.scrollY < 1339) {
        navbar.classList.add('navbar-grey');
        navbar.classList.remove('navbar-blue');
        logo.classList.remove('img-untwist-black');
        logo.classList.add('img-untwist');
        navbar.classList.remove('navbar-red');
      } else if (window.scrollY >= 1339 && window.scrollY < 1560) {
        navbar.classList.add('navbar-red');
        navbar.classList.remove('navbar-black');
        navbar.classList.remove('navbar-grey');
        logo.classList.remove('img-untwist-black');
        logo.classList.add('img-untwist');
      }  else if (window.scrollY >= 1560 && window.scrollY < 1773) {
        navbar.classList.remove('navbar-red');
        navbar.classList.add('navbar-black');
        logo.classList.remove('img-untwist');
        logo.classList.add('img-untwist-black');
        navbar.classList.remove('navbar-yellow');
      } else if (window.scrollY >= 1773 && window.scrollY < 1977) {
        navbar.classList.add('navbar-yellow');
        navbar.classList.remove('navbar-black');
        logo.classList.remove('img-untwist-black');
        logo.classList.add('img-untwist');
        navbar.classList.remove('navbar-grey');
      } else if (window.scrollY >= 1977 && window.scrollY < 2190) {
        navbar.classList.add('navbar-grey');
        navbar.classList.remove('navbar-yellow');
        logo.classList.remove('img-untwist-black');
        logo.classList.add('img-untwist');
        navbar.classList.remove('navbar-red');
      } else if (window.scrollY >= 2190) {
        navbar.classList.add('navbar-red');
        navbar.classList.remove('navbar-grey');
        logo.classList.remove('img-untwist-black');
        logo.classList.add('img-untwist');
      }
    });
  }
}


document.addEventListener('scroll', () => {
  console.log(window.scrollY);
  initUpdateNavbarOnScroll();
});
