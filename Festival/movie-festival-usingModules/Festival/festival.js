//"use strict"
// import Genre from "./genre.js"

(function () {
    const {Genre} = require ("./genre.js")
    const {Movie} = require ("./movie")
    const {Program} = require("./program")
    const {Festival} = require("./fest")

   

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



