let useUTC = true;

let buttonbox = document
  .querySelector(".buttons_box button")
  .addEventListener("click", function () {
    useUTC = !useUTC;

    document.querySelector("#circle_path + text textPath").textContent = useUTC
      ? "UTC TIME"
      : "LOCAL TIME";
  });

let seconds = 0;
let minutes = 0;
let hours = 0;

setInterval(function getTime() {
  let currentTime = new Date();

  miliseconds = currentTime.getUTCMilliseconds();
  milisecondsAngle = (360 / 1000) * miliseconds;

  seconds = currentTime.getUTCSeconds();
  secondsAngle = (360 / 60) * seconds;

  minutes = currentTime.getUTCMinutes();
  minutesAngle = (360 / 60) * minutes;

  hours = useUTC ? currentTime.getUTCHours() : currentTime.getHours();
  hoursAngle = (360 / 12) * hours;

  document.getElementById("seconds_pointer").style.transform = `rotate(${
    secondsAngle + milisecondsAngle / 60
  }deg)`;

  document.getElementById("minute_pointer").style.transform = `rotate(${
    minutesAngle + secondsAngle / 60
  }deg)`;

  document.getElementById("hour_pointer").style.transform = `rotate(${
    hoursAngle + minutesAngle / 12
  }deg)`;
}, 10);
