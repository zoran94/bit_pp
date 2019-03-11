function remove(str){

    var splited = str.split("");

var str2 = "";
    for(var i = 0; i < splited.length; i++){
        if(splited[i] !== "a" && splited[i] !== "e" && splited[i] !== "i" && splited[i] !== "o" && splited[i] !== "u" ){
            str2+=splited[i]
        }
    }
    var toSplit = str2.split("-");
    var first =  toSplit[0].charAt(0) + toSplit[0].charAt(toSplit[0].length - 1).toUpperCase(); 
    var second = toSplit[1].charAt(0) + toSplit[1].charAt(toSplit[1].length - 1).toUpperCase(); 
    return first + "-" + second;
}
console.log(remove("Belgrade-Paris"))

