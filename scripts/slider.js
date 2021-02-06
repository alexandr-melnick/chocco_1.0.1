const slider = $(".slider__list").bxSlider({
  pager: false,
  controls: false
})

$(".arrow-prev").click( e => {
  e.preventDefault();
  slider.goToPrevSlide();
})

$(".arrow-next").click( e => {
  e.preventDefault();
  slider.goToNextSlide();
})
