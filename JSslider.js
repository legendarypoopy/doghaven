// Auto Slide every x seconds

// var slideIndex = 0;
//   showSlides();
    
//   function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}
//     slides[slideIndex-1].style.display = "block";
//     setTimeout(showSlides, 4500);
  


//   }

// Next and Previous Buttons
const nextBtn = document.querySelector('.nextbtn');
const prevBtn = document.querySelector('.prevbtn');
// const container = document.querySelector('.slideshow-container');

const aa = document.querySelector('.intro1');
const bb = document.querySelector('.intro2');
const cc = document.querySelector('.intro3');
const dd = document.querySelector('.intro4');
const slider_content = document.querySelector('.slideshow-container');
var image = [aa, bb, cc, dd];

// bb.style.display = 'none';
// cc.style.display = 'none';
// dd.style.display = 'none';

var x;
var slides = document.getElementsByClassName("mySlides");
  for (x = 0; x < slides.length; x++) {
    slides[x].style.display = "none";
  }
  aa.style.display = 'block';

// image[0].style.display = 'none';

let i = 0;

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

function nextImage(){
  nextBtn.style.color = 'red';


  if(i === 3) {
    i= 0;
  }else{
    i = i+1;
  }
    
    // aa.style.display = 'none';
    // bb.style.display = 'none';
    // cc.style.display = 'none';
    // dd.style.display = 'none';

    var y;
    var slides = document.getElementsByClassName("mySlides");
      for (y = 0; y < slides.length; y++) {
      slides[y].style.display = "none";
      }
    image[i].style.display = 'block';

}








