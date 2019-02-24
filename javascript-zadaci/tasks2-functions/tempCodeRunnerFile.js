function toHumanizeNumber(num){

    if(typeof num === "undefined"){
        return;
    }
    if(num % 100 >= 11 && num % 100 <= 13){
        num+"th"
    };
        switch(num % 10){
            case 1: 
            return num + "st";
            case 2: 
            return num + "nd";
            case 3:
            return num + "rd"


        }
        return num + "th"
        }


console.log(toHumanizeNumber(143));