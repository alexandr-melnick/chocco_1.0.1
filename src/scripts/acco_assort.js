// горизонтальный

;
(function () {
  const open = item => {
    const container = item.closest(".assortment__item");
    container.addClass("assortment__item--active")
    const openWidth = calcWidth();
    const content = item.next('.assortment__item-desc');
    content.find("p").css("min-width", `${openWidth}px`);
    content.width(`${openWidth}px`);
  }

  const close = container => {
    const items = container.find(".assortment__item");
    items.removeClass("assortment__item--active")
    const content = container.find('.assortment__item-desc');
    content.width(0);
  }

  $(".assortment__item-rotate").on('click', e => {
    e.preventDefault();
    const $this = $(e.currentTarget);
    const container = $this.closest(".assortment__list");
    const elemContainer = $this.closest(".assortment__item");

    if (elemContainer.hasClass("assortment__item--active")) {
      close(container);
    } else {
      close(container);
      open($this);
    }

  })

  function calcWidth() {
    const windowWidth = window.innerWidth;
    const items = $(".assortment__item-rotate");
    const itemsWidth = items[0].clientWidth * items.length;
    const width = windowWidth - itemsWidth;
    if (window.matchMedia('(max-width: 768px)').matches) {
      return width
    } else {
      return 524
    }
  }
})();