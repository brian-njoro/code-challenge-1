//Propmts user for marks input
const prompt = require('prompt-sync')()
let marksInput = prompt("Please Enter marks:")
let marks = parseFloat(marksInput)

//stops operation if information put in is not a number
if (isNaN(marks)) {
    console.error(`invalid input! Please enter a number.`)
}

//stops operation if input is greater than 100
if(marks > 100){
    console.error(`INVALID INPUT!!`)
}

// evaluate grades
function generateGrades(marks) {
    if(marks > 79) {
        return `your grade is A`
    } else if (marks >= 60 && marks <=79 ) {
        return `your grade is B`
    } else if (marks >= 49 && marks <=59 ) {
        return (`Your grade is C`)
    } else if (marks >= 40 && marks <=49){
        return `Your grade is D`
    } else if (marks < 40 && marks >= 0){
        return `Your grade is E`
    }
    
}

// test for function
console.log(generateGrades(61))
