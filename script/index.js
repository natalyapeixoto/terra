const bgNav =  document.querySelector("nav")

window.addEventListener("scroll", function(){
  if (pageYOffset >= 400) {
    bgNav.classList.remove("nav__bg__at")
    bgNav.classList.add("nav__bg__script_at")
  }
  if (pageYOffset < 400){
    bgNav.classList.add("nav__bg__at")
    bgNav.classList.remove("nav__bg__script_at")
  } 
})

