// Task 1 Find the min and max element in the following array and switch their places. Print out the modified array in the console.
// Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]


function switchElements(arr){
    var newArr = arr;
    var max = arr[0];
    var min = arr[0];
    var index1;
    var index2;
    for(var i = 0; i < arr.length; i++){

        if(max < arr[i]){
            max = arr[i]
            index1 = i;
        };
        if(min > arr[i]){
            min = arr[i];
            index2 = i
        }

    }
    for(var j = 0; j < arr.length; j++){

        if(j == index1){
            newArr[j] = min
        }
        if(j == index2){
            newArr[j] = max
        
       
    }
        return newArr
    
}

}
console.log(switchElements([ 3, 1, 12, 149, 53, 414, 500, 19 ]));


// Task 2 Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
// Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]

var divideAllArray = function(arr){

    var newArr = [];

    for(var i = 0; i < arr.length; i++){

        if(arr[i] / 2 + 5 === 0){
            arr[i] = 20;
        } else {
            arr[i] =  arr[i] / 2 + 5
        }

    }
    return arr
}
var storedValues = [ 3, 500, -10, 149, 53, 414, 1, 19 ];
console.log(divideAllArray(storedValues));


// Task 3 Initialize two arrays. The first one should contain student names, 
// the second one the number of points for each student.
//  Display students' names with their corresponding grade. Use the following ranges:
// 51-60 -> 6,
// 61-70 -> 7,
// 71-80 -> 8,
// 81-90 -> 9,
// 91-100 -> 10.
// Input: 
// [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
// Output: 
// Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.

var studentGrade = function(){

    var arr = [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ];
    var arr2 = [ 50, 39, 63, 72, 99, 51, 83, 59 ];
    var grade = 0;

        for(var i = 0; i < arr.length; i++){

            for(var j = 0; j < arguments.length; j++){

                if(arguments[j] === arr[i]){

                    if(arr2[i] < 51){
                        grade = 5;
                        return arr[i] + " accquired " + arr2[i] + " points and fail to complete exam"
                    }else {
                        if(arr2[i] >= 51 && arr2[i] <= 60){
                            grade = 6;
                        }else if(arr2[i] >= 61 && arr2[i] <= 70){
                            grade = 7;
                        }else if(arr2[i] >= 71 && arr2[i] <= 80){
                            grade = 8;
                    }else if(arr2[i] >= 81 && arr2[i] <= 90){
                        grade = 9;
                }else if (arr2[i] >= 91 && arr2[i] <= 100){
                    grade = 10;
                }
                        return arr[i] + " acquired " + arr2[i] + " points and earned " + grade + ".";
            }
        }

    
    }
}
}

console.log(studentGrade("Frank"));

// Task 4 (skip :))Sort a previously defined array. Place its sorted values into a new array 
// whose values are equivalent to the first array's values multiplied by 2.
// Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]


        var sortArray = function(arr){

            for(var i = 0; i < arr.length; i++){

                for(var j = 0; j < arr.length; j++){

                    if(arr[j] > arr[j + 1]){
                        var tmp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = tmp;
                    }
                }
            }
            

            for(var k = 0; k < arr.length; k++){

                arr[k] *= 2
            }
            return arr;
        }
    var input = [ 13, 11, 15, 5, 6, 1, 8, 12 ];
     console.log(sortArray(input))


    //  Task 5 (skip :))Sort a previously defined array in a descending order and display it in the console.
    //  Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
    //  Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]
     
        function sortInDescendingOrder(array){

            for(var i = 0; i < array.length; i++){

                for(var j = 0; j < array.length; j++){

                    if(array[j] < array[j + 1]){
                        var firstValue = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = firstValue
                    }
                }
            }
            return array

        }
        var storedNumbers = [ 13, 11, 15, 5, 6, 1, 8, 12 ]
    console.log(sortInDescendingOrder(storedNumbers))

    //  Task 6 Write a program that uses a loop to add all the even numbers from 1 
    //  to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. 
    // The result should then be multiplied by 12.5 and displayed in console.
    //    Output: 2350000
        

    function sumNumbers(num){

        var sum = 0, sum2 = 0;
        for(var i = 0; i <= num; i++){

            if(i % 2 === 0){
                sum+= i;
            }
        }
        var divide= num / 2;
        for(var j = 0; j < divide; j++){

            if(j % 2 !== 0){
                sum2+=j
            }
        }
        var result = sum - sum2;
        var final = result * 12.5;
        return final;

    }

    console.log(sumNumbers(1000));


    // Task 7 Define a 10 element array. Take the first two letters from every string 
    // (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
    // Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]
    // Output: AnStJoJoDaMa
    function Letters(arr){

        var str = "";

        for(var i = 0; i < arr.length; i++){
            if(typeof arr[i] === "string"){
            for(var j = 0; j < arr[i].length; j++){

                if(j < 2 && arr[i].length >= 2){
                    str+=arr[i][j]
                }
               
            }
        }

    }
            return str
    }

    console.log(Letters([ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]));


    // Task 8 Write a program that takes a string and prints its characters out in reversed order in the console.
    // Input:  Belgrade Institute of Technology
    // Output: ygolonhceT fo etutitsnI edargleB

    function reverseString(str){

        var newStr = "";
    for(var i = str.length -1; i >= 0; i--){
            newStr+=str[i]

}
    return newStr
}

console.log(reverseString("Belgrade Institute of Technology"));

// Task 9 Write a program that displays all the combinations of two numbers between 1 and 7.
//  Don't display two of the same numbers at the same time. Display the number of possible combinations,
//   as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).


    function displayCombinations(arr){

            var counter = 0;
            var newArr = [];
        for(var i = 0; i < arr.length; i++){
            for(var j = 0; j < arr.length; j++){

                if(arr[i] !== arr[j]){
                    newArr[0] = arr[i];
                    newArr[1] = arr[j];
                    counter++;
                    console.log(newArr)
                }
            }
        }
            return counter
    }
    console.log(displayCombinations([1, 2, 3, 4, 5]))


    // Task 10 Check if a given string is a palindrome (spaces are ignored).
    // Input:  eye  | Geek  | a nut for a jar of tuna
    // Output: true | false | true
    
    function checkForPalindrome(str){

        var str1 = "";
        var str2 = "";
        for(var i = str.length -1, j = 0; i > 0; i--, j++){
            if(str[i] !== " "){
                str1+=str[i]
            }
            if(str[j] !== " "){
                str2+=str[j]
                
            }
            
        }

          
        if(str1 === str2){
            return true
        }else{
            return false
        }
    
    }
        console.log(checkForPalindrome("a nut for a jarg of tuna"));



        // Task 11 Write a program that calculates the greatest common divisor of two integers.
        //  Note: The greatest common divisor of two non-zero integers is the greatest positive number 
        //  that divides both numbers with no remainder.
        // Input:  192 42 | 81 9
        // Output: 6      | 9
        
        function commonDivisor(num1, num2){
            var manji = 0;
            var sum 
            if(num1 < num2){
                manji = num1
            }else{
                manji = num2
            };
            var i = 0;
            while(i <=manji){
                
                if(num1 % i === 0 && num2 % i === 0){
                    sum = i
                    
                }
                i++
            }
            return sum
        }              
        console.log(commonDivisor(192, 42))








