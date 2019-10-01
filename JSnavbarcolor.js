  var navbar = document.getElementById("navbar");
  // const navbar = document.querySelector('#navbar')

  // This is for class names. But then if use that, the nav bar links won't have hover effects 
  // var navbarfontcolor = document.getElementsByClassName("navbarfontcolor");

  window.addEventListener('scroll', function(e) {
    const lastPosition = window.scrollY

    if (lastPosition > 50 ) {
      navbar.style.backgroundColor = "white";
      // navbarfontcolor.style.color = "blue";
    
      // for (var i = 0; i < navbarfontcolor.length; i++) {
      //   navbarfontcolor[i].style.color ="blue";
      // }
    
    } else {
      navbar.style.backgroundColor = "transparent";
      // navbarfontcolor.style.color = "tomato";

      // for (var i = 0; i < navbarfontcolor.length; i++) {
      //   navbarfontcolor[i].style.color ="blue";
      // }

    }
  })