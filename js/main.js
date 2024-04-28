const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo");
const logoLight = document.querySelector(".logo--light");
const mMenu = document.querySelector(".m-menu-toogle");
const mobileMenu = document.querySelector(".mobile");

const lightModeOn = (event) => {
  navbar.classList.add("navbar--light");
  logo.style.display = "block";
  logoLight.style.display = "none";
};

const lightModeOff = (event) => {
  navbar.classList.remove("navbar--light");
  logo.style.display = "none";
  logoLight.style.display = "block";
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

const swiper = new Swiper(".swiper", {
  speed: 400,
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },
  slidesPerView: 1,
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    800: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});
