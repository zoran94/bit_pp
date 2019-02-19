// task 1 Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.

// Input: ["1", "21", undefined, "42", "1e+3", Infinity]
// Output: [1, 21, 42, 1000]

function newArray(array1) {
    var arrNew = [];
    for (var i = 0; i < array1.length; i++) {


        if (typeof array1[i] === "string") {

            arrNew[arrNew.length] = parseInt(array1[i]);

        }
    }
    return arrNew;
}
console.log(newArray(["1", "21", undefined, "42", "1e+3", Infinity]));

// task 2 Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
// Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// Output: “015false-2247”

function joinAllElements(arr) {

    var arr2 = [];
    var toStr = "";
    for (var i = 0; i < arr.length; i++) {
        if (isNaN(arr[i]) == true || typeof arr[i] === "undefined" || typeof arr[i] === "object") {
            continue;

        }
        toStr += arr[i]
    }
    return toStr


};
var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];
var result = joinAllElements(array);
console.log(result);

// Write a program to filter out falsy values from the array.

// Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// Output: [15, -22, 47]


function falsyValue(arr) {

    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" && !isNaN(arr[i]) && arr[i] !== 0) {
            arr2[arr2.length] = arr[i]

        }
    }

    return arr2

}
console.log(falsyValue([NaN, 0, 15, false, -22, '', undefined, 47, null]))

// task 4  Write a program that calculates a number of integer values in the array.

//  Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
//   Output: 3


function numOfIntegers(integers) {

    var count = 0;
    for (var i = 0; i < integers.length; i++) {

        if (parseInt(integers[i]) === integers[i]) {
            count++
        }

    }
    return count;
}
var array = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]

console.log(numOfIntegers(array));

// task 5 Write a program that calculates a number of float values in the array.

// Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 2

function floatNum(number) {

    var increment = 0;
    for (var i = 0; i < number.length; i++) {

        if (typeof number[i] === "number" && !(parseInt(number[i]) === number[i]) && !isNaN(number[i])) {
            increment++
        }
    }
    return increment

}
var newArray = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]

console.log(floatNum(newArray))