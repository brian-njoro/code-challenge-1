const prompt = require('prompt-sync')()
let speed = prompt("Please enter speed in km/h:")
let demeritPoints 
const speedLimit = 70

//approved speed
if (speed < 70) {
    console.log(`OK!`)
}

//calculation of demerit points
demeritPoints = function calculateDemeritPoints(speed, speedLimit) {
    return Math.floor((speed - speedLimit)/5)
}

if(demeritPoints > 12) {
    alert("YOUR LICENSE HAS BEEN SUSPENDED!!")
}

// test for demerit points
console.log(demeritPoints(90,70))


