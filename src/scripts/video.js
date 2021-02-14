(function () {
  const player = document.querySelector(".video__player");
  const duraionProgress = document.querySelector(".video__progress");
  const soundControl = document.querySelector(".video__volume-level");

  let intervalId;
  let soundLevel;
  const MAX_SOUND_LEVEL = 10;
  const NORMAL_UPDATE_RANGE = 1000 / 66;
  duraionProgress.addEventListener('input', e => {
    console.log(e.target)
  })
  document.addEventListener('DOMContentLoaded', function () {



  })

})();