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

console.log(hideAddress("zoranaddress@bgit.rs"))