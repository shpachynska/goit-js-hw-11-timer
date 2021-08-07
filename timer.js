const refsForTimer1 = {
  days: document.querySelector('#timer-1 [data-value="days"]'),
  hours: document.querySelector('#timer-1 [data-value="hours"]'),
  mins: document.querySelector('#timer-1 [data-value="mins"]'),
  secs: document.querySelector('#timer-1 [data-value="secs"]'),
};

class CountdownTimer {
  constructor({ targetDate, refs }) {
    this.targetDate = targetDate;
    this.refs = refs;
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
    this.refs.days.textContent = `${days}`;
    this.refs.hours.textContent = `${hours}`;
    this.refs.mins.textContent = `${mins}`;
    this.refs.secs.textContent = `${secs}`;
  }
}

const countdownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('2021-08-20'),
  refs: refsForTimer1,
});
