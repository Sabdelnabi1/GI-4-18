//Create a program that accepts a number (1-12) as input and logs to the console that number
// and its corresponding month. For example: if the user enters the number 3, then it should return the
// month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).

//created a prompt for the user to input a month
let num = Number(prompt("Please pick a number 1-12.")) - 1;
//created an array of the months of the year and numbers
const month = ["01-January", "02-Feburary", "03-March", "04-April", "05-May", "06-June", "07-July", "08-August", "09-September", "10-October", "11-November", "12-December"];

//Specfied that the number needs to be bigger than 0 and smaller than 11
if (num <= 0 || num > 11) {
    console.log('Invalid Number');
    alert('Invaild Number')
} else {
    console.log(month[num]);
    alert(month[num]);
}