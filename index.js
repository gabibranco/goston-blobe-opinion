let navbar = document.querySelector('.navbar-go')
let navbarHeight = navbar.offsetHeight;
let textOver = document.querySelector('.text-over');
let mobile = document.querySelector('.mobile');

textOver.style.marginTop = navbarHeight + 'px';
mobile.style.maxWidth = screen.width + 'px';

document.addEventListener('scroll', () => {
  // find news blocks and its height
  let one = document.querySelector('#one');
  let two = document.querySelector('#two');
  let three = document.querySelector('#three');
  let four = document.querySelector('#four');
  let five = document.querySelector('#five');
  let six = document.querySelector('#six');
  let seven = document.querySelector('#seven');
  let eight = document.querySelector('#eight');
  let nine = document.querySelector('#nine');
  let ten = document.querySelector('#ten');

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

  let captionOne = document.querySelector('#caption-one');
  let captionTwo = document.querySelector('#caption-two');
  let captionThree = document.querySelector('#caption-three');
  let captionFour = document.querySelector('#caption-four');
  let captionFive = document.querySelector('#caption-five');
  let captionSix = document.querySelector('#caption-six');
  let captionSeven = document.querySelector('#caption-seven');
  let captionEight = document.querySelector('#caption-eight');
  let captionNine = document.querySelector('#caption-nine');
  let captionTen = document.querySelector('#caption-ten');

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
    captionOne.style.display = 'block';

    yearOne.style.backgroundColor = 'rgba(155, 20, 23, 0.8)';
    captionOne.style.backgroundColor = 'rgba(155, 20, 23, 0.8)';
  } else {
    yearOne.style.display = 'none';
    captionOne.style.display = 'none';
  }

  if (positionTwo.top <= 280 && positionTwo.bottom >= 430) {
    yearTwo.style.display = 'block';
    captionTwo.style.display = 'block';

    yearTwo.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    captionTwo.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  } else {
    yearTwo.style.display = 'none';
    captionTwo.style.display = 'none';
  }

  if (positionThree.top <= 280 && positionThree.bottom >= 430) {
    yearThree.style.display = 'block';
    captionThree.style.display = 'block';

    yearThree.style.backgroundColor = 'rgba(254, 206, 122, 0.8)';
    captionThree.style.backgroundColor = 'rgba(254, 206, 122, 0.8)';
  } else {
    yearThree.style.display = 'none';
    captionThree.style.display = 'none';
  }

  if (positionFour.top <= 280 && positionFour.bottom >= 430) {
    yearFour.style.display = 'block';
    captionFour.style.display = 'block';

    yearFour.style.color = '#000';
    captionFour.style.color = '#000';

    yearFour.style.backgroundColor = 'rgba(217, 217, 217, 0.8)';
    captionFour.style.backgroundColor = 'rgba(217, 217, 217, 0.8)';
  } else {
    yearFour.style.display = 'none';
    captionFour.style.display = 'none';
  }

  if (positionFive.top <= 280 && positionFive.bottom >= 430) {
    yearFive.style.display = 'block';
    captionFive.style.display = 'block';

    yearFive.style.color = '#000';
    captionFive.style.color = '#000';

    yearFive.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    captionFive.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
  } else {
    yearFive.style.display = 'none';
    captionFive.style.display = 'none';
  }

  if (positionSix.top <= 280 && positionSix.bottom >= 430) {
    yearSix.style.display = 'block';
    captionSix.style.display = 'block';

    yearSix.style.backgroundColor = 'rgba(0, 93, 196, 0.8)';
    captionSix.style.backgroundColor = 'rgba(0, 93, 196, 0.8)';
  } else {
    yearSix.style.display = 'none';
    captionSix.style.display = 'none';
  }

  if (positionSeven.top <= 280 && positionSeven.bottom >= 430) {
    yearSeven.style.display = 'block';
    captionSeven.style.display = 'block';

    yearSeven.style.color = '#000';
    captionSeven.style.color = '#000';

    yearSeven.style.backgroundColor = 'rgba(217, 217, 217, 0.8)';
    captionSeven.style.backgroundColor = 'rgba(217, 217, 217, 0.8)';
  } else {
    yearSeven.style.display = 'none';
    captionSeven.style.display = 'none';
  }

  if (positionEight.top <= 280 && positionEight.bottom >= 430) {
    yearEight.style.display = 'block';
    captionEight.style.display = 'block';

    yearEight.style.color = '#000';
    captionEight.style.color = '#000';

    yearEight.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    captionEight.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
  } else {
    yearEight.style.display = 'none';
    captionEight.style.display = 'none';
  }

  if (positionNine.top <= 280 && positionNine.bottom >= 430) {
    yearNine.style.display = 'block';
    captionNine.style.display = 'block';

    yearNine.style.backgroundColor = 'rgba(254, 206, 122, 0.8)';
    captionNine.style.backgroundColor = 'rgba(254, 206, 122, 0.8)';
  } else {
    yearNine.style.display = 'none';
    captionNine.style.display = 'none';
  }

  if (positionTen.top <= 280 && positionTen.bottom >= 430) {
    yearTen.style.display = 'block';
    captionTen.style.display = 'block';

    yearTen.style.backgroundColor = 'rgba(155, 20, 23, 0.8)';
    captionTen.style.backgroundColor = 'rgba(155, 20, 23, 0.8)';
  } else {
    yearTen.style.display = 'none';
    captionTen.style.display = 'none';
  }

  if (window.scrollY >= 100) {
    navbar.style.opacity = 100/window.scrollY;
    let arrow = document.querySelector('.bounce');
    arrow.style.opacity = 0;
  } else {
    navbar.style.opacity = 100;
  }
});
