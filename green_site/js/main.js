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
const overlay = document.querySelector(".overlay");
hambar.addEventListener("click", () => {
  console.log("click");

  mbMenu.classList.add("active");
  overlay.classList.add("active");
  hambar.classList.add("active");
  //스크롤 방지
  document.body.style.overflow = "hidden";
});
overlay.addEventListener("click", () => {
  mbMenu.classList.remove("active");
  overlay.classList.remove("active");
  hambar.classList.remove("active");
  //다시 스크롤 생성
  document.body.style.overflow = "";
});
