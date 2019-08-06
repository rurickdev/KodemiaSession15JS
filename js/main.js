// * -------------  Excercise 1 ---------------- * //
/* 
 * We have a list of employees with their absents days
 * if the daily salary is $450, and there is a discount of
 * 2% of the monthly salary for day
 * show the final salary by employee int this format
 * {name}:${salary}.00
 */

let employeesWithAbsentDays = [['Fulano', 3], ['Mengano', 6], ['Perengano', 5], ['Sultano', 0]]
const DAILY_SALARY = 450
const MONTHLY_SALARY = DAILY_SALARY * 30

for (let index = 0; index < employees.length; index++) {
  let currentEmployee = employees[index][0]
  let currentEmployeeAbsentDays = employees[index][1]
  let salaryDiscount = ((currentEmployeeAbsentDays * 2) / 100) * MONTHLY_SALARY
  let discountedSalary = MONTHLY_SALARY - salaryDiscount

  console.log(`${currentEmployee}:\$${discountedSalary}.00`)
}