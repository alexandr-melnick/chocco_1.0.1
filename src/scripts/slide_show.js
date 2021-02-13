(function () {

  const findBlock = (alias) => {
    return $(".reviews__display-inner").filter((ndx, item) => {
      return $(item).attr("data-show") == alias;
    })
  }

  $(".interctive-avatar__link").click((e) => {
    e.preventDefault();

    const ava = $(e.currentTarget);
    const target = ava.attr("data-click");
    const showItem = findBlock(target);
    const curAva = ava.closest(".interctive-avatar");

    showItem.addClass("review__active").siblings().removeClass("review__active");
    curAva.addClass("interctive-avatar--active").siblings().removeClass("interctive-avatar--active");
  })
})();