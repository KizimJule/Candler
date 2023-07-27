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
      slidesPerView: 2,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const accordeon = document.querySelector(".accordeon");
const accordeonTitles = accordeon.querySelectorAll(".accordeon__title");


accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
  accordeonTitle.addEventListener("click", function () {
    const currentText =
      accordeonTitle.parentElement.querySelector(".accordeon__text");

    accordeonTitle.classList.toggle("accordeon__title_active");
    currentText.classList.toggle("accordeon__text_visible");

    if (currentText.classList.contains(".accordeon__text_visible")) {
      currentText.style.maxHeight = currentText.scrollHeight + "px";
    } else {
      currentText.style.maxHeight = null;
    }
  });
});
