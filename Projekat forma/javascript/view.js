var $movie = document.querySelector(".movie");
var $length = document.querySelector(".length");
var $genre = document.querySelector("select");
var $button = document.querySelector("button");
var $moviesList = document.querySelector(".right");
var $getDiv = document.querySelector(".er");

var $select = document.querySelector("#select-movie")

function renderMovie(arr) {
    $moviesList.textContent = "";
    $select .textContent = "";
    for (var i = 0; i < arr.length; i++) {
        var p = document.createElement("p");
        p.textContent = arr[i].getData();
        $moviesList.appendChild(p);
        var options = document.createElement("option");
        options.textContent = arr[i].getData();
        $select.appendChild(options)
       
    }

    var allMovies = 0;
    for(var i = 0; i < movies.length; i++){
        allMovies+=parseInt(movies[i].length);
        var movieLen = document.querySelector(".movie-length");
        movieLen.textContent = allMovies;
    }

};


function getMovieData() {

    return {
        title: $movie.value,
        length: $length.value,
        genre: $genre.value,
    }
}
function clearMovie() {

    $movie.value = "";
    $length.value = "";
    $genre.value = "";
};


function printError() {
    $getDiv.classList.add("error")
    var par = document.createElement("p");
    par.textContent = "Please, fill out this form!"
    $getDiv.appendChild(par);
};

function clear() {
    $getDiv.textContent = "";
    $getDiv.classList.remove("error");
};






// rendering program

var allPrograms = [];

var $button2 = document.querySelector(".submitP");
var $program = document.querySelector(".program");
var $date = document.querySelector(".date");
var $selectOpt = document.querySelector(".select-program")

function getProgramData() {

    return {
        program: $program.value,
        date: $date.value
    }
};


function clearProgram() {

    $program.value = "";
    $date.value = "";
   
};


function renderProgram(arr){
    $selectOpt.textContent = "";
    for(var i = 0; i < arr.length; i++){

        var createOpt = document.createElement("option");
        createOpt.textContent = arr[i].getDataProgram();
        $selectOpt.appendChild(createOpt);

    }
}

function onCreateProgram(e){
    e.preventDefault();


    var programData = getProgramData();
    var makeProgram = createProgram(programData.program, programData.date);
    allPrograms.push(makeProgram);
    renderProgram(allPrograms);
    //console.log(renderProgram);
    clearProgram();
}

$button2.addEventListener("click", onCreateProgram);




var $addMovie = document.querySelector("#addMovie");




