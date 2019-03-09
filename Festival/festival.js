

(function(){

    function Genre(name){
        this.name= name;

        this.getData = function(){
            return this.name.charAt(0).toUpperCase() + "" + this.name[this.name.length - 1].toUpperCase();
        };
    };
    
        
    function Movie(title, length, genre){
        this.title = title;
        this.length = length;
    
        this.getData = function(){
            return this.title + ", " +  this.length + "min, " + genre.getData();
        };
        
    };
  

    function Program(date){
        this.date = new Date(date);
        this.movieList = [];
        this.totalNumOfMovies = 0;

        this.addMovie = function(movie){
            this.movieList.push(movie);
            this.totalNumOfMovies++;
        };

        this.getData = function(){
            var movieLength = 0;
            var formatedStr = "";
            
            for(var i = 0; i < this.movieList.length; i++){
                movieLength+=this.movieList[i].length;
                formatedStr+=this.movieList[i].getData() + "\n"
                
            };
            
                return this.date + ", " + "program duration " + movieLength + "\n" + formatedStr;
        }
    };


    function Festival(name){
        this.name = name;
        this.programList  = [];
        

        this.addProgram = function(program){
            this.programList.push(program);
          
        };

        this.getData = function(){

            var sentence = 0;
                var sentenceTwo = "";
                for(var i = 0; i < this.programList.length; i++){
                    sentence+=this.programList[i].totalNumOfMovies;
                    sentenceTwo+= this.programList[i].getData() + "\n";
                   
                };
               console.log( this.name + " has " + sentence + " movie titles \n" + sentenceTwo)
        }
        
    };


    var action = new Genre("action");
    var drama = new Genre("drama");
    var adventure = new Genre("adventure")
    var comedy = new Genre("comedy");


        function createMovie(title, length, genre){
            return new Movie(title, length, genre)
        }

    var movie1 = new Movie("Johnwick", 123, action);
    var movie2 = new Movie("Luckyone", 120, drama);
    var movie3 = new Movie("Indianajones", 135, adventure);
    var movie4 = new Movie("JonnyEnglish", 180, comedy);

    function createProgram(date){
        return new Program(date)
    }
    var program1 = new Program("08.10.2018");
    var program2 = new createProgram("11.12.2020");

    var fest = new Festival("Weekend");

    program1.addMovie(movie1);
    program1.addMovie(movie2);
    program2.addMovie(movie3);
    program2.addMovie(movie4);

    fest.addProgram(program1);
    fest.addProgram(program2);


    // console.log(program1.addMovie(movie1));
    // console.log(program2.addMovie(movie3));
    // console.log(fest.addProgram(program1))
     console.log(fest.getData());
   



})()



