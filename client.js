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

function currentEmployees( array ) {
  for (i=0; i < array.length; i++) {
    console.log(array[i]);
  }// end for loop
}// end currentEmployees

currentEmployees( employees );//TEST should log all employees in array individually

//function to determine bonus calculations


function bonusCalc( employee ) {
  let bonusP = 0; 
  if ( employee.annualSalary > 65000 ) {
    bonusP -= .01;
  }//end over 65000
  if ( employee.reviewRating <= 2 ){
    bonusP += 0; 
  }//end of employee rating 2
  if ( employee.reviewRating === 3 ){
    bonusP += .04;
  }// end of employee rating 3 
  if ( employee.reviewRating === 4 ){
    bonusP += .06;
  }// end of employee rating 4
  if ( employee.reviewRating === 5 ){
    bonusP += .10;
  }//end of bonus percent calculation 
  if (employee.employeeNumber.length === 4 ) {
    bonusP += .05;
  }// end employee ID length
  if (bonusP > .13) {
    bonusP = .13;
  } // end bonus 13%
  if (bonusP < 0) {
    bonusP = 0;
  } // end bonus 0%
  let newList = {
    name: employee.name,
    bonusPercent: bonusP,
    totalCompensation: employee.annualSalary + bonusP,
    totalBonus: Math.round(employee.annualSalary * bonusP)
  }//end of object 
  console.log( newList ); 
}// end of bonusCalc

bonusCalc( employees[1] );


// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

