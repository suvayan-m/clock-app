const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const day = document.querySelector(".day");
const month = document.querySelector(".month");
const date = document.querySelector(".date");
const year = document.querySelector(".year");
const ampm = document.querySelector(".ampm");

const palette = {
  1: ["#EBF5FB", "#153D58"],
  2: ["#D6EAF8", "#153D58"],
  3: ["#C2E0F4", "#102e42"],
  4: ["#AED6F1", "#102e42"],
  5: ["#9ACCED", "#0a1e2c"],
  6: ["#85C1E9", "#0a1e2c"],
  7: ["#71B7E6", "#050F16"],
  8: ["#5DADE2", "#050F16"],
  9: ["#48A2DF", "#000000"],
  10: ["#3498DB", "#000000"],
  11: ["#2A7AAF", "#FFFFFF"],
  12: ["#1F5B83", "#FFFFFF"],
  13: ["#153D58", "#ebf5fb"],
  14: ["#0A1E2C", "#ebf5fb"],
};

function setColor(hrs) {
  if (hrs >= 18 || (hrs <= 0 && hrs <= 5)) {
    document.querySelector("body").style.backgroundColor = `${palette[14][0]}`;
    document.querySelector("h1").style.color = `${palette[14][1]}`;
    document.querySelector("p").style.color = `${palette[14][1]}`;
  }
  if (hrs === 6) {
    document.querySelector("body").style.backgroundColor = `${palette[11][0]}`;
    document.querySelector("h1").style.color = `${palette[11][1]}`;
    document.querySelector("p").style.color = `${palette[11][1]}`;
  }
  if (hrs === 7) {
    document.querySelector("body").style.backgroundColor = `${palette[9][0]}`;
    document.querySelector("h1").style.color = `${palette[9][1]}`;
    document.querySelector("p").style.color = `${palette[9][1]}`;
  }
  if (hrs === 8) {
    document.querySelector("body").style.backgroundColor = `${palette[7][0]}`;
    document.querySelector("h1").style.color = `${palette[7][1]}`;
    document.querySelector("p").style.color = `${palette[7][1]}`;
  }
  if (hrs === 9) {
    document.querySelector("body").style.backgroundColor = `${palette[5][0]}`;
    document.querySelector("h1").style.color = `${palette[5][1]}`;
    document.querySelector("p").style.color = `${palette[5][1]}`;
  }
  if (hrs === 10) {
    document.querySelector("body").style.backgroundColor = `${palette[3][0]}`;
    document.querySelector("h1").style.color = `${palette[3][1]}`;
    document.querySelector("p").style.color = `${palette[3][1]}`;
  }
  if (hrs === 11) {
    document.querySelector("body").style.backgroundColor = `${palette[1][0]}`;
    document.querySelector("h1").style.color = `${palette[1][1]}`;
    document.querySelector("p").style.color = `${palette[1][1]}`;
  }
  if (hrs === 12) {
    document.querySelector("body").style.backgroundColor = `${palette[1][0]}`;
    document.querySelector("h1").style.color = `${palette[1][1]}`;
    document.querySelector("p").style.color = `${palette[1][1]}`;
  }
  if (hrs === 13) {
    document.querySelector("body").style.backgroundColor = `${palette[3][0]}`;
    document.querySelector("h1").style.color = `${palette[3][1]}`;
    document.querySelector("p").style.color = `${palette[3][1]}`;
  }
  if (hrs === 14) {
    document.querySelector("body").style.backgroundColor = `${palette[5][0]}`;
    document.querySelector("h1").style.color = `${palette[5][1]}`;
    document.querySelector("p").style.color = `${palette[5][1]}`;
  }
  if (hrs === 15) {
    document.querySelector("body").style.backgroundColor = `${palette[7][0]}`;
    document.querySelector("h1").style.color = `${palette[7][1]}`;
    document.querySelector("p").style.color = `${palette[7][1]}`;
  }
  if (hrs === 16) {
    document.querySelector("body").style.backgroundColor = `${palette[9][0]}`;
    document.querySelector("h1").style.color = `${palette[9][1]}`;
    document.querySelector("p").style.color = `${palette[9][1]}`;
  }
  if (hrs === 17) {
    document.querySelector("body").style.backgroundColor = `${palette[11][0]}`;
    document.querySelector("h1").style.color = `${palette[11][1]}`;
    document.querySelector("p").style.color = `${palette[11][1]}`;
  }
}

console.log(palette[1][0], palette[1][1]);
// prettier-ignore
const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// prettier-ignore
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

(function refresh() {
  let currentDate = new Date();
  seconds.innerHTML = `${currentDate.getSeconds()}`.padStart(2, "0");
  minutes.innerHTML = `${currentDate.getMinutes()}`.padStart(2, "0");
  if (currentDate.getHours() === 0) {
    hours.innerHTML = `12`;
    setColor(0);
  }
  if (currentDate.getHours() > 12) {
    hours.innerHTML = `${currentDate.getHours() - 12}`;
    setColor(Number(`${currentDate.getHours()}`));
  }
  if (currentDate.getHours() >= 1 && currentDate.getHours() <= 9) {
    hours.innerHTML = `${currentDate.getHours()}`.padStart(2, "0");
    setColor(Number(`${currentDate.getHours()}`));
  }
  if (currentDate.getHours() >= 10 && currentDate.getHours() <= 11) {
    hours.innerHTML = `${currentDate.getHours()}`;
    setColor(Number(`${currentDate.getHours()}`));
  }
  if (currentDate.getHours() === 12) {
    hours.innerHTML = `${currentDate.getHours()}`;
    setColor(Number(`${currentDate.getHours()}`));
  }
  day.innerHTML = week[currentDate.getDay()];
  month.innerHTML = months[currentDate.getMonth()];
  date.innerHTML = `${currentDate.getDate()}`;
  year.innerHTML = `${currentDate.getFullYear()}`;

  ampm.innerHTML = currentDate.getHours() >= 12 ? "PM" : "AM";
  setTimeout(refresh, 1000);
})();

// FOR FULLSCREEN FUNCTION

const fullscreenToggle = document.getElementById("fullscreen-toggle");
let isFullscreen = false;

fullscreenToggle.addEventListener("click", () => {
  if (!isFullscreen) {
    enterFullscreen();
  } else {
    exitFullscreen();
  }
  isFullscreen = !isFullscreen;
});

function enterFullscreen() {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

(function blink() {
  document.querySelector(".separator").classList.toggle("blink");
  setTimeout(blink, 500);
})();
