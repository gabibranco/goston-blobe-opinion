let navbar = document.querySelector(".navbar-go")
let navbarHeight = navbar.offsetHeight;
let textOver = document.querySelector(".text-over");
textOver.style.marginTop = navbarHeight + 'px';

document.addEventListener('scroll', () => {
  // console.log(window.scrollY);
  if (window.scrollY >= 100) {
    navbar.style.opacity = 100/window.scrollY;
    let arrow = document.querySelector(".bounce");
    arrow.style.opacity = 0;
  }
});

// const initUpdateNavbarOnScroll = () => {
//   const navbar = document.querySelector('.navbar-go');
//   const logo   = document.querySelector('#logo');
//   const firstP = document.querySelector('#first-p');
//   if (navbar) {
//     window.addEventListener('scroll', () => {
//       if (window.scrollY >= 36 && window.scrollY < 210) {
//         navbar.classList.add('navbar-grey');
//         logo.classList.add('img-untwist');
//         logo.classList.add('logo-small');
//         firstP.classList.remove('first-p');
//         firstP.classList.add('content-p');
//         navbar.classList.remove('navbar-red');
//       } else if (window.scrollY >= 210 && window.scrollY < 487) {
//         navbar.classList.add('navbar-red');
//         navbar.classList.remove('navbar-black');
//         logo.classList.remove('img-untwist-black');
//         logo.classList.add('img-untwist');
//       } else if (window.scrollY >= 487 && window.scrollY < 800) {
//         navbar.classList.remove('navbar-red');
//         navbar.classList.add('navbar-black');
//         logo.classList.remove('img-untwist');
//         logo.classList.add('img-untwist-black');
//         navbar.classList.remove('navbar-yellow');
//       } else if (window.scrollY >= 800 && window.scrollY < 1098) {
//         navbar.classList.add('navbar-yellow');
//         navbar.classList.remove('navbar-black');
//         logo.classList.remove('img-untwist-black');
//         logo.classList.add('img-untwist');
//         navbar.classList.remove('navbar-blue');
//       } else if (window.scrollY >= 1098 && window.scrollY < 1290) {
//         navbar.classList.remove('navbar-yellow');
//         navbar.classList.add('navbar-blue');
//         logo.classList.remove('img-untwist');
//         logo.classList.add('img-untwist-black');
//         logo.classList.remove('navbar-grey');
//       }  else if (window.scrollY >= 1290 && window.scrollY < 1613) {
//         navbar.classList.add('navbar-grey');
//         navbar.classList.remove('navbar-blue');
//         logo.classList.remove('img-untwist-black');
//         logo.classList.add('img-untwist');
//         navbar.classList.remove('navbar-red');
//       } else if (window.scrollY >= 1613 && window.scrollY < 1820) {
//         navbar.classList.add('navbar-red');
//         navbar.classList.remove('navbar-black');
//         navbar.classList.remove('navbar-grey');
//         logo.classList.remove('img-untwist-black');
//         logo.classList.add('img-untwist');
//       }  else if (window.scrollY >= 1820 && window.scrollY < 2008) {
//         navbar.classList.remove('navbar-red');
//         navbar.classList.add('navbar-black');
//         logo.classList.remove('img-untwist');
//         logo.classList.add('img-untwist-black');
//         navbar.classList.remove('navbar-yellow');
//       } else if (window.scrollY >= 2008 && window.scrollY < 2264) {
//         navbar.classList.add('navbar-yellow');
//         navbar.classList.remove('navbar-black');
//         logo.classList.remove('img-untwist-black');
//         logo.classList.add('img-untwist');
//         navbar.classList.remove('navbar-grey');
//       } else if (window.scrollY >= 2264 && window.scrollY < 2478) {
//         navbar.classList.add('navbar-grey');
//         navbar.classList.remove('navbar-yellow');
//         logo.classList.remove('img-untwist-black');
//         logo.classList.add('img-untwist');
//         navbar.classList.remove('navbar-red');
//       } else if (window.scrollY >= 2478  && window.scrollY < 2714) {
//         navbar.classList.add('navbar-red');
//         navbar.classList.remove('navbar-grey');
//         logo.classList.remove('img-untwist-black');
//         logo.classList.add('img-untwist');
//       } else if (window.scrollY >= 2714) {
//         navbar.classList.add('navbar-black');
//         navbar.classList.remove('navbar-red');
//         logo.classList.add('img-untwist-black');
//         logo.classList.remove('img-untwist');
//       }
//     });
//   }
// }


