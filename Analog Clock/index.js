const hoursEl = document.querySelector(".hours");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");

function updateclock() {
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const hoursDeg = (hours / 12) * 360;
  const secondsDeg = (seconds / 60) * 360;
  const minutesDeg = (minutes / 60) * 360;
  hoursEl.style.transform = `rotate(${hoursDeg}deg)`;
  minutesEl.style.transform = `rotate(${minutesDeg}deg)`;
  secondsEl.style.transform = `rotate(${secondsDeg}deg)`;
  setTimeout(() => {
    updateclock();
  }, 1000);
}

updateclock();
