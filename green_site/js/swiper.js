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
  //   페이지네이션
  pagination: {
    el: ".prodruct .swiper-pagination",
  },
  // 내비게이션(좌우 화살푶)
  navigation: {
    nextEl: ".productSwiper .swiper-button-next",
    prevEl: ".productSwiper .swiper-button-prev",
  },
});
