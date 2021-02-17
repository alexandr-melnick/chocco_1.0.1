(function () {
  const btnComp = document.querySelectorAll(".compound__link");
  const listComp = document.querySelectorAll(".compound__list");

  btnComp.forEach(function callback(item, ndx) {
    item.addEventListener("mouseover", e => {
      e.preventDefault();
      btnComp[ndx].style.background = "#60AACC";
      listComp[ndx].style.display = "flex";
    })
  });

  btnComp.forEach(function callback(item, ndx) {
    item.addEventListener("mouseout", e => {
      e.preventDefault();
      btnComp[ndx].style.background = "#86C3D7";
      listComp[ndx].style.display = "none";
    })
  });

  listComp.forEach(function callback(item, ndx) {
    item.addEventListener("mouseover", e => {
      e.preventDefault();
      listComp[ndx].style.display = "flex";
      btnComp[ndx].style.background = "#60AACC";
    })
  });

  listComp.forEach(function callback(item, ndx) {
    item.addEventListener("mouseout", e => {
      e.preventDefault();
      btnComp[ndx].style.background = "#86C3D7";
      listComp[ndx].style.display = "none";
    })
  });
})();