const proSwiper = new Swiper(".productSwiper", {
  slidesPerView: 3,
  spaceBetween: 24,
  loop: true,
  //반응형
  breakpoints: {
    0: {
      slidesPerView: 1.3,
      spaceBetween: 15,
    },
    390: {
      slidesPerView: 2,
      spaceBetween: 15,
    },

    768: {
      slidesPerView: 3.3,
      spaceBetween: 24,
    }, //768이상
  },
});

//모바일 메뉴
const hambar = document.querySelector("#hamburger");
const mbMenu = document.querySelector(".mobil-menu");
hambar.addEventListener("click", () => {
  mbMenu.classList.add("active");
});
