function Representing(name, type, listOfIngridients, time){

    var types = {
    name:  name,
    type: type,
    ingredients: listOfIngridients,
    preparingTime: time,
    
    print : function(){
        return this.ingredients
    },
    toCheck : function(){
        if(this.preparingTime < 15){
             return this.name + " can be prepared"
        }else{
            return this.name + " cannot be prepared"
        }
    },
    change: function(cuisine){
        if(this.type === "indian"){
            return this.type = cuisine
        }
    },
    toDelete: function(ingredient){
        var arr = [];
        for(var i = 0; i < this.ingredients.length; i++){
                if(this.ingredients[i] === ingredient){
                    continue;
                    
                }
                    arr[arr.length]= this.ingredients[i]
                                     
        }
        return this.ingredients = arr;
    
    }
    }
    console.log(types.print())
    console.log(types.toCheck())
    console.log(types.change("mexican"));
    console.log(types.toDelete("milk"))

}


console.log(Representing("chowder with vegetables", "indian",["milk", "egs", "onion", "garlic"], 13));