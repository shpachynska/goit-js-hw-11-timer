class CountdownTimer {
  constructor({ targetDate, selector }) {
    this.targetDate = targetDate;
    this.selector = selector;
    this.start();
  }
  start() {
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;
      const time = this.getTimeComponents(deltaTime);
      this.updateTimerface(time);
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  getTimeComponents(timeInMs) {
    const days = this.pad(Math.floor(timeInMs / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((timeInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(
      Math.floor((timeInMs % (1000 * 60 * 60)) / (1000 * 60)),
    );
    const secs = this.pad(Math.floor((timeInMs % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }
  updateTimerface({ days, hours, mins, secs }) {
    const refs = this.getRefs();
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
  }

  getRefs() {
    return {
      days: document.querySelector(`${this.selector} [data-value="days"]`),
      hours: document.querySelector(`${this.selector} [data-value="hours"]`),
      mins: document.querySelector(`${this.selector} [data-value="mins"]`),
      secs: document.querySelector(`${this.selector} [data-value="secs"]`),
    };
  }
}

const countdownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('2021-08-20'),
});

const countdownTimer2 = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('2021-09-20'),
});
