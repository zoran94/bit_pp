function commonDivisor(num1, num2){
            var manji = 0;
            var sum 
            if(num1 < num2){
                manji = num1
            }else{
                manji = num2
            };
            var i = 0;
            while(i <=manji){
                
                if(num1 % i === 0 && num2 % i === 0){
                    sum = i
                    console.log(sum)
                }
                i++
            }
            return sum
        }              
        console.log(commonDivisor(192, 42))