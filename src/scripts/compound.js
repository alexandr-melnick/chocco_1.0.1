(function () {
  const btnComp = document.querySelector(".compound__link");
  const listComp = document.querySelector(".compound__list");

  btnComp.addEventListener("mouseover", e => {
    e.preventDefault();
    btnComp.style.background = "#60AACC"
    listComp.style.display = "flex";
  })

  btnComp.addEventListener("mouseout", e => {
    e.preventDefault();
    btnComp.style.background = "#86C3D7"
    listComp.style.display = "none";
  })

  listComp.addEventListener("mouseover", e => {
    e.preventDefault();
    listComp.style.display = "flex";
    btnComp.style.background = "#60AACC"
  })

  listComp.addEventListener("mouseout", e => {
    e.preventDefault();
    btnComp.style.background = "#86C3D7"
    listComp.style.display = "none";
  })
})();