// Task 1 Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!


var favouriteCoffe = {
    name: "machiato",
    strength: "strong",
    flavour: "sweet",
    milk: "yes",
}
console.log(favouriteCoffe.name);

// Task 2 Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity. 

var favouriteMovie = {
    title: "John Wick",
    actor: "Willem Dafoe",
    genre: "action",
    popularity: "very popular"
}
console.log(favouriteMovie.genre);


// Task 3 Write a function that creates an object that represent a computer program. Each program is described by:
//  description,  programming language, git repository, boolean status that says if the program is completed or not.
//   Add a method that prints out program’s repository,  a method that checks if the program is written in JavaScript 
//   as well as a method that checks if program is completed or not.

function computerProgram( lang, rep, bool){

    var createProgram = {
        //description: descrip,
        language: lang,
        repository:rep,
        boolean: bool,
        print: function(){
           return this.repository;
        },
        toCheck: function(){
            if(this.language === "JavaScript"){
                return "program is written in JavaScript"
            }else{
                return "program is not written in javaScript"
            }
        },
        isCompleted: function(){
            if(this.boolean){
                return "Program is completed"
            }else {
                return "program is not completed"
            }
        }
    }
    console.log(createProgram.print())
    console.log(createProgram.toCheck())
    console.log(createProgram.isCompleted())
}
  
console.log(computerProgram("JavaScript", "Zoran repository", "true",));



//  Task 4 Write a function that creates an object that represents a culinary recipe. Each recipe is described by:
//   name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
//  Add a method that prints out all the ingredients necessary for the meal preparation. 
//  Add a method that checks if a meal can be prepared for 15 minutes. 
//  Add a method that changes the type of cuisine to the given value. 
//  Add a method that delete a given ingredient from the list of ingredients.  
 function representing(name, type, listOfIngridients, time){

    var culinaryRecipe = {
        name: name,
        type: type,
        ingredients: listOfIngridients,
        preparingTime: time,
        
        print: function(){
            return this.ingredients
        },
        toCheck: function(){
            if(this.preparingTime < 15){
                return this.name + " can be prepared"
            }else{
                return this.name + " cannot be prepared"
            }
        },
        change: function(){
            if(this.type === "indian"){
                return this.type = "Mexican"
            }
        },
        toDelete: function(ingredient){
            var arr = [];
            for(var i = 0; i < this.ingredients.length; i++){
                    if(this.ingredients[i] === ingredient){
                        delete this.ingredients[i];
                        
                    }
                        arr[arr.length]= this.ingredients[i]
                      return  arr
                        
                    
            }
        },
        
        
    }
    console.log(culinaryRecipe.print());
    console.log(culinaryRecipe.toCheck());
    console.log(culinaryRecipe.change());
    console.log(culinaryRecipe.toDelete("milk"))

 }
console.log(representing("chowder with vegetables", "indian",["milk", "egs", "onion", "garlic"], 13, ));






