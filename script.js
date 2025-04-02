let seconds = 0;
let minutes = 0;
let hours = 0;

setInterval(function getTime() {
  let currentTime = new Date();

  seconds = currentTime.getSeconds();
  secondsAngle = (360 / 60) * seconds;

  minutes = currentTime.getMinutes();
  minutesAngle = (360 / 60) * minutes;

  hours = currentTime.getHours();
  hoursAngle = (360 / 60) * hours;

  document.getElementById(
    "seconds_pointer"
  ).style.transform = `rotate(${secondsAngle}deg)`;

  document.getElementById("minute_pointer").style.transform = `rotate(${
    minutesAngle + secondsAngle / 60
  }deg)`;

  document.getElementById("hour_pointer").style.transform = `rotate(${
    hoursAngle + minutesAngle / 60
  }deg)`;
}, 1000);
