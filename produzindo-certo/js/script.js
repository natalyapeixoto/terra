const bgNav =  document.querySelector(".nav__bg__at");

window.addEventListener("scroll", function(){
  console.log(pageYOffset)
  if (pageYOffset >= 400) {
    bgNav.style.backgroundColor ="white";
  }
  if (pageYOffset < 400){
    bgNav.style.backgroundColor ="rgba(255, 255, 255, 0.466)";
  }
    
})