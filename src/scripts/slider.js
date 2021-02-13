(function () {
  // const $ = require('fancybox');
  const slider = $(".slider__list").bxSlider({
    pager: false,
    controls: false
  })

  $(".arrow-prev").on("click", e => {
    e.preventDefault();
    slider.goToPrevSlide();
  })

  $(".arrow-next").on("click", e => {
    e.preventDefault();
    slider.goToNextSlide();
  })
})();