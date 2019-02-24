// Task 1 Write a program to insert a string within a string at
//  a particular position (default is 1, beginning of a string).

// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"


function insertString(str, insert, num){

    var toStr = "";
    if(!num){
       toStr = insert + str;
    }else {
        for(var i = 0; i < str.length; i++){
            if(num == i){
                toStr+=insert;
                toStr+=str[i]
            }else{
                toStr+= str[i]
            }
        }
    }
    return toStr

}

console.log(insertString(" my random string", "JS"));


// Task 2 Write a program to join all elements of the array into a 
// string skipping elements that are undefined, null, NaN or Infinity.

// [NaN, 0, 15, false, -22, '', undefined, 47, null]

function joinElements(arr){

        var str = "";
        for(var i = 0; i < arr.length; i++){

            if(arr[i] || arr[i] === false){  
                
                str+=arr[i]
            }
        }

            return str;
}

console.log(joinElements([NaN, 0, 15, false, -22, '', undefined, 47, null]))

// Task 3 Write a program to filter out falsy values from the array.

// [NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]


function filterFalsyValues (array){
    var newArr = [];
    for(var i = 0; i < array.length; i++){

        if(array[i]){
            newArr[newArr.length] = array[i]
        }

    }
    return newArr
}

var storedValues =  [NaN, 0, 15, false, -22, '', undefined, 47, null];
console.log(filterFalsyValues(storedValues))


// Task 4 Write a function that reverses a number. The result must be a number.

// 12345 -> 54321 // Output must be a number

function reverseNumber(num){
        num = num + "";
        var str = "";
    var element = num.length - 1;
    for(var i = 0; i < num.length; i++){
                
            var item = num[element - i];
                str+=item

        }
        var finalNumber = parseInt(str)
        return finalNumber

}
console.log(reverseNumber(12345));

// drugi nacin
function reverse(num){

    var toStr = num + "";
    var str = "";
    for(var i = toStr.length -1; i >= 0; i--){
        str+=toStr[i]
    }
    return str
}
console.log(reverse(2345))

// Task 5 Write a function to get the last element of an array. 
// Passing a parameter 'n' will return the last 'n' elements of the array.

// [7, 9, 0, -2] -> -2
// [7, 9, 0, -2], 2 -> [0, -2]  

function getLastElement(arr, n){

     for(var i = 0; i < arr.length; i++){
        var lastElement = arr[arr.length -1];
         return lastElement
     } 


        var newArr = [];

            for(var i = arr.length -n; i <= arr.length - 1; i++){
                newArr[newArr.length] = arr[i];
            }
                return newArr
            
}
console.log(getLastElement([7, 9, 0, -2, 67], 3));



// Task 6 
// Write a function to create a specified number of elements with pre-filled numeric value array.

// 6, 0 -> [0, 0, 0, 0, 0, 0]
// 2, "none" -> ["none", "none"]
// 2 -> [null, null] 

 function specifiedNum(num, item){

            var arr = [];
            for(var i = 0; i < num; i++){
                arr[arr.length] = item;
            }

                return arr

        }
        
console.log(specifiedNum(2, "none"))


// Task 7 Write a function that says whether a number is perfect.

// 28 -> 28 is a perfect number.


// Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to 
// the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself
//  (also known as its aliquot sum). Equivalently, a perfect number is a number
//   that is half the sum of all of its positive divisors (including itself).

// E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, 
// and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors:
//  (1 + 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. 
//  This is followed by the perfect numbers 496 and 8128.
 // 1. prvi nacin
        function perfectNumber(num){
                var arr = [];
                var count = 0;
                var result;
            if(num > 0 && num === parseInt(num)){
                
                for(var i = 0; i < num; i++){
                    if(num % i === 0){
                        arr[arr.length] = i
                    }
                }


            }
            for(var j = 0; j < arr.length; j++){
                count+=arr[j];
                if(num === count){
                    result = "Number is perfect"
                }else {
                    result = "number is not perfect"
                }
            }
            

            return result

        }

        console.log(perfectNumber(6));
        

        // 2. Drugi nacin

  function isPerfect(num){
     var final;
     var inc = 0; 
     if(num > 0 && num === parseInt(num)){

        for(var i = 0; i < num; i++){
         if(num % i === 0){
             inc+= i;

         }
         }
                    
      if( inc === num){
           final = "number is perfect"
          }else {
             final = "number is not perfect"
             }
                
         }else{
      final = "number is not positive or integer"
        }
          return final

        }

console.log(isPerfect());



// Task 8 Write a function to find a word within a string.

// 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// 'aa, bb, cc, dd, aa', 'aa' -> "'aa' was found 2 times"














//  Task 9 Write a function to hide email address.

// "myemailaddress@bgit.rs" -> "myemail...@bgit.rs"


function hideAddress (str){
    var index;
    var newStr = "";
    for(var i = 0; i < str.length; i++){

        if(i < 7){
            newStr += str[i]
           
        }
        if(i === 7){
            newStr += "...";
            
        }
        if(str[i] === "@"){
            index = i;
        }
        
    }
            for(var j = index; j < str.length; j++){
                    newStr+= str[j];
                    
            }
        
    
return newStr
    
}

console.log(hideAddress("myemailaddress@bgit.rs"))






// Task 10 Write a program to find the most frequent item of an array.

// [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];


function mostFrequentItem(arr){
        var count = 0;
        
        var element;
        var frequent = 0;
        for(var i = 0; i < arr.length; i++){

           for(var j = i; j < arr.length; j++){
             
            if(arr[i] == arr[j]){
                count++;
                
            }
            if(frequent < count){
            frequent = count;
            element = arr[i]
        }
    }
      count = 0;
    }

    return element;
       

}
console.log(mostFrequentItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9]));









