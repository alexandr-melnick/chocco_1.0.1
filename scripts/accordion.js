const team = document.querySelector(".team__list");

team.addEventListener('click', e => {
  e.preventDefault();
  const target =e.target;
  
  if (target.classList.contains('team__name')) {
    const active = team.querySelector(".team__item.team__item--active");
         
    if (active) {
            let activeAcc = active.querySelector(".team__acc");
      activeAcc.style.height = "0px";
      active.classList.remove("team__item--active");
    } 
    if (!active || active.querySelector(".team__name") !== target) {
      let elem = target.closest(".team__item");
      elem.classList.add("team__item--active");
      let current = elem.querySelector(".team__acc");
      current.style.height = current.scrollHeight + "px";
    }
  } 
})
