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