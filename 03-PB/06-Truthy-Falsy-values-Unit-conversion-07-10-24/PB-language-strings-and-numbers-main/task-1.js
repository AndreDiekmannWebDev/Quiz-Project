/*
Task 1

You have 2 variables containing the birthdates of 2 persons

- extract the year from the 2 dates and save them into 2 new variables
- using the ternary operator on these 2 variables, print message to the console 
like "Fiona is older than Jacob" or * "Jacob is older than Fiona", depending 
on the comparison between the 2 years

*/

let jacobBirthdate = "20/06/1995";
let fionaBirthdate = "12/11/1991";

let jacobBirthYear = Number(jacobBirthdate.slice(-4));
let fionabBirthYear = Number(fionaBirthdate.slice(-4));

let message =
  fionabBirthYear > jacobBirthYear
    ? "Jacob is older than Fiona"
    : "Fiona is older than Jacob";
console.log(message);

/*
Task 1.1

Using the variables from Task 1, calculate the age difference between Jacob and Fiona

Print a message to the console, like:

Fiona is 3 years older than Jacob 

Use conditional statements if needed
*/

let result =
  fionabBirthYear < jacobBirthYear
    ? `Fiona is ${jacobBirthYear - fionabBirthYear} years older than Jacob`
    : `Jacob is ${fionabBirthYear - jacobBirthYear} years older than Fiona`;
console.log(result);
