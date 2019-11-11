// https://medium.com/@ilonacodes/front-end-shorts-how-to-create-parallax-effect-with-vanilla-js-b9f3c92544ed


window.addEventListener('scroll', function(e) {
  // will not work on IE < 9
  var scrolled = window.pageYOffset;
  
  // will not work on IE < 8
  const background = document.querySelector('.secret');
  background.style.top = - (scrolled * 0.5) + 'px';
});