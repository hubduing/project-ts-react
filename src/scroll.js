window.onscroll = () => {
  let navbar = document.querySelector(".navbar");

  if(window.scrollY > 200) {
    navbar.classList.add("nav__fixed");
    alert("pageYOffset: " + window.pageYOffset)
  } else {
    navbar.classList.remove("nav__fixed");
  }
  
}
alert("HELLO")
console.log("hello")