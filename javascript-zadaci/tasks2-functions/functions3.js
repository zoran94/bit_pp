
//  task 1vWrite a function to check whether the `input` is a string or not.

// "My random string" -> true
// 12 -> false

function isString(str){

    if(typeof str === "string"){
        return true
    }
    return false


}
console.log(isString("My random string"));

// task 2 Write a function to check whether a string is blank or not.

// "My random string" -> false
// " " -> true
// 12 -> false
// false -> false
function checkForString(input){

    if(input === " "){
        return true
    }
    return false
}
console.log(checkForString("my random str"))

// task 3 Write a function that concatenates a given string n times (default is 1).
// "Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"
function concatString(str, n){
    var result = "";
    for(var i = 0; i < n; i++){
        result+=str;
      
    }

    return result
   
    
}
console.log(concatString("Ha", 2));

// task 4 Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2

function numOfOccurences(str, str2){

    var count = 0;
    for(var i = 0; i < str.length; i++){
        if(str[i] === str2){
            count++
        }
    }
    return count;

}
console.log(numOfOccurences("my random string is nnnnn", "n"));

// task 5 Write a function to find the position of the first occurrence of a character in a string. 
// The result should be in human numeration form. If there are no occurrences of the character, the function should return -1.


function findFirstOccurence(str, input){

    for(var i = 0; i < str.length; i++){
        if(str[i] == input){
            return i;
            break;
        }
        else{
            return -1
        }
    }
}
console.log(findFirstOccurence("str-t", "+"));


// task 6 Write a function to find the position of the last occurrence of a character in a string.
//  The result should be in human numeration form. If there are no occurrences of the character, function should return -1.

function findLastOccurence(str, input){
    var index = 0;
    for(var i = str.length -1; i > 0; i-- ){
            if(str[i] == input){
                index = i;
                break;
            }else{
                index = -1
            }
    }
    return index
}
console.log(findLastOccurence("my-rand3m-", 3))


// task 7 Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

// "My random string" -> ["M", "y", null, "r", "a"]
// "Random" -> ["R", "a", "n", "d", "o", "m"]

function convertStringInArray(str){

var newArr = [];
for(var i = 0; i < str.length; i++){
    if(str[i] === " "){
        
        newArr[newArr.length] = null
    }else{
        newArr[newArr.length] = str[i]
    }
}
        return newArr
}
console.log(convertStringInArray("random arr"));

// task 8 Write a function that accepts a number as a parameter and checks if the number is prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function isPrime(num){
    if(num === 1){
        return false
    }else if(num === 2){
        return true
    };
    for(var i = 2; i < num; i++){
        if(num % i === 0){
            return "num is not prime"
        }
    }
    return "num is prime"
        
    
}
console.log(isPrime(7));

// task 9  Write a function that replaces spaces in a string with provided separator. 
// If separator is not provided, use “-” (dash) as the default separator.

// "My random string", "_" -> "My_random_string"
// "My random string", "+" -> "My+random+string"
// "My random string" -> "My-random-string"
function replaceSpace(str, sep){
    var int = "";
    for(var i = 0; i < str.length; i++){

        if(str[i] === " "){
            int+=sep 
        }else{
            int+=str[i]
        }

    }
    return int
};
console.log(replaceSpace("my random string", "+"));

// task 10  Write a function to get the first n characters and add “...” at the end of newly created string.

function getFirst(str, n){
        var toStr = "";
    for(var i = 0; i < n; i++){

            toStr+= str[i];
            
    }
    return toStr = toStr + "..."
}
console.log(getFirst("string four is mine", 5));

//  task 11 Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]

function convertNumbers(arr){

    var array = [];
    var count = 0;
    for(var i = 0; i < arr.length; i++){
       var item = arr[i];
       var number = parseFloat(item);
       if(!isNaN(number) && isFinite(number)){
           array[array.length] = number;
       }else {
           count++;
       }
    }
return array
}
console.log(convertNumbers(["1", "21", undefined, "42", "1e+3", Infinity]))

// task 12 Write a function to calculate how many years there are left until 
// retirement based on the year of birth. Retirement for men is at age of 65 
// and for women at age of 60. If someone is already retired, a proper message should be displayed.

function calculateAge(yearOfBirth){
    var num = parseInt(2019 - yearOfBirth);
    return num;
}


function yearsLeft(gender, num){
        
    if(gender === "female"){
        return num >= 60
    }else if (gender === "male"){
        return num >= 65
    }
        
}
function untilRetirement(yearOfBirth, gender) {

    var num  = calculateAge(yearOfBirth);
    if(yearsLeft(gender, num)){
        return "You are already retired"
    }
        if(gender === "male"){
            return 65 - num
        }else {
            return 60 - num
        }

}

console.log(untilRetirement(1990, "male"))



// task 13 Write a function to humanize a number (formats a number to a human-readable string)
//  with the correct suffix such as 1st, 2nd, 3rd or 4th.
// 1 -> 1st
// 11 -> 11th

// Hint: num % 100 >= 11 && num % 100 <= 13
function toHumanizeNumber(num){

    if(typeof num === "undefined"){
        return;
    }
    if(num % 100 >= 11 && num % 100 <= 13){
        num+"th"
    };
        switch(num % 10){
            case 1: 
            return num + "st";
            case 2: 
            return num + "nd";
            case 3:
            return num + "rd"


        }
        return num + "th"
        }


console.log(toHumanizeNumber(143));