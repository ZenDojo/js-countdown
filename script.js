const daysEl = document.querySelector('#days')
const hoursEl = document.querySelector('#hours')
const minsEl = document.querySelector('#mins')
const secondsEl = document.querySelector('#seconds')
console.log(daysEl);
// hours
// mins
// seconds

const newYears = '1 Jan 2022'

function countdown() {
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()
    console.log(currentDate.toString());
    const totalSeconds = (newYearsDate - currentDate) / 1000
    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const mintues = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60
    // console.log(newYearsDate - currentDate);

    daysEl.innerHTML = days
    hoursEl.innerHTML = hours
    minsEl.innerHTML = mintues
    secondsEl.innerHTML = formatTime(seconds)
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time
}

setInterval(countdown, 1000);

countdown()