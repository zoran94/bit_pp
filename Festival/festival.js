'use strict'


(function(){

    function Genre(name){
        this.name= name;

        this.getData = function(){
            return this.name.charAt(0) + "" + this.name[this.name.length - 1].toUpperCase();
        };
    };
    
        
    function Movie(title, length, genre){
        this.title = title;
        this.length = length;
        this.genre = genre;

        this.getData = function(){
            return this.title + ", " +  this.length + "min, " + this.genre.getData();
        };
        
    };
  

    function Program(date){
        this.date = new Date();
        this.movieList = [];
        this.totalNumOfMovies = 0;

        this.addMovie = function(movie){
            this.movieList.push(movie);
            this.totalNumOfMovies++;
        };

        this.getData = function(){
            var movieLength = 0;
            
            for(var i = 0; i < this.movieList.length; i++){
                movieLength+=this.movieList[i].length;
                
            };
            var firstLine = "\t" + this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + ". Program length from all movies: " + movieLength + " minutes.";
            var formatedStr = "";
            for(var j = 0; j < this.movieList.length; j++){
                formatedStr+= "\n\t\t" + this.movieList[j].getData();
            };
            return firstLine + formatedStr;

        }
    };


    function Festival(name){
        this.name = name;
        this.programList  = [];
        this.numOfMovies = 0;

        this.addProgram = function(program){
            this.programList.push(program);
            this.numOfMovies +=program.numOfMovies;
        };

        this.getData = function(){
            var sentence =  this.name + " festival has " + this.numOfMovies + " movie titles\n"
                var sentenceTwo = "";
                for(var i = 0; i < this.programList.length; i++){
                    sentenceTwo+= this.programList[i].getData() + "\n";
                   
                };
                return sentence + sentenceTwo;
        }
        
    };

    function createMovie(title, length, genre){
                return new Movie(title, length, genre)
    };

    function createProgram(date){
        return new Program(date)
    };


    var action = new Genre("Action");
    var adventure = new Genre("Adventure");
    var comedy = new Genre("Comedy");

    var johnWick = new createMovie("John Wick", 150, action);
    var indianaJones = new createMovie("Indiana Jones", 90, adventure);
    var americanPie = new createMovie("American pie", 125, comedy);
    var escapePlan = new createProgram("EscapePlan", 120, action)

    var program1 = new createProgram("12.05.2019");
    var program2 = new createProgram("03.09.2020");

    program1.addMovie(johnWick);
    program1.addMovie(indianaJones);
    program2.addMovie(americanPie);
    program2.addMovie(escapePlan);
    
    var week = new Festival("Weekend");

    week.addProgram(program1);
    week.addProgram(program2);

    console.log(week.getData())
   



})()