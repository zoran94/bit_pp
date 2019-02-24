// task 1 Write a program that calculates the maximum of two given numbers.
function calculateMaxNumber(max1, max2){
    if(max1 > max2){
        return max1
    }else{
        return max2
    }

}
console.log(calculateMaxNumber(2, 6));

// task 2 Write a program that checks if a given number is odd.
function isOdd(number){
    if(number % 2 === 0){
        return "number is even"
    }
    return "number is odd"
}
console.log(isOdd(21));

// task 3 Write a program that checks if a given number is a three digit long number.

function numberLength(num){
    var str = "";
    if(typeof num === "number")
        str+=num;
        return str.length;
}

console.log(numberLength(2227));


// task 4 Write a program that calculates an arithmetic mean of four numbers.
 
 function meanOfNumbers(a, b){
    var sum = 0;
    for(var i = 0; i < arguments.length; i++){
        sum+=arguments[i];
        
    }
    return sum / arguments.length;
}

console.log(meanOfNumbers(3, 4, 5, 6));

// task 7 Write a program that calculates a number of digits of a given number. 

function numOfDigits(numbers){
    var begin = "";
    if(typeof numbers === "number"){
        begin+= numbers
    }
    return begin.length
};

var result = numOfDigits(54674);
console.log(result);

// task 8 Write a program that calculates a number of appearances of a given number in a given array.
//Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3

function numOfAppearance(arr, e){

var sum = 0;
for(var i = 0; i < arr.length; i++){
    if(e === arr[i]){
        sum++
    }
}
return sum

};
var array = [2, 4, 7, 8, 7, 7, 1, 7];
console.log(numOfAppearance(array, 7));

// task 9 Write a program that calculates the sum of odd elements of a given array. 

function sumOfOddNumbers(array){
    var result = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0){
            result+=array[i]
        }
    }
    return result;
}
var arr = [1, 2, 3, 5, 6, 9];
console.log(sumOfOddNumbers(arr))


// task 10 Write a program that calculates the number of appearances of a 
// letter a in a given string. Modify the program so it calculates the number of both letters a and A.

function counter(str){
    var sum = 0;
    for(var i = 0; i < str.length; i++){
        if(typeof str === "string"){
            if("a" === str[i]){
                sum++;
            }
        }
    }
    return sum
}
//console.log(counter("abhadaa"))

function count(letter){
    var result = 0;
    for(var i = 0; i < letter.length; i++){
        if("A" === letter[i]){
            result++;
        }
    }
    return result
}
//console.log(count("AaAt"));

function num(a){
    var b = 0;
    for(var i = 0; i < a.length; i++){
        if(counter(a) && count(a)){
            b++
        }
    }
    return b
}
console.log(num("AAaalt"));;

// task 11 Write a program that concatenates a given string given number of times. 
// For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. 

function numOfStrings(str, number){

    var emptyStr = "";
    for(var i = 0; i < number; number--){
        emptyStr = emptyStr + str;
    }

    return emptyStr;

}
console.log(numOfStrings("abc", 4))







