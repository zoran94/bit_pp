// Task 1 Why pay a fortune teller when you can just program your fortune yourself?
// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(){

    return " You will be a " + arguments[3] + " in " + arguments[2] + " and married to " + arguments[1] + " with " + arguments[0] + " kids";
}
console.log(tellFortune(3, "Jelena", "Bejing", "menager"))


// Task 2 You know how old your dog is in human years, but what about dog years? Calculate it!

// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.

// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

function calculateDogAge(rate, age){

    var years = rate * age
    return "Your doggie is " + years + " years old in dog years"

}
console.log(calculateDogAge(5, 10));



// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.

// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function lifetimeSupply(age, amount) {

    var maxAge = 100;
    var result = (maxAge- age) * 365 * amount;
    return "you will need " + parseInt(result) + " to last you until the ripe old age of " + maxAge
}
console.log(lifetimeSupply(80, 12));


// Task 4 It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".

// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function celsiusToFahrenheit(celsius){
    
    var fahrenheit  = celsius * (9/5) + 32;
    return "Temperature in celsius " + celsius + " is in Fahrenheit " + fahrenheit;
}
console.log(celsiusToFahrenheit(20))

function fahrenheitToCelsius(f){

    var celsius = (f - 32) *(5/9);
    return "Temperature in fahrenheit " + f + " is in celsius " + celsius;

}
console.log(fahrenheitToCelsius(68))