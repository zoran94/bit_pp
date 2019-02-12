/*
Write a program that shows text representation of a day in a week for a number input from 1 to 7. Print output in console. 
For input 1, output should be “Monday”.
*/

var day = 8;

switch (day) {
    case (1):
        console.log("Ponedeljak");
        break;
    case (2):
        console.log("Utorak");
        break;
    case (3):
        console.log("Sreda");
        break;
    case (4):
        console.log("Cetvrtak");
        break;
    case (5):
        console.log("Ppetak");
        break;
    case (6):
        console.log("Subota");
        break;
    default:
        console.log("Nedelja");
}

/*
Write a program that shows text representation of a day in a week for a number input from 1 to 7. All other cases output a message explaining that input must be a number between 1 and 7.
For input 1, output should be “Monday”.
For input 10, output should be “Input must be a number between 1 and 7”.
*/

var input = 3;
var output;
switch (input) {
    case 1:
        output = "monday";
        break;
    case 2:
        output = "tuesday";
        break;
    case 3:
        output = "wednesday";
        break;
    case 4:
        output = "thursday";
        break;
    case 5:
        output = "friday";
        break;
    case 6:
        output = "saturday";
        break;
    case 7:
        output = "sunday";
        break;
    default:
        output = "Input must be a number between 1 and 7"
}
console.log(output);

/*
Write a program that for a 1-7 number input (representing a day in a week) shows if that day is a weekday or weekend. All other cases output a message explaining that input must be a number between 1 and 7.
        For input 2, output should be “It’s weekday”.
For input 6, output should be “It’s weekend”.
For input 12, output should be “Input must be number between 1 and 7”.
*/
var input = 3;
var output;
switch (input) {
    case 1:
        output = "It’s weekday";
        break;
    case 2:
        output = "It’s weekday";
        break;
    case 3:
        output = "It’s weekday";
        break;
    case 4:
        output = "It’s weekday";
        break;
    case 5:
        output = "It’s weekday";
        break;
    case 6:
        output = "It’s weekend";
        break;
    case 7:
        output = "It’s weekend";
        break;
    default:
        output = "Input must be a number between 1 and 7"
}
console.log(output);

/* Write a program that for a 1-12 number input (representing a month in a year) shows that month’s name. All other cases output a message explaining that input must be a number between 1 and 12. 
        For input 2, output should be “February”.
For input 6, output should be “June”.
For input 13, output should be “Input must be a number between 1 and 12”. */
var month = 2
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("input must be between 1 and 12")
}