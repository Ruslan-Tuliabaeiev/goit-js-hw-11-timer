


// class CountdownTimer {
//   constructor({ selector, targetDate }) {
//     this._selector = selector
//     this._targetDate = targetDate
//   }
//   start() {
//     if (Date.now() < this._targetDate) {
//       let timerId = setInterval(() => {
//         const currentTime = Date.now()
//         const deltaTime = this._targetDate - currentTime
//         this.updateTimer(deltaTime)
//       }, 1000)
//     } else {
//       clearInterval(timerId)
//     }
//   }
//   updateTimer(time) {
//     const days = Math.floor(time / (1000 * 60 * 60 * 24))
//     const hours = this.pad(
//       Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//     )
//     const minutes = this.pad(
//       Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
//     )
//     const seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000))
//     const timer1 = document.querySelector(`${this._selector}`)
//     const dataDays = timer1.querySelector('[data-value="days"]')
//     const dataHours = timer1.querySelector('[data-value="hours"]')
//     const dataMinutes = timer1.querySelector('[data-value="mins"]')
//     const dataSeconds = timer1.querySelector('[data-value="secs"]')
//     dataDays.textContent = days
//     dataHours.textContent = hours
//     dataMinutes.textContent = minutes
//     dataSeconds.textContent = seconds
//   }
//   pad(value) {
//     return String(value).padStart(2, '0')
//   }
// }

// const newTimer1 = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Aug 11, 2022'),
// })
// newTimer1.start()

// const newTimer2 = new CountdownTimer({
//   selector: '#timer-2',
//   targetDate: new Date('Jan 27, 2022'),
// })
// newTimer2.start()

//============== 1=====

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this._selector = selector
    this._targetDate = targetDate
  }

  start() {
    if (Date.now() < this._targetDate) {
      let timerId = setInterval(() => {
        const currentTime = Date.now()
        const deltaTime = this._targetDate - currentTime
        this.updateTimer(deltaTime)
      }, 1000)
    } else {
      clearInterval(timerId)
    }
  }

  updateTimer(time) {
    const timer1 = document.querySelector(`${this._selector}`)
    const dataDays = timer1.querySelector('[data-value="days"]')
    const dataHours = timer1.querySelector('[data-value="hours"]')
    const dataMinutes = timer1.querySelector('[data-value="mins"]')
    const dataSeconds = timer1.querySelector('[data-value="secs"]')

    const days = Math.floor(time / (1000 * 60 * 60 * 24))
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),)
    const minutes = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),)
    const seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000))


    dataDays.textContent = days;
    dataHours.textContent = hours < 10 ? "0" + hours : hours;
    dataMinutes.textContent = minutes < 10 ? "0" + minutes : minutes;
    dataSeconds.textContent = seconds < 10 ? "0" + seconds : seconds;

  }
  pad(value) {
    return String(value).padStart(2, '0')
  }
}

const newTimer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 11, 2022'),
})
newTimer1.start()

const newTimer2 = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Jan 27, 2022'),
})
newTimer2.start()



//===========2==  

// Получаем элементы на странице
// const kigdsan = document.querySelector("#kigdsan");
// const days = document.querySelector("#days");
// const hours = document.querySelector("#hours");
// const minutes = document.querySelector("#minutes");
// const seconds = document.querySelector("#seconds");

// const kigdsan = document.querySelector(`${this._selector}`)
//     const days = timer1.querySelector('[data-value="days"]')
//     const hours = timer1.querySelector('[data-value="hours"]')
//     const minutes = timer1.querySelector('[data-value="mins"]')
//     const seconds = timer1.querySelector('[data-value="secs"]')


// // Дата завершения акции
// const deadline = new Date(`2022-12-31`);

// function updateCounter() {
//   const currentasdupog = new Date();
//   const dist = deadline - currentasdupog;


//   const toDays = Math.floor(dist / 1000 / 60 / 60 / 24);
 
//   const toHours = Math.floor(dist / 1000 / 60 / 60) % 24;
 
//   const toMinutes = Math.floor(dist / 1000 / 60) % 60;

//   const toSeconds = Math.floor(dist / 1000) % 60;

//   days.innerText = toDays;
//   hours.innerText = toHours < 10 ? "0" + toHours : toHours;
//   minutes.innerText = toMinutes < 10 ? "0" + toMinutes : toMinutes;
//   seconds.innerText = toSeconds < 10 ? "0" + toSeconds : toSeconds;
// }

// updateCounter();
// setInterval(updateCounter, 1000);

