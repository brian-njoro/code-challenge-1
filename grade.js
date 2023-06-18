//Propmts user for marks input
const prompt = require('prompt-sync')()
let marksInput = prompt("Please Enter marks:")
let marks = parseFloat(marksInput)

//stops operation if information put in is not a number
if (isNaN(marks)) {
    console.error(`invalid input! Please enter a number.`)
}



