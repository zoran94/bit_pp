//  Task 1Write a function that capitalizes the first letter of each string argument it receives.  
// 	Function arguments: 'hello', 'there', 'ES', 6
// 	Output: 'Hello', 'There', 'ES'


const capitalize = (...args) => args.filter(elem => typeof elem === "string")
.map(obj => obj[0].toUpperCase() + obj.slice(1))


console.log(capitalize('hello', 'there', 'ES', 6))

// Task 2 Write a function that calculates sale tax that should be paid for the product of the given price.
//  Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
// 	Input: 120
// 	Output: 24
	
const calculateSale = (number) => {
    return number * 0.2;
}
console.log(calculateSale(120));



// Task 3 Write a function that increases each element of the given array by the given value.
//  If the value is omitted, increase each element of the array by 1.  
// 	Input: [4, 6, 11, -9, 2.1], 2
// 	Output: [6, 8, 13, -7, 4.1]

const increaseNum = (num, num2) => num.map(obj => obj + num2);

console.log(increaseNum( [4, 6, 11, -9, 2.1], 2));


//  Task 4 Write a function that filters all even elements of the array.
// 	Input: [6, 11, 9, 0, 3]
// 	Output: [6, 0]

const filterEvenNum = (arr) => arr.filter(obj => obj % 2 === 0);

console.log(filterEvenNum([6, 11, 9, 0, 3]))


//  Task 5 Write a function that filters all the strings from the given array that contain substring JS or js.
// 	Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
// 	Output: ['babel.js, 'JS standard


const filterStrings = (arr) => {
    const arr1 = arr.map(item => item.toLowerCase());
    const arr2 = arr1.filter(obj => obj.indexOf("js") > -1)
    return arr2
};

console.log(filterStrings(['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']))


//  Task 6 Write a function that filters all integer numbers from the given array. 
// Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
// 	Output: [7, 8]

const filterIntegers = (num) => num.filter(item => item === parseInt(item));

console.log(filterIntegers([1.6, 11.34, 9.23, 7, 3.11, 8]));


// Task 7 Write a function that filters all integer arguments that contain digit 5.
// 	Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553 
// 	Output: [45, 553]
    
    const filterAllfiveIntegers = (arr) => arr
    .filter(num => num === Math.floor(num))
    .map(item => item + "")
    .filter(function(obj){
        
               for(var i = 0; i < obj.length; i++){
                    for(var j = 0; j < obj[i].length; j++){
                            if(obj[i][j] === "5"){
                                   return  obj
                                }
                            }
                        }
                   
                }).map(elem => parseInt(elem))


console.log(filterAllfiveIntegers([23, 11.5, 9, 'abc', 45, 28, 553]));




// Task 8 Write a function that returns indexes of the elements greater than 10. 
// 	Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
// 	Output: 1, 2, 5

const integersIndexes = (arr) => {
    let newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 10){
            newArr.push(i)
        }
    }
        return newArr
} 

console.log(integersIndexes([1.6, 11.34, 29.23, 7, 3.11, 18]));





// Task 9 Create an array of persons. A person should be an object with 
//name and age properties. Experiment with enhanced object literals. 
// Write a function that prints out the names of persons older than 25. 
// Write a function that check if there is a person older than 40.
// Write a function that checks if all persons are older than 20.   
 
const obj = {
        name: "Nikola",
        age: 20
    };
    const {name, age} = obj;

    const showName = ({age}) => {
        if(`${age}` > 10){
            return true
        }
    }

    console.log(showName(obj));

    /// not completed




    // Tsk 10  Write a function that checks if the given array is an array of positive integer values. 
	// Input: [3, 11, 9, 5, 6]
	// Output: yes

	// Input: [3, -12, 4, 11]
    // Output: no
    
    const checkForPostiveInt = (arr) => arr.every(num => num > 0)
      
    console.log(checkForPostiveInt([3, 11, 9, 5, 6]))




//     Task 11 Write a function that calculates the product of the elements of the array. 
// Input: [2, 8, 3]
// Output:  48

const sum = (arr) => arr.reduce( (acc, curr) => acc * curr);

console.log(sum([2, 8, 3]))


//  Task 12 Write a function that calculates the maximum of the given array. 
// Input: [2, 7, 3, 8, 5.4] 
// 	Output: 8

const maximum = (arr) => arr.reduce((a, b)=> Math.max(a, b) );
console.log(maximum([2, 7, 3, 8, 5.4]))