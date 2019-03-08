"use strict"

    (function () {


        function Genre(name) {
            this.name = name;

            this.getData = function () {

                return (this.name[0] + "" + this.name[this.name.length - 1]).toUpperCase();
            }

        };
        var genre = new Genre("action");
        console.log(genre.getData());

        function Movie(title, length) {
            this.title = title;

            this.length = length;

            this.getDataTo = function () {
                return title + ", " + length + ", " + genre.getData()
            }

        };
        var movie = new Movie("Escape plan", 129);
        console.log(movie.getDataTo());

        function Program(date) {
            this.date = date;
            this.listOfMovies = [];
            this.totalNumOfMovies = 0;

            this.addMovie = function (movie) {
                this.listOfMovies.push(movie);
                this.totalNumOfMovies = this.listOfMovies.length;
            };
            this.getDataThree = function () {
                var long = 0;
                var getAll = "";
                for (var i = 0; i < this.listOfMovies.length; i++) {
                    long += this.listOfMovies[i].length;
                    getAll += this.listOfMovies[i].getDataTo();
                }
                return this.date + long + getAll;

            };
        };

        function Festival(name) {
            this.name = name;
            this.programList = [];
            this.numOfMovies = 0;

            this.addProgram = function (program) {
                var totalNum = 0;
                this.programList.push(program);
                totalNum += program.totalNumOfMovies;
            };


        }









    })()