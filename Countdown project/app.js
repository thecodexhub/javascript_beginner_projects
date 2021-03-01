const newYear = "1 Jan 2022"; // End Date of the countdown

const daysCountdown = document.getElementById("days");
const hoursCountdown = document.getElementById("hours");
const minutesCountdown = document.getElementById("minutes");
const secondsCountdown = document.getElementById("seconds");

function countdown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();

  const timeDifference = newYearDate - currentDate;

  const totalSeconds = timeDifference / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const seconds = Math.floor(totalSeconds % 60);

  daysCountdown.innerText = days;
  hoursCountdown.innerText = formateTime(hours);
  minutesCountdown.innerText = formateTime(minutes);
  secondsCountdown.innerText = formateTime(seconds);
}

function formateTime (time) {
    return time < 10 ? `0${time}` : `${time}`; 
}

countdown();

setInterval(countdown, 1000);
