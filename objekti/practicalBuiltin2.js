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



function removeDuplicates(arr){


    var arr2 = [];
        var sorted = arr.sort(function(a, b){
            return a - b
        })
    for(var i = 0; i < sorted.length; i++){

        if(sorted[i] === sorted[i + 1]){
            continue
        }
        arr2.push(sorted[i])
    }
    return arr2
}
console.log(removeDuplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));




// Task 3 Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true
 

function isOdd(arr){
    
    
    
    if(arr.length % 2 !== 0){
        return true
    }else{
        return false
    }
    
}
console.log(isOdd([1, 2, 9, 2, 1, 3]));



//  Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

function middleElem(arr){
    var count = 0;
    var sorted = arr.sort(function(a, b){
        return a - b
    });
    
    var index = (sorted.length/2) + 0.5;
    for(var i = 0; i < sorted.length; i++){

        if(i === index){
            var element = sorted[i];
            
        };
    }
    
    console.log(findElem)
     for(var j = 0; j < sorted.length; j++){
         if(sorted[j] < element){
            count++
                }
            }
        return count

}
   console.log(middleElem([-1, 8.1, 3, 6, 2.3, 44, 2.11]));

//   Task 4 Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
//    Input: [1, 4, -2, 11, 8, 1, -2, 3]
//    Output:  { minValue: -2, minLastIndex: 6 }
   

function SmallestElement(arr){
    
    this.arr = arr;
    this.minValue = arr[0];
    this.minLastIndex = 0;

    for(var i = 0; i < arr.length; i++){
        if(this.minValue >= arr[i]){
            this.minValue = arr[i];
            this.minLastIndex = i;
        }

    }

}
var novo = new SmallestElement([1, 4, -2, 11, 8, 1, -2, 3])

console.log("minValue: ", novo.minValue);
console.log("MinLastIndex: ", novo.minLastIndex);


//  Task 5 Write a function that finds all the elements in a given array less than a given element. 
// 	Input: [2, 3, 8, -2, 11, 4], 6 
// 	Output: [2, 3, -2, 4]
// Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 
// 		Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
// 	Output: [’Programming’, ‘product’]

// Write a function that expects an array and a callback function that filters out some of the elements. 
// Use functions defined in a) or b) to test it. 


function findAllElements(arr, num){

    var arr2 = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < num){
            arr2.push(arr[i])
        }
    }
    return arr2

}
console.log(findAllElements([2, 3, 8, -2, 11, 4], 6))

function findPro(arr){
    
    var arr2 = [];
    
    var str = "pro"
    for(var i = 0; i < arr.length; i++){
        var lower = arr[i].toLowerCase()
        if(lower.slice(0, 3) === str){
            
            arr2.push(arr[i])
        }
    }
    return arr2
}
//console.log(findPro(["JavaScript", "Programming", "fun", "product" ,"Program", "program"]));




function myFunc(arr, func1){

    return func1(arr)
};

console.log(myFunc(["JavaScript", "Programming", "fun", "product" ,"Program", "program"], findPro))




//  Task 6 Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
// 	[
// {name: ‘apples’, price: 100}, 
// {name: ‘milk’, price: 80}, 
// {name:’bananas’, price: 150}
// ]
// Write a function that calculates the total price of your shopping list. 
// Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals. 
// Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase. 



    

        var arr = [
        {name: "banana", price: 130},
        {name: "apple", price: 237},
        {name: "Waterlemon", price: 560} 
    ];


     function total(){
         var sum = 0;
         for(var i = 0; i < arr.length; i++){
             sum+=arr[i].price
         }
         return sum
     };

     function average(arr){

        var sum = total(arr);
        var avg = sum / arr.length;
        return avg

     }

     function printName(arr){

        var first = 0;
        var output = "";
        for(var i = 0; i < arr.length; i++){
            if(arr[i].price > 0){
                first = arr[i].price
                output = arr[i].name;
            }
        }
        return output.toUpperCase();
     }

     console.log(total(arr));
     console.log(average(arr));
     console.log(printName(arr))


// Task 7 Write a function that checks if a given string is written in all capitals.
// Write a function that checks if a given string contains any digits.
// Write a function that checks if a given string is a valid hexadecimal color.
// Write a function that checks if a given number belongs to the interval from 1900 to 2018. 
// Write a function named validator that returns an object with properties stringValidator, 
// passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).

function checkForString(str){
    
    if(str === str.toUpperCase()){
        return true
    }else{
        return false
    }
}
console.log(checkForString("dsads"));

function checkForNum(str){
    var value = false;
    for(var i = 0; i < str.length; i++){

        if(isNaN(parseFloat(str[i])) === false){
            value = true
        }

    }
    return value
}
console.log(checkForNum("fdf55dfdsf"))




























//  Task 9 Write a function that for a given departure and arrival time calculates the time the trip takes.
// 	Input: 8:22:13 11:43:22
// 	Output: 3 hours 21 minutes 9 seconds
   

    // function getTime(start, end){


    //     var first = start.split(":");
    //     var second = end.split(":");

    //     var getFirstDate = new Date();
    //     getFirstDate.setHours(first[0], first[1], first[2]);

    //     var getSecondDate = new Date();
    //     getSecondDate.setHours(second[0], second[1], second[2]);
        
    //     var result = getSecondDate - getFirstDate;
      
    //         var hours = Math.floor(result/ 1000/ 60/ 60);  // // Convert milliseconds to hours

    //         var minutes = Math.floor((result - hours * 3600000)/ 60000);

    //         var seconds = Math.floor((result - hours * 3600000 - minutes * 60000)/ 1000)
           
    //         return "" + hours + ":" + minutes + ":" + seconds;

    // }

    console.log(getTime("8:22:13", "11:43:22"))






    
