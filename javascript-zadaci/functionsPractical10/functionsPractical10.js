// IIFE = Immediately Invoked Function Expressions

//  Task 1 Write IIFE that replaces the first and the last element of the given array and prints out its elements. 
// 	Input array: [4, 5, 11, 9]
// 	Output array: [ 9, 5, 11, 4]


    (function replace(){
        var arr = [4, 5, 11, 9];
        var newArr = [];
        var first = arr[0]
        for(var i = 0; i < arr.length; i++){
              if(i === 0){
                  newArr[newArr.length] = arr[arr.length - 1]
              }else if(i < arr.length -1){
                newArr[newArr.length] = arr[i]
              }else{
                newArr[newArr.length] = first
              }

        }
        console.log(newArr)

    })()
    

    // Task 2 Write IIFE that calculates the surface area of the given rectangle with sides a and b. 
    // Input: 4 5
    // Output: 20 
   function surface(a, b){
       return a * b
   }
   (function(){
       console.log(surface(4, 5))
   })();


//    Task 3 Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. 
//    Input: prograMming
//    Output: progra**ing, 2

   (function replaceLetters(str){

        var num = 0;
    var toStr = "";
        for(var i = 0; i < str.length; i++){

            if(str[i] == "m" || str[i] == "M"){
                
                toStr+="*"
            }else{
                toStr+=str[i]
            }
        }
            return toStr

   })("prograMming")
  
//    Task 4 Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com. 
//    Input: pera peric
//    Output: pera.peric@gmail.com
   
 
    function suggest(name, surname){
            return function(rest){
                return name + "." + surname + rest
            }
    }
    console.log(suggest("Zoran", "Sudimac")("@gmail.com"));


    // Task 5 Write a function that returns a function that calculates a decimal value of the given octal number. 
    // Input: 034
    // Output: 28
        function decimal(num){
                return function(){
                    return parseInt(num, 10)
                }
        }
        console.log(decimal(034)());

        // Task 6 Write a function that checks if a given string is valid password.
        //  The password is valid if it is at least 6
        //  characters long and contains at least one digit. The
        //   function should receive two callbacks named successCallback and 
        //  errorCallback that should be called in case password is correct or invalid. 
        // Input: JSGuru 
        // Output: Your password is invalid!
        
        //     Input: JSGuru123
        //     Output: Your password is cool! 

        function successCallback(){
            return "Password is correct!"
        };
        function errorCallback(){
            return "Password is incorrect!"
        }

        function isValid(str){
        
            var isNumber = false;
                for(var i = 0; i < str.length; i++){

                    if(isNaN(parseFloat(str[i])) === false){
                        isNumber = true
                    }
                }
                        if(str.length >= 6 && isNumber){
                           return successCallback()
                        }
                        else{
                          return  errorCallback()
                        }
        };
        console.log(isValid("2JSGurfdfd"));


    
        // Task 7 Write a function that filters elements of the given array so that they satisfy a condition given by the callback function.
        // Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
        // Output: [11, 9, 3] 
        
        
function isOdd(arr){
            
            if(arr % 2 !== 0){
                return true
        }else {
            return false
        }

    }
function filterElements(arr){

        var arr2 = [];
        for(var i = 0; i < arr.length; i++){

            if(isOdd(arr[i])){
                arr2[arr2.length] = arr[i]
            }
        }
        return arr2
    }
console.log(filterElements([2, 8, 11, 4, 9, 3]))