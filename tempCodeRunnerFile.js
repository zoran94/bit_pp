function abbreviatedForm(str){

    var splited = str.split(" ")
    for(var i =0; i < splited.length; i++){
        if(typeof splited[i] !== "string") return ""
        return splited[0] + " " + splited[1][0] + "."
    }
    return splited
}
console.log(abbreviatedForm("John Snow"))