'use strict'

// // TASK 1 - Write a function to convert a number from one base(radix) to another.
// //     Hint: Use one of the built -in functions and toString method of one of the built -in Object Wrappers;

// // 'ff', 16, 8 -> 377

function convertNum(num, radix1, radix2) {
    var a = parseInt(num, radix1);
    var b = a.toString(radix2);
    return b;
}

console.log(convertNum('ff', 16, 8));


// // TASK 2 - Write a JavaScript function that reverses a number.typeof result of the function should be “number”.

// // 12345 -> 54321

function reverseNum(num) {
    var numToStr = new String(num);
    var output = "";
    for (var i = numToStr.length - 1; i >= 0; i--) {
        output += numToStr[i];
    }
    return Number(output);
}

console.log(reverseNum(12345));


// // TASK 3 - Write a JavaScript function that returns a passed string with letters in alphabetical order.
// //     Note: Assume punctuation, numbers and symbols are not included in the passed string.

// // “Webmaster” -> “abeemrstw”

function alphabetical(str) {
    return str.toLowerCase().split("").sort().join("");
}

console.log(alphabetical("Webmaster"));

// TASK 4 - Write a function to alphabetize words of a given string.Alphabetizing a string means rearranging the letters so they are sorted from A to Z.

// 	"Republic Of Serbia" -> "Rbceilpu Of Sabeir"


    function Alphabetize(str){
        var splited = str.split("");
       
        for(var i = 0; i < splited.length; i++){
            for(var j = 0; j < splited[i].length; j++){

                var sorted = splited[i][j]
                
            }
        }
            return sorted
        //return splited
    }

    console.log(Alphabetize("Republic Of Serbia"))







// // TASK 5 - Write a function to split a string and convert it into an array of words.

// // 	"John Snow" -> ['John', 'Snow']

function splitString(str) {
    return str.split(" ");
}

console.log(splitString("John Snow"));




// TASK 6 - Write a function to convert a string to its abbreviated form. 

// 	"John Snow" -> "John S."


function abbreviatedForm(str){

    var splited = str.split(" ")
    for(var i =0; i < splited.length; i++){
        if(typeof splited[i] !== "string") return ""
        return splited[0] + " " + splited[1][0] + "."
    }
    return splited
}
console.log(abbreviatedForm("John Snow"))








// TASK 7 - Write a function that can pad(left, right) a string to get to a determined length.

// 	'0000', 123, 'l' -> 0123
// '00000000', 123, 'r' -> 12300000

// TASK 8 - Write a function to capitalize the first letter of a string and returns modified string.

// "js string exercises" -> "Js string exercises"


    function capitalize(str){

        if(typeof str !== "string")
            return ""
            return str.charAt(0).toUpperCase() + str.slice(1)
        
    }
console.log(capitalize("js string exercises"))




// TASK 9 - Write a function to hide email addresses to protect them from unauthorized users.

// 	"somerandomaddress@example.com" -> "somerand...@example.com"









// TASK 10 - Write a program that accepts a string as input and swaps the case of each character.For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
// var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// var LOWER = 'abcdefghijklmnopqrstuvwxyz';

// "The Quick Brown Fox" -> "tHE qUICK bROWN fOX"

        function caseLetters(str){

            
            
            
            var toSmall = str.toUpperCase().split(" ");
            for(var i = 0; i < toSmall.length; i++){
                if(typeof toSmall[i] !== "string")return ""
                return toSmall[i].charAt(0).toLowerCase() + toSmall[i].slice(1).toUpperCase();
            }
            return toSmall
        }
        console.log(caseLetters("The Quick Brown Fox"))
////////////

        function caseLetters(str){

            
            
            
            var toSmall = str.toUpperCase().split(" ");
            for(var i = 0; i < toSmall.length; i++){
                for(var j = 0; j <  toSmall[i].length; j++){
                if(typeof toSmall[i] !== "string")return ""
                return toSmall[i][j].charAt(0).toLowerCase() + toSmall[i][j].slice(1).toUpperCase();
            }
        }
            return toSmall
        }
        console.log(caseLetters("The Quick Brown Fox"))
