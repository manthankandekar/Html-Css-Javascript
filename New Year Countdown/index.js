const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const secondsEl = document.getElementById("seconds");
const minutesEl = document.getElementById("minutes");

const newYearTime = new Date("Jan 1, 2027 00:00:00").getTime();

updatecountdown();

function updatecountdown() {
  const now = new Date().getTime();
  const gap = newYearTime - now;
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % day) / minute);
  const s = Math.floor((gap % day) / second);
  daysEl.innerText = d;
  hoursEl.innerText = h;
  minutesEl.innerText = m;
  secondsEl.innerText = s;
  setTimeout(updatecountdown, 1000);
}
