
import refs from './refs.js'

const { daysC, hoursC, minsC, secondsC, startBtn, stopBtn } = refs
const curDate = document.getElementById('currentDate')
let d = new Date()

const options = {
  // weekday: 'long',
  weekday: 'short',
  year: 'numeric',
  // month: 'long',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
}

const localeD = d.toLocaleString('Uk-uk', options)
console.log(localeD) 

curDate.textContent = localeD

class Timer {
  constructor(finishDate, markup) {
    this.markup = markup
    this.finishDate = finishDate
    this.intID = null
    this.deltaTime = 0
  }
  start() {
    console.log(`Timer started`)
    this.intID = setInterval(() => {
      let currentTime = Date.now() 
      this.deltaTime = this.finishDate - currentTime 
    
      const days = this.pad(Math.floor(this.deltaTime / (1000 * 60 * 60 * 24)))
      const hours = this.pad(
        Math.floor((this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      )
      const mins = this.pad(
        Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60)),
      )
      const seconds = this.pad(
        Math.floor((this.deltaTime % (1000 * 60)) / 1000),
      )
    
      this.insertValues(days, hours, mins, seconds)
    }, 1000)
  }
  stop() {
   
    clearInterval(this.intID)
    this.clearMarkup()
  }
  // ===========
  pad(value) {
    return String(value).padStart(2, '0')
  }
  insertValues(d, h, m, s) {
    const { daysC, hoursC, minsC, secondsC } = this.markup
    daysC.textContent = d
    hoursC.textContent = h
    minsC.textContent = m
    secondsC.textContent = s
  }
  clearMarkup() {
    const { daysC, hoursC, minsC, secondsC } = this.markup
    daysC.textContent = '00'
    hoursC.textContent = '00'
    minsC.textContent = '00'
    secondsC.textContent = '00'
  }

}


const myTimer = new Timer(new Date(`jan 1, 2022`), {
  daysC,
  hoursC,
  minsC,
  secondsC,
})
console.log(myTimer)


startBtn.addEventListener('click', myTimer.start.bind(myTimer))

