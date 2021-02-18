(function () {
  const player = document.querySelector(".video__player");
  const duraionProgress = document.querySelector(".video__progress");
  const soundControl = document.querySelector(".video__volume-level");
  const playBigBtn = document.querySelector('.video__playbig-icon');

  let intervalId;
  let soundLevel;
  const MAX_SOUND_LEVEL = 10;
  const NORMAL_UPDATE_RANGE = 1000 / 66;

  player.volume = 0.5;
  soundControl.value = player.volume * MAX_SOUND_LEVEL;

  document.addEventListener('DOMContentLoaded', function () {

    player.addEventListener('canplaythrough', () => {
      duraionProgress.max = player.duration;
    })

    duraionProgress.min = 0;
    duraionProgress.value = 0;

    soundControl.min = 0;
    soundControl.max = MAX_SOUND_LEVEL;

    initPlayBtn();
    addListener();
  })

  function initPlayBtn() {
    const playBtns = document.querySelectorAll(".play");
    playBtns.forEach(btn => {
      btn.addEventListener('click', playStop);
    });

    const micControl = document.querySelector(".video__volume");
    micControl.addEventListener('click', soundOff)
  }

  function addListener() {

    player.addEventListener('click', playStop);

    duraionProgress.addEventListener('input', setDurationVideo);
    duraionProgress.addEventListener('mousedown', stopInterval);

    soundControl.addEventListener('input', changeSoundVolume)
  }

  function playStop() {
    playBigBtn.classList.toggle("video__playbig-icon--activePlay");

    if (player.paused) {
      intervalId = setInterval(updateDuration, NORMAL_UPDATE_RANGE);
      player.play();
    } else {
      stopInterval();
    }
  }

  function updateDuration() {
    duraionProgress.value = player.currentTime;
  }

  function setDurationVideo() {
    player.currentTime = duraionProgress.value;
    intervalId = setInterval(updateDuration, NORMAL_UPDATE_RANGE);

    if (player.paused) {
      player.play();
      playBigBtn.classList.add("video__playbig-icon--activePlay");
    }
  }

  function stopInterval() {
    player.pause();
    clearInterval(intervalId);
  }

  function soundOff() {
    if (player.volume == 0) {
      player.volume = soundLevel;
      soundControl.value = soundLevel * MAX_SOUND_LEVEL;
    } else {
      soundLevel = player.volume;
      player.volume = 0;
      soundControl.value = 0;
    }
  }

  function changeSoundVolume() {
    player.volume = soundControl.value / MAX_SOUND_LEVEL;
  }

})();