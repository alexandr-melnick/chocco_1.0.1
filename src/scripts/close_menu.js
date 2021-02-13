(function () {
  const hamburg = document.querySelector(".hamburger");
  const mClose = document.querySelector(".screen-menu__close");
  const mScreen = document.querySelector(".screen-menu");
  const body = document.body;

  hamburg.addEventListener("click", evt => {
    evt.preventDefault();
    mScreen.style.top = "0";
    mScreen.style.opacity = "1";
    body.style.overflow = "hidden";
  })
  mClose.addEventListener("click", evt => {
    evt.preventDefault();
    mScreen.style.top = "-100%";
    mScreen.style.opacity = "0";
    body.style.overflow = "scroll";
  })
})();