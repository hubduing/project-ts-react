(function () {
  
  window.onscroll = () => {
    let navbar = document.querySelector(".navbar");
      if(window.scrollY > 90) {
        navbar.classList.add("nav__fixed");
      } else {
        navbar.classList.remove("nav__fixed");
      }
  }
}());
// Burger hendler
// (function () {
//   const burgerItem = document.querySelector(".burger");
//   //console.log(burgerItem) 
//   // list event
//   const menuCloseItem = document.querySelector('.header__nav-close'); 
//   const menu = document.querySelector(".header__nav");
//   const menuLinks = document.querySelectorAll(".header__item");
//   burgerItem.addEventListener('click', () => {
//      //console.log(1) 
//       menu.classList.add("header__nav_active");
//   });
//   //remove adaptive menu
//   menuCloseItem.addEventListener("click", () => {
//       menu.classList.remove("header__nav_active");
//   });
//   if (window.innerWidth <= 767) {
//       for (let i = 0; i < menuLinks.length; i += 1) {
//           menuLinks[i].addEventListener("click", () => {
//               menu.classList.remove("header__nav_active");
//           });
//       }
//   }
// }());