(function () {
  const section = $("section");
  const display = $(".maincontent");

  let inScroll = false;

  section.first().addClass("active");

  const performTransition = sectEq => {
    if (inScroll == false) {
      const posit = sectEq * -100;
      inScroll = true;

      const currentSect = section.eq(sectEq);
      const themeSect = currentSect.attr("data-theme");
      const menuFix = $(".fixed-menu");
      if (themeSect == "white") {
        menuFix.removeClass("fixed-menu--darkgreen")
      } else(
        menuFix.addClass("fixed-menu--darkgreen")
      )
      menuFix
        .find(".fixed-menu__item")
        .eq(sectEq)
        .addClass("fixed-menu__item--active")
        .siblings()
        .removeClass("fixed-menu__item--active");

      display.css({
        transform: `translateY(${posit}%)`
      })
      section.eq(sectEq).addClass("active").siblings().removeClass("active");
      setTimeout(() => {
        inScroll = false;
      }, 1000)
    }

  }

  const scrollViewport = direction => {
    const actSection = section.filter(".active");
    const nextSection = actSection.next();
    const prevSection = actSection.prev();

    if (direction == "next" && nextSection.length) {
      performTransition(nextSection.index())
    }
    if (direction == "prev" && prevSection.length) {
      performTransition(prevSection.index())
    }


  }

  $(window).on("wheel", e => {
    const deltaY = e.originalEvent.deltaY;
    if (deltaY > 0) {
      scrollViewport("next");
    }
    if (deltaY < 0) {
      scrollViewport("prev");
    }

  })

  $(window).on("keydown", e => {
    const key = e.keyCode;
    const tagName = e.target.tagName.toLowerCase();

    if (tagName !== "input" && tagName !== "textarea") {
      if (key == 38) {
        scrollViewport("prev");
      }

      if (key == 40) {
        scrollViewport("next");
      }
    }
  })

  $(".wrapper").on("touchmove", e => e.preventDefault())

  $("[data-scroll-to]").on("click", e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-scroll-to");
    const reqSection = $(`[data-section-id=${target}]`);

    performTransition(reqSection.index());
  })

  $("body").swipe({
    swipe: function (event, direction) {
      if (direction === "up") {
        scrollViewport("next");
      }
      if (direction === "down") {
        scrollViewport("prev");
      }
    }
  });

})();