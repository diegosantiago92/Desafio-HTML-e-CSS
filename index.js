const menu = document.querySelector(".menu");
const menuIcon = document.querySelector(".menuMobile img");

menuIcon.addEventListener("click", function () {
  menu.classList.toggle("active");
});
