const hamburg = document.querySelector(".hamburger");
const mClose = document.querySelector(".screen-menu__close");
const mScreen = document.querySelector(".screen-menu");

hamburg.addEventListener("click", evt => {
  evt.preventDefault();
  mScreen.style.display = "flex";
})
mClose.addEventListener("click", evt => {
  evt.preventDefault();
  mScreen.style.display = "none";
})