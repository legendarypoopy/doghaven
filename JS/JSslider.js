
// To grab Next and Previous buttons
const nextBtn = document.querySelector('.nextbtn');
const prevBtn = document.querySelector('.prevbtn');

// To grab the .intro1-4 divs
const aa = document.querySelector('.intro1');
const bb = document.querySelector('.intro2');
const cc = document.querySelector('.intro3');
const dd = document.querySelector('.intro4');
// const slider_content = document.querySelector('.slideshow-container');
var image = [aa, bb, cc, dd];

// Below are ways to make the display as none, using either array method or direct aa method
// image[0].style.display = 'none';
// aa.style.display = 'none';
// bb.style.display = 'none';
// cc.style.display = 'none';
// dd.style.display = 'none';

// This x is just to make all the .intro1-4 to display as none and then .intro1 to display as block only
var x;
var slides = document.getElementsByClassName("mySlides");
  for (x = 0; x < slides.length; x++) {
    slides[x].style.display = "none";
  }
  aa.style.display = 'block';

// Auto slide every ____ milliseconds
setInterval(nextSlide , 5000);

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

var i = 0;

// NEXT BUTTON
function nextSlide(){
  // This is the same as y (below) to make all the .intro1-4 to display as none but i use y var loop to make the code dynamic so that future new div in arrays will automatically be looped as well 
  // aa.style.display = 'none';
  // bb.style.display = 'none';
  // cc.style.display = 'none';
  // dd.style.display = 'none';

  // This y is just to make all the .intro1-4 to display as none and then .intro1 to display as block only
  var y;
  var slides = document.getElementsByClassName("mySlides");
    for (y = 0; y < slides.length; y++) {
    slides[y].style.display = "none";
    }

  if(i === image.length-1) {
    i= 0;
  }else{
    i = i+1;
  }

  image[i].style.display = 'block';   
}

// PREVIOUS BUTTON
function prevSlide(){
  // nextBtn.style.color = 'blue';
  // aa.style.display = 'none';
  // bb.style.display = 'none';
  // cc.style.display = 'none';
  // dd.style.display = 'none';

  // This y is just to make all the .intro1-4 to display as none and then .intro1 to display as block only
  var y;
  var slides = document.getElementsByClassName("mySlides");
    for (y = 0; y < slides.length; y++) {
    slides[y].style.display = "none";
    }

  if(i === image.length-image.length) {
    i= image.length-1;
  }else{
    i = i-1;
  }

  image[i].style.display = 'block';   
}
