const prompt = require('prompt-sync')()
let speed = prompt("Please enter speed in km/h:")
let demeritPoints 
let speedLimit = 70

//approved speed
if (speed < 70) {
    console.log(`OK!`)
}

//calculation of demerit points
demeritPoints = function calculateDemeritPoints(speed, speedLimit) {
    return (speed - speedLimit)/5
}



// test for demerit points
console.log(demeritPoints(90,70))


