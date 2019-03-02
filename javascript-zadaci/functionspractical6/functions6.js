

// Task 1 Write a function to count vowels in a provided string. If you are 
//  not aware of indexOf function, try to use switch statement.
// // Vowels are a, e, i, o, and u as well as A, E, I, O, and U. 


var countVowels = function(str){

    var arr = ["a", "o", "u", "e", "i", "A", "E", "I", "O", "U"];

    var count = 0;
    for(var i = 0; i < arr.length; i++){
        for(var j =0; j < str.length; j++){

            if(arr[i] === str[j]){
                count++
            }
        }
    }
        return count;
}
console.log(countVowels("auiPhdfeIuA"));



// Task 2 Write a function that combines two arrays by alternatingly taking elements.

// [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]


function combineElements(arr1, arr2){


    var arr = [];
    for(var i = 0; i < arr1.length; i++){

        arr[arr.length] = arr1[i];
        arr[arr.length] = arr2[i];

    }
    return arr
}
console.log(combineElements(["a", "b", "c"], [1,2,3]));


// Task 3 Write a function that rotates a list by k elements.

// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

    function rotateNumbers(num, arr) {

        var arr2 = [];

        for(var i = 0; i < num; i++){

            if(i === 0){
                for(var j = num; j < arr.length; j++){
                    arr2[arr2.length] = arr[j]
                }
            }
            arr2[arr2.length] = arr[i]
        }


        return arr2
    }
console.log(rotateNumbers(3, [1,2,3,4,5,6]));


// Task 4 Write a function that takes a number and returns array of its digits.

    function getDigitsOfNumber(num){

        var str = "" + num;
        var arr = [];
        for(var i = 0; i < str.length; i++){
            arr[arr.length] = str[i]
        }
        return arr
    }
console.log(getDigitsOfNumber(325));


// Task 5 Write a program that prints a multiplication table for numbers up to 12.






// Task 6 Write a function to input temperature in Centigrade and convert to Fahrenheit.

// °C = °F - 32 x (5/9) 

// °F = °C / (5/9) + 32

function convertToFahrenheit(celsius){

    var fahrenheit = celsius /(5/9) + 32;
    return fahrenheit


}
console.log(convertToFahrenheit(12));





// Task 7 Write a function to find the maximum element in array of numbers. Filter out all non-number elements.






// Task 9 Write a function to find the median element of array.


function median(arr){

    var num;
    var sum;
    var median;
    for(var i =0, j=arr.length -1; i < arr.length; j > 0, i++, j--){

        if(arr[i] === arr[j]){
            median = arr[i]
            break;
        }
        else if(arr[i] < arr[j]){
            num = arr[i]
            sum = arr[j]
            
            var result1 = num/2;
            var result2 = sum/2;
             median = result1 + result2;
        }

    }
    return median
}
console.log(median([1, 3, 4, 5, 8, 9, 10, 12]));


// Task 10 Write a function to find the element that occurs most frequently.


function findMostFrequentElement(arr){

    var count = 0;
    var item;
    var frequent = 0;
    for(var i = 0; i < arr.length; i++){

        for(var j = i; j < arr.length; j++){

            if(arr[i] == arr[j]){
                count++;
            }
            if(frequent < count){
                frequent = count;
                item = arr[i]
            }
        }
        count = 0;

    }
        return item

}
console.log(findMostFrequentElement(["a", 2, "a", 2, 3, 5, 4, 2, 2, 9]));


// Task 11 Write a function to find and return the first, middle and last element of an array if
//  the array has odd number of elements. If number of elements is even, return just the first and 
//  the last. In other cases (empty array), input array should be returned.



function findElement(arr){
    var median;
    var result
    var a;
    var b;
    for(var i =0, j = arr.length-1; i < arr.length; j > 0, i++, j--){
        a = arr[0];
        b = arr[arr.length - 1];
        if(arr[i] === arr[j]){
            median = arr[i]
        }
        if(arr.length % 2 !== 0){
        
           result =  a + " " + b + " " + median;
        }
     else if(arr.length % 2 === 0){
        
            result = a + " and " + b;
        }else{
            result = "no solution"
        }
    }    
        return result
}
console.log(findElement([2, 4, 6, 8, 10, 11, 12]));



// Task 12 Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.

function average(){
    var sum = 0;
    for(var i = 0; i < arguments.length; i++){
        sum+=arguments[i]
    }
    return sum / arguments.length
}
console.log(average(23, 45, 4, 6, 7));


// Task 13 Write a function to find all the numbers greater than the average.
// 1. nacin
function findGreatesOfAverage(arr){
    var sum = 0;
    var newArr = [];
    for(var i = 0; i < arr.length; i++){

        sum+=arr[i]        
    };
    sum = sum / arr.length;
    for(var j = 0; j < arr.length; j++){
        if(arr[j] > sum){
            newArr[newArr.length] = arr[j]
        }
    }
    return newArr
   
}
console.log(findGreatesOfAverage([5, 6, 8, 9, 22, 33]));

// 2. nacin 
function greaterThanAverage(arr){
    var arr2 = [];
    var avg = 0;
    for(var i = 0; i < 2; i++){
        for(var j = 0; j < arr.length; j++){
            if(i === 0){
                avg+=arr[j]
            }else{
                if(j === 0){
                    avg = avg / arr.length;
                }
                if(arr[j] > avg){
                    arr2[arr2.length] = arr[j]
                }
            }
        }
    }
    return arr2
}
console.log(greaterThanAverage([1, 2, 3, 4, 5]));



// Task 14 The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square
//  of the height (in meters). Write a function that takes two parameters, weight and height, computes
//   the BMI, and prints the corresponding BMI category:
// Starvation: less than 15
// Anorexic: less than 17.5
// Underweight: less than 18.5
// Ideal: greater than or equal to 18.5 but less than 25
// Overweight: greater than or equal to 25 but less than 30
// Obese: greater than or equal to 30 but less than 40
// Morbidly obese: greater than or equal to 40

function indexBmi(weight, height){

    var result = "";
    var index = weight/(height * height);

    if(index < 15){
        result = "Starvation " + index;
    }else if(index < 17.5){
        result = "Anorexic " + index 
    }else if(index < 18.5){
        result = "Underweight " + index
    }else if(index >= 18.5 && index < 25){
        result = "Overweight " + index;
    }else if(index >= 30 && index < 40){
        result = "Obese " + index
    }else{
        result = "Morbidly obese " + index
    }
        return result;

};
console.log(indexBmi(342, 4))

// Task 15 Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

// For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********


