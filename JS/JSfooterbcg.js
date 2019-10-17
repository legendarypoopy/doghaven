const letsChat = document.querySelector('.letschat');

const bodyBgcInfo = document.querySelector('.info');

const footerText = document.querySelector('.footertext'); //not required if confirmed

const btnColor = document.querySelector('.btn5'); //not required if confirmed

const bodyBgcCopyright = document.querySelector('.copyright');

const copyrightText = document.querySelector('.copyrighttext'); //not required if confirmed

const icon1 = document.querySelector('.icon1'); //this cannot work, maybe is due to icons from external web sources

const arrow = document.querySelector('.arrow'); 



letsChat.addEventListener('mouseover', changeColor);
letsChat.addEventListener('mouseout', changeBack);

function changeColor() {
  bodyBgcInfo.style.backgroundColor = '#F3F3F3';
  // footerText.style.color = 'white';
  // btnColor.style.color = 'white';
  // btnColor.style.borderColor = 'white';
  bodyBgcCopyright.style.backgroundColor = '#F3F3F3';
  // copyrightText.style.color = 'white';
  // icon1.style.color = 'pink';
  arrow.style.display = 'contents';
  
}

function changeBack() {
  bodyBgcInfo.style.backgroundColor = 'white';
  // footerText.style.color = '#4c4c4c';
  // btnColor.style.color = '#4c4c4c';
  // btnColor.style.borderColor = '#4c4c4c';
  bodyBgcCopyright.style.backgroundColor = 'white';
  // copyrightText.style.color = '#4c4c4c';
  // icon1.style.color = 'red';
  arrow.style.display = 'none';
}