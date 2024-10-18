const menuIcon = document.querySelector(".menu-icon");
const menuIconOpen = document.querySelector(".menu-open-icon");
const overlay = document.querySelector(".overlay");
const menu = document.getElementById("navMenu");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
});

menuIconOpen.addEventListener("click", () => {
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
});
