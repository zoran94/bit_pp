/* Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no
*/
var e = 3;
var arr = [5, -4.2, 3, 7];
var result = "";
for(var i = 0; i < arr.length; i++){
    if(e === arr[i]){
        result = "Yes"
        break;
    }else {
        result = "Number is not in the array"
    }
}
console.log(result)


/* Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/

var arr = [-3, 11, 5, 3.4, -8];
for(var i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        console.log(arr[i] * 2)
    }else {
        console.log(arr[i])
    }
}

/* Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/
var array = [4, 2, 2, -1, 6];
var min = array[0];
var index;
for(var i = 0; i < array.length; i++){
    if(min > array[i]){
        min = array[i];
        index = i
    }
}
console.log(min, index);



// Write a program that finds the first element larger than minimum and prints out its value. 
 // Input array: [4, 2, 2, -1, 6]
 // utput: 2

var arr = [4, 2, 2, -1, 6];
var minimum = arr[0];
var ind;
for(var i = 0; i < arr.length; i++){
    if(minimum > arr[i]){
        minimum = arr[i];
        ind = i
        
    }
}
//console.log(arr);











 /* 5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16
*/
var arr = [3, 11, -5, -3, 2];
var sum = 0;
for(var i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        sum+=arr[i]
    }
}
console.log(sum)

/* 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can be read 
the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array:
	Output: The array isn’t symmetric.
*/

var array =  [2, 4, -2, 7, -2, 4, 2]
var array2 = [];
var b = 0;
var symetric = "";
for(var i = array.length - 1; i >= 0; i--, b++){
    array2[b] = array[i]
}
console.log(array2)

    for(var i = 0; i < array.length; i++){
        if(array[i] === array2[i]){
            symetric = "The array is symetric"
        }else{
            symetric = "The array is NOT symetric."
        }
    }
    console.log(symetric);

/*  7. Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/
var arr1 = [4, 5, 6, 2];
var arr2 = [3, 8, 11, 9];
var sum = [];
for(var i= 0; i < arr1.length; i++ ){
    sum[sum.length] = arr1[i];
    sum[sum.length] = arr2[i]
}
console.log(sum);

/* 8.  Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/
var arr1 = [4, 5, 6, 2];
var arr2 = [3, 8, 11, 9];
for(var i = 0; i < arr2.length; i++){
    arr1[arr1.length] = arr2[i]
}
console.log(arr1)

/* 9. Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
*/
var e = 2;
var arr =  [4, 6, 2, 8, 2, 2];
var result = [];
var s = 0;
for(var i = 0; i < arr.length; i++){
    if(e === arr[i]){
        delete arr[i]
        
    }else{
        result[s] = arr[i]
        s++;
    }
   
}
console.log(result);



/*  10. Write a program that inserts a given element e on the given position p in the array a.
 If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
*/
var a = 78;
var p = 3;
var arr =  [2, -2, 33, 12, 5, 8];
var arr2 = [];
for(var i = 0; i < arr.length; i++){
    if(p == i){
        arr2[arr2.length] = a;
        arr2[arr2.length] = arr[i]
    }else {
        arr2[arr2.length] = arr[i]
    }
    if( p > arr.length){
       arr2 = "Error message";
       break;
    }
}
console.log(arr2);


