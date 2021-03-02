const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT
let employeeBonus


function currentEmployees( array ) {
  for (i=0; i < array.length; i++) {
    console.log(array[i]);
  }// end for loop
}// end currentEmployees

currentEmployees( employees );//TEST should log all employees in array individually

// let employeeBonus = {
//   name: employeeName,
//   bonusPercentage: bonusPercentage,
//   totalCompensation: totalCompensation,
//   totalBonus: totalBonus
// }//end employeeBonus object

console.log( 'Test' );
 
//function to determine bonus calculations
function bonusCalculation( array ) {
  for (i=0; i < array.length; i++) {
  //if rating of 2 or below
  if (employees[i].reviewRating <= 2) {
    console.log(employees[i]);
  }//end of review rating 2 or less
  else if (employees[i].reviewRating === 3) {

  }//end of review rating 3  
  else if (employees[i].reviewRating === 4) {
    
  }//end of review rating 4
  else if (employees[i].reviewRating === 5) {

  }
  
  }//end of for 
}//end of employeeBonus

bonusCalculation( employees );

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

// function x( array ) {
//   for ( let i; i < array.length; i++)
//   if ( array[i].reviewRating === 3 && array[i].annualSalary < 65000) {
//     let bonus = array[i].annualSalary * 4%;//Declare at beginning of function
//     let totalIncome = array[i].annualSalary + bonus;
//     if ( totalIncome < 65000 ){
//       employees.totalCompensation.push( totalIncome );
//     }
//   }
// }