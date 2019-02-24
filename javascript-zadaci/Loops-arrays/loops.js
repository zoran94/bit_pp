/* Write a for loop that will iterate from 0 to 15. For each iteration,
 it will check if the current number is odd or even, and display a message to the screen. */

 for(var i = 0; i <= 15; i++){

    if(i % 2 === 0){
        console.log(i)
    }
}

// Write a program to compute the sum and product of an array of integers.

var result = 0;
var arr = [1, 2, 3, 4, 5];
for(var i = 0; i < arr.length; i++){
    result+=arr[i]
}
console.log(result)

// Write a program which prints the elements of the following array as a single string.
var empty = ""
var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
for(var i = 0; i < x.length; i++){
    empty+=x[i]
    }
    console.log(empty)

// Write a program that prints the elements of the following array.

var a = [
    [1, 2, 1, 24], 
    [8, 11, 9, 4], 
    [7, 0, 7, 27]
    ];
for(var i = 0; i < a.length; i++){
    for(var j = 0; j < a[i].length; j++){
        console.log(a[i][j])
    }
}    

// Write a program that outputs the sum of squares of the first 20 numbers. 
var result;
var sum = 0
for(var i = 0; i < 20; i++){
    result = i * i
    sum = sum + result
    
}
console.log(sum)

/* Write a program that computes average marks of the following students. Then use this average to determine the corresponding grade. 
	
David
80
Marko
77
Dany
88
John
95
Thomas
68 */

var arr = [80, 77, 88, 95, 68];
var x = 0;
for(var i = 0; i < arr.length; i++){
    x += arr[i]
}
console.log(x)

var result = x / 5;
if(result < 100 && result > 90){
    console.log("A")
}else if(result < 90 && result > 80){
    console.log("B")
}else if(result < 80 &&  result > 70){
    console.log("C")
}


/* Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
 For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3),
  print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", 
  for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those). */
   var result;
   var sum;
   var final;
  for(var i = 1; i <= 100; i++){
      if(i % 3 !== 0 && i % 5 !== 0){
          console.log(i)
      }
      if(i % 3 === 0){
          result = "Fizz"
          console.log(result)
      }
      if(i % 5 === 0){
          sum = "Buzz"
          console.log(sum)
      }
      if(i % 3 === 0 && i % 5 === 0){
            final = result + sum
            console.log(final)
      }
  }








