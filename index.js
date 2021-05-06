let navbar = document.querySelector('.navbar-go')
let navbarHeight = navbar.offsetHeight;
let textOver = document.querySelector('.text-over');
textOver.style.marginTop = navbarHeight + 'px';

document.addEventListener('scroll', () => {
  // find news blocks and its heights
  let one = document.querySelector('#one');
  let oneHeight = one.offsetHeight;

  let two = document.querySelector('#two');
  let twoHeight = two.offsetHeight;

  let three = document.querySelector('#three');
  let threeHeight = three.offsetHeight;

  let four = document.querySelector('#four');
  let fourHeight = four.offsetHeight;

  let five = document.querySelector('#five');
  let fiveHeight = five.offsetHeight;

  let six = document.querySelector('#six');
  let sixHeight = six.offsetHeight;

  let seven = document.querySelector('#seven');
  let sevenHeight = seven.offsetHeight;

  let eight = document.querySelector('#eight');
  let eightHeight = eight.offsetHeight;

  let nine = document.querySelector('#nine');
  let nineHeight = nine.offsetHeight;

  let ten = document.querySelector('#ten');
  let tenHeight = ten.offsetHeight;

  // date blocks
  let yearOne = document.querySelector('#year-one');
  let yearTwo = document.querySelector('#year-two');
  let yearThree = document.querySelector('#year-three');
  let yearFour = document.querySelector('#year-four');
  let yearFive = document.querySelector('#year-five');
  let yearSix = document.querySelector('#year-six');
  let yearSeven = document.querySelector('#year-seven');
  let yearEight = document.querySelector('#year-eight');
  let yearNine = document.querySelector('#year-nine');
  let yearTen = document.querySelector('#year-ten');

  let positionOne = one.getBoundingClientRect();
  let positionTwo = two.getBoundingClientRect();
  let positionThree = three.getBoundingClientRect();
  let positionFour = four.getBoundingClientRect();
  let positionFive = five.getBoundingClientRect();
  let positionSix = six.getBoundingClientRect();
  let positionSeven = seven.getBoundingClientRect();
  let positionEight = eight.getBoundingClientRect();
  let positionNine = nine.getBoundingClientRect();
  let positionTen = ten.getBoundingClientRect();


  if (positionOne.bottom >= 0 && positionOne.bottom <= window.innerHeight) {
    yearOne.style.display = 'block';
  } else {
    yearOne.style.display = 'none';
  }

  if (positionTwo.bottom >= 0 && positionTwo.bottom <= window.innerHeight) {
    yearOne.style.display = 'none';
    yearTwo.style.display = 'block';
  } else {
    yearTwo.style.display = 'none';
  }

  if (positionThree.bottom >= 0 && positionThree.bottom <= window.innerHeight) {
    yearTwo.style.display = 'none';
    yearThree.style.display = 'block';
  } else {
    yearThree.style.display = 'none';
  }

  if (positionFour.bottom >= 0 && positionFour.bottom <= window.innerHeight) {
    yearThree.style.display = 'none';
    yearFour.style.display = 'block';
  } else {
    yearFour.style.display = 'none';
  }

  if (positionFive.bottom >= 0 && positionFive.bottom <= window.innerHeight) {
    yearFour.style.display = 'none';
    yearFive.style.display = 'block';
  } else {
    yearFive.style.display = 'none';
  }

  if (positionSix.bottom >= 0 && positionSix.bottom <= window.innerHeight) {
    yearFive.style.display = 'none';
    yearSix.style.display = 'block';
  } else {
    yearSix.style.display = 'none';
  }

  if (positionSeven.bottom >= 0 && positionSeven.bottom <= window.innerHeight) {
    yearSix.style.display = 'none';
    yearSeven.style.display = 'block';
  } else {
    yearSeven.style.display = 'none';
  }

  if (positionEight.bottom >= 0 && positionEight.bottom <= window.innerHeight) {
    yearSeven.style.display = 'none';
    yearEight.style.display = 'block';
  } else {
    yearEight.style.display = 'none';
  }

  if (positionNine.bottom >= 0 && positionNine.bottom <= window.innerHeight) {
    yearEight.style.display = 'none';
    yearNine.style.display = 'block';
  } else {
    yearNine.style.display = 'none';
  }

  if (positionTen.bottom >= 0 && positionTen.bottom <= window.innerHeight) {
    yearNine.style.display = 'none';
    yearTen.style.display = 'block';
  } else {
    yearTen.style.display = 'none';
  }

  if (window.scrollY >= 100) {
    navbar.style.opacity = 100/window.scrollY;
    let arrow = document.querySelector('.bounce');
    arrow.style.opacity = 0;
  } else {
    navbar.style.opacity = 100;
  }
});

// window.addEventListener('scroll', function() {
//   let first = document.querySelector('#main-container');
//   var position = element.getBoundingClientRect();

//   // checking whether fully visible
//   if(position.top >= 0 && position.bottom <= window.innerHeight) {
//     console.log('Element is fully visible in screen');
//   }

//   // checking for partial visibility
//   if(position.top < window.innerHeight && position.bottom >= 0) {
//     console.log('Element is partially visible in screen');
//   }
// });



// const initAddDateOnScroll = () => {

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


