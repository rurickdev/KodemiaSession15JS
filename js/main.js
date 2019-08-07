// * -------------  Exercise 1 ---------------- * //
/* 
 * We have a list of employees with their absents days
 * if the daily salary is $450, and there is a discount of
 * 2% of the monthly salary for day
 * show the final salary by employee int this format
 * {name}:${salary}.00
 */

const DAILY_SALARY = 450
const MONTHLY_SALARY = DAILY_SALARY * 30

let employeesWithAbsentDays = [
  ['Fulano', 3],
  ['Mengano', 6],
  ['Perengano', 5],
  ['Sultano', 0]]

// ? ------- Homework, format the salary $12,345.67 ---------- // 

function formatSalaryFor(salary) {
  for (let comaPoistion = -3; -comaPoistion < salary.length; comaPoistion -= 4) {
    salary = `${salary.slice((-salary.length), comaPoistion)},${salary.slice(comaPoistion)}`
  }
  return `$${salary}.00`
}

function formatSalaryWhile(salary) {
  let comaPoistion = -3
  while (-comaPoistion < salary.length) {
    salary = `${salary.slice((-salary.length), comaPoistion)},${salary.slice(comaPoistion)}`
    comaPoistion -= 4
  }
  return `$${salary}.00`
}

// ? ------- Homework End --------- // 

for (let index = 0; index < employeesWithAbsentDays.length; index++) {
  let currentEmployeeName = employeesWithAbsentDays[index][0]
  let currentEmployeeAbsentDays = employeesWithAbsentDays[index][1]
  let salaryDiscount = ((currentEmployeeAbsentDays * 2) / 100) * MONTHLY_SALARY
  let discountedSalary = MONTHLY_SALARY - salaryDiscount
  let formatedDiscountedSalary = formatSalaryFor(discountedSalary)
  console.log(`${currentEmployeeName}: \$${discountedSalary}.00`)
}



// * -------------  Exercise 2 ---------------- * //
//  use functions in the exercise 1

const MONTHLY_SALARY_TOO = 450 * 30
const DISCOUNT_PERCENT_TOO = 2
let paysheet = [['Thelma', 5], ['Irving', 3], ['Hector', 1]]

function getDiscountedSalary(discountPercent) {
  return MONTHLY_SALARY_TOO - (MONTHLY_SALARY_TOO * (discountPercent / 100))
}

function showListOfDiscountedEmployees() {
  for (let index in paysheet) {
    let worker = paysheet[index]
    let totalDiscountPercent = worker[1] * DISCOUNT_PERCENT_TOO
    let finalSalary = getDiscountedSalary(totalDiscountPercent)
    console.log(`${worker[0]}: $${finalSalary}`)
  }
}

showListOfDiscountedEmployees()
