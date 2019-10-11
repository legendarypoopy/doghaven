const toggle = document.querySelector('.menu_toggle');

const button = document.querySelector('.nextbtn');

const dogLogo = document.querySelector('#logo');

const ghostMenu = document.querySelector('#mobilemenu');

const navBgColor = document.querySelector('#navbar')

toggle.addEventListener('click', doThis);

function doThis(){

  // button.style.color = 'blue';
  // dogLogo.style.backgroundColor = 'pink';

  if (dogLogo.style.display === "block") {
    dogLogo.style.display = "none";
    navBgColor.style.backgroundColor = 'transparent';
  } else {
    dogLogo.style.display = "block";
    navBgColor.style.backgroundColor = '#F3F3F3';

  }

  if (ghostMenu.style.display === "block") {
    ghostMenu.style.display = "none";
  } else {
    ghostMenu.style.display = "block";
  }


}