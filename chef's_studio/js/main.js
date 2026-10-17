//hamburger 햄버거 메뉴클릭
const hamburgerBtn = document.querySelector(".hamburger");
//console.log(hamburgerBtn);
const menu = document.querySelector(".menu");
console.log(menu);

hamburgerBtn.addEventListener("click", () => {
  //메뉴 열기&닫기
  menu.classList.toggle("show");
});

//화면 변경시 메뉴 닫기
window.addEventListener("resize", () => {
  menu.classList.remove("show");
});
//창을 조금이라도 움직이면 창이 없어짐
