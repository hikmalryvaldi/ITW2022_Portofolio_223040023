let menuBar = document.querySelector(".menu-bar");
let menuNav = document.querySelector(".menu");

menuBar.addEventListener("click", () => {
  menuNav.classList.toggle("menu-active");
});

let navBar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  let windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scroll-active", windowPosition);
});
