(function () {
  const section = $(".section");
  const display = $(".maincontent");

  const performTransition = sectNum => {
    const posit = sectNum * -100;

    display.css({
      tansform: `translateY(${posit}%)`
    })
  }

  $(window).on("wheel", e => {
    const deltaY = e.originalEvent.deltaY;
    console.log(deltaY);

    if (deltaY > 0) {
      performTransition(2);
    } else {

    }
  })
})();