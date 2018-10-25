const bgNav =  document.querySelector(".nav__bg__at");

window.addEventListener("scroll", function(){
  if (pageYOffset >= 400) {
    bgNav.style.backgroundColor ="white";
  }
  if (pageYOffset < 400){
    bgNav.style.backgroundColor ="rgba(255, 255, 255, 0.466)";
    bgNav.style.boxShadow = "0px 0px 1px grey";
  } 
})

