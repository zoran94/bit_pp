
function fahrenheitToCelsius(f){

    var celsius = (f - 32) *(5/9);
    return "Temperature in fahrenheit " + f + " is in celsius " + celsius;

}
console.log(fahrenheitToCelsius(68))