const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo-svg use");
const mMenu = document.querySelector(".m-menu-toogle");
const mobileMenu = document.querySelector(".mobile");
const body = document.querySelector("body");
window.addEventListener("scroll", () => {
  if (this.scrollY > 1) {
    navbar.classList.add("navbar--light");
    logo.href.baseVal = "./img/sprite.svg#logo";
  } else {
    navbar.classList.remove("navbar--light");
    logo.href.baseVal = "./img/sprite.svg#logo-light";
  }
});

mMenu.addEventListener("click", (event) => {
  event.preventDefault();
  mobileMenu.classList.toggle("is-open");
  body.classList.toggle("open");
});
