const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo-svg use");
const mMenu = document.querySelector(".m-menu-toogle");
const mobileMenu = document.querySelector(".mobile");

const lightModeOn = (event) => {
  navbar.classList.add("navbar--light");
  logo.href.baseVal = "./img/sprite.svg#logo";
};

const lightModeOff = (event) => {
  navbar.classList.remove("navbar--light");
  logo.href.baseVal = "./img/sprite.svg#logo-light";
};

window.addEventListener("scroll", () => {
  this.scrollY > 1 ? lightModeOn() : lightModeOff();
});

const openMenu = (event) => {
  //функция открывания меню
  mobileMenu.classList.add("is-open");
  mMenu.classList.add("menu-close");
  document.body.style.overflow = "hidden";
  lightModeOn();
};
//функция закрывания меню
const closeMenu = (event) => {
  mobileMenu.classList.remove("is-open");
  mMenu.classList.remove("menu-close");
  document.body.style.overflow = "";
  lightModeOn();
};

mMenu.addEventListener("click", (event) => {
  event.preventDefault();
  if (mobileMenu.classList.contains("is-open")) {
    closeMenu();
  } else {
    openMenu();
  }
});

const madalCloseScroll = (event) => {
  if (mobileMenu.classList.contains(".mobile")) {
    lightModeOff();
  } else {
    lightModeOn();
  }
};
