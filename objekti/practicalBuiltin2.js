// Built-in objects tasks

// Task 1 Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]



function getDuplicates(arr) {
    var newArr = new Array();
    for (var i = 0; i < arr.length; i++) {

        for (var j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                newArr[newArr.length] = arr[i]
                newArr[newArr.length] = arr[j]

            }
        }
    }
    return newArr
}
console.log(getDuplicates([2, 4, 7, 11 - 2, 1]));


// Task 2 Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13] 


function remDups(arr) {
    var arrOne = [];
    var sort = arr.sort(function (a, b) {
        return a - b;
    })

}



