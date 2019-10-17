// if window is > 600, do the following javascript. Anything <600 won't do.

var limit = 1025;          
if(window.innerWidth>limit){



    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        // document.getElementById("navbar").style.backgroundColor = "red";
      } else {
        document.getElementById("navbar").style.top = "-56px";
      }
      prevScrollpos = currentScrollPos;
    }  



}
//this above close bracket belongs to the var limit
