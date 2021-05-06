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

  // console.log('positionOne.top', positionOne.top);
  // console.log('one.offsetHeight', one.offsetHeight);
  // console.log('yearOne.offsetHeight', yearOne.offsetHeight);
  // console.log('positionOne.bottom', positionOne.bottom);
  // console.log('positionTwo.top', positionTwo.top);
  // console.log('positionTwo.bottom', positionTwo.bottom);
  // console.log('');

  if (positionOne.top <= 280 && positionOne.bottom >= 430) {
    yearOne.style.display = 'block';
    yearOne.style.backgroundColor = 'rgba(155, 20, 23, 0.8)';
  } else {
    yearOne.style.display = 'none';
  }

  if (positionTwo.top <= 280 && positionTwo.bottom >= 430) {
    yearOne.style.display = 'none';
    yearTwo.style.display = 'block';
    yearTwo.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';

  } else {
    yearTwo.style.display = 'none';
  }

  if (positionThree.top <= 280 && positionThree.bottom >= 430) {
    yearTwo.style.display = 'none';
    yearThree.style.display = 'block';
    yearThree.style.backgroundColor = 'rgba(254, 206, 122, 0.8)';
  } else {
    yearThree.style.display = 'none';
  }

  if (positionFour.top <= 280 && positionFour.bottom >= 430) {
    yearThree.style.display = 'none';
    yearFour.style.display = 'block';
    yearFour.style.color = '#000';
    yearFour.style.backgroundColor = 'rgba(217, 217, 217, 0.8)';
  } else {
    yearFour.style.display = 'none';
  }

  if (positionFive.top <= 280 && positionFive.bottom >= 430) {
    yearFour.style.display = 'none';
    yearFive.style.display = 'block';
    yearFive.style.color = '#000';
    yearFive.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
  } else {
    yearFive.style.display = 'none';
  }

  if (positionSix.top <= 280 && positionSix.bottom >= 430) {
    yearFive.style.display = 'none';
    yearSix.style.display = 'block';
    yearSix.style.backgroundColor = 'rgba(0, 93, 196, 0.8)';
  } else {
    yearSix.style.display = 'none';
  }

  if (positionSeven.top <= 280 && positionSeven.bottom >= 430) {
    yearSix.style.display = 'none';
    yearSeven.style.display = 'block';
    yearSeven.style.color = '#000';
    yearSeven.style.backgroundColor = 'rgba(217, 217, 217, 0.8)';
  } else {
    yearSeven.style.display = 'none';
  }

  if (positionEight.top <= 280 && positionEight.bottom >= 430) {
    yearSeven.style.display = 'none';
    yearEight.style.display = 'block';
    yearEight.style.color = '#000';
    yearEight.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
  } else {
    yearEight.style.display = 'none';
  }

  if (positionNine.top <= 280 && positionNine.bottom >= 430) {
    yearEight.style.display = 'none';
    yearNine.style.display = 'block';
    yearNine.style.backgroundColor = 'rgba(254, 206, 122, 0.8)';
  } else {
    yearNine.style.display = 'none';
  }

  if (positionTen.top <= 280 && positionTen.bottom >= 430) {
    yearNine.style.display = 'none';
    yearTen.style.display = 'block';
    yearTen.style.backgroundColor = 'rgba(155, 20, 23, 0.8)';
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
//   if(position.top < window.innerHeight && position.top >= 30) {
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


