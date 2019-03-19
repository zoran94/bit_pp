//"use strict"

(function () {

    class Genre {
        constructor(name) {

            this.name = name;
        }

        getData() {
            return `${this.name.charAt(0).toUpperCase()}${this.name[this.name.length - 1].toUpperCase()}`;
        };

    };

    class Movie {

        constructor(title, length, genre) {
            this.title = title;
            this.length = length;
            this.genre = genre;

        }
        getData() {
            return `${this.title} ${this.length} min ${this.genre.getData()}`;
        };
    };


    class Program {

        constructor(date) {
            this.date = new Date(date).toLocaleDateString();
            this.movieList = [];
            this.totalNumOfMovies = 0;

        };
        addMovie(movie) {
            this.movieList.push(movie);
            this.totalNumOfMovies++;
        };

        getData() {
            let movieLength = 0;
            let formatedStr = "";

            for (var i = 0; i < this.movieList.length; i++) {
                movieLength += this.movieList[i].length;
                formatedStr += this.movieList[i].getData() + "\n"

            };

            return `${this.date} program duration ${movieLength}  \n ${formatedStr}`;
        }
    }


    class Festival {

        constructor(name) {
            this.name = name;
            this.programList = [];

        };
        addProgram(program) {
            this.programList.push(program);

        };
        getData() {

            let sentence = 0;
            let sentenceTwo = "";
            for (var i = 0; i < this.programList.length; i++) {
                sentence += this.programList[i].totalNumOfMovies;
                sentenceTwo += this.programList[i].getData() + "\n";

            };
            console.log(`${this.name} has ${sentence} movie titles \n ${sentenceTwo}`)
        }

    }



    const action = new Genre("action");
    const drama = new Genre("drama");
    const adventure = new Genre("adventure")
    const comedy = new Genre("comedy");


    function createMovie(title, length, genre) {
        return new Movie(title, length, genre)
    }

    const movie1 = new Movie("Johnwick", 123, action);
    const movie2 = new Movie("Luckyone", 120, drama);
    const movie3 = new Movie("Indianajones", 135, adventure);
    const movie4 = new Movie("JonnyEnglish", 180, comedy);

    function createProgram(date) {
        return new Program(date)
    }
    const program1 = new Program("08.10.2018");
    const program2 = new createProgram("11.12.2020");

    const fest = new Festival("Weekend");

    program1.addMovie(movie1);
    program1.addMovie(movie2);
    program2.addMovie(movie3);
    program2.addMovie(movie4);

    fest.addProgram(program1);
    fest.addProgram(program2);


    // console.log(program1.addMovie(movie1));
    // console.log(program2.addMovie(movie3));
    // console.log(fest.addProgram(program1))
    console.log(`${fest.getData()}`);




})()



