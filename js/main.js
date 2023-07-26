const menuBtn = document.querySelector(".menu__btn");
const menuMobile = document.querySelector(".header__menu-list");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("menu-open");
});

const swiperOne = new Swiper(".feedback__slider", {
  loop: true,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperTwo = new Swiper(".certificates__slider", {
  loop: true,
  // slidesPerView: 2.35,
  slidesPerView: "auto",

  breakpoints: {
    1000: {
      spaceBetween: 10,
    },
    1440: {
      spaceBetween: 20,
    },
    900: {
      spaceBetween: 10,
    },
    768: {
      spaceBetween: 10,
    },
    480: {
      spaceBetween: 10,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
