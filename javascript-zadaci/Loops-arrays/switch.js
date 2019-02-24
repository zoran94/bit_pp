// switch statements

// Write a program that shows text representation of a day in a week for a number input from 1 to 7. Print output in console. 
//For input 1, output should be “Monday”.
var number = 7;
switch(number){
    case 1:
    console.log("monday");
    break;
    case 2:
    console.log("tuesday");
    break;
    case 3:
    console.log("wednseday");
    break;
    case 4:
    console.log("thursday");
    break;
    case 5:
    console.log("friday");
    break;
    default:
    console.log("write correct answer")

}


 /* Write a program that for a string input of a grade from “A”-“F” outputs
  a proper info message about that grade in the following manner: A - "Good job"", 
  B - "Pretty good"", C - "Passed"", D - "Not so good"",
  F - "Failed". Input different from letters A-F outputs a message "Unknown grade" */
  var number = "C"
  switch(number){
      case "A":
      console.log("Great Job!")
      break;
      case "B":
      console.log("Pretty good!")
      break;
      case "C":
      console.log("Passed!")
      break;
      case "D":
      console.log("Not so good!")
      break;
      default:
      console.log("Incorrect answer!")

  }

  
  
