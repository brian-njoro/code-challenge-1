let basicSalary
let paye
//function for calculation of PAYE
function calculatePaye(paye) {
    if (basicSalary <= 24000) {
        return Math.floor((basicSalary - (basicSalary * 0.1)))
    } else if (basicSalary > 24000 && basicSalary <=32333) {
        return Math.floor((basicSalary-(basicSalary * 0.25)))
    } else if (basicSalary > 32333 )
}