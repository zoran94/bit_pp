var a = 78;
var p = 3;
var arr =  [2, -2, 33, 12, 5, 8];
var arr2 = [];
for(var i = 0; i < arr.length; i++){
    if(p == i){
        arr2[arr2.length] = a;
        arr2[arr2.length] = arr[i]
    }else {
        arr2[arr2.length] = arr[i]
    }
    if( p > arr.length){
       arr2 = "Error message";
       break;
    }
}
console.log(arr2);
