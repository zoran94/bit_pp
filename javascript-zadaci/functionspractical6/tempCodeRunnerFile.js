function indexBmi(weight, height){

    var result = "";
    var index = weight/(height * height);

    if(index < 15){
        result = "Starvation " + index;
    }else if(index < 17.5){
        result = "Anorexic " + index 
    }else if(index < 18.5){
        result = "Underweight " + index
    }else if(index >= 18.5 && index < 25){
        result = "Overweight " + index;
    }else if(index >= 30 && index < 40){
        result = "Obese " + index
    }else{
        result = "Morbidly obese " + index
    }
        return result;

};
console.log(indexBmi(342, 4))