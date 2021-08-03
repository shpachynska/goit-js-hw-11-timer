const refs = {
  days: document.querySelector("span[data-value-days]"),
  hours: document.querySelector("span[data-value-hours]"),
  mins: document.querySelector("span[data-value-mins]"),
  secs: document.querySelector("span[data-value-secs]"),
};

const countdownTimer = {
  intervalId: null,
  start() {
    const targetDate = new Date("2021-08-20");

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = targetDate - currentTime;
      const time = getTimeComponents(deltaTime);

      updateTimerface(time);
    }, 1000);
  },
};

countdownTimer.start();

// document.addEventListener("DOMContentLoaded", countdownTimer.start());

function updateTimerface({ days, hours, mins, secs }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function getTimeComponents(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}
