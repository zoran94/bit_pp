const $movie = document.querySelector(".movie");
const $length = document.querySelector(".length");
const $genre = document.querySelector("select");
const $button = document.querySelector("button");
const $moviesList = document.querySelector(".right");
const $getDiv = document.querySelector(".er");

const $select = document.querySelector("#select-movie")

function renderMovie(arr) {
    $moviesList.textContent = "";
    $select.textContent = "";
    for (let i = 0; i < arr.length; i++) {
        const p = document.createElement("p");
        p.textContent = arr[i].getData();
        $moviesList.appendChild(p);
        const options = document.createElement("option");
        options.textContent = arr[i].getData();
        $select.appendChild(options)

    }

    let allMovies = 0;
    for (let i = 0; i < movies.length; i++) {
        allMovies += parseInt(movies[i].length);
        const movieLen = document.querySelector(".movie-length");
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
    const par = document.createElement("p");
    par.textContent = "Please, fill out this form!"
    $getDiv.appendChild(par);
};

function clear() {
    $getDiv.textContent = "";
    $getDiv.classList.remove("error");
};






// rendering program

let allPrograms = [];

const $button2 = document.querySelector(".submitP");
const $program = document.querySelector(".program");
const $date = document.querySelector(".date");
const $selectOpt = document.querySelector(".select-program")

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


function renderProgram(arr) {
    $selectOpt.textContent = "";
    for (let i = 0; i < arr.length; i++) {

        const createOpt = document.createElement("option");
        createOpt.textContent = arr[i].getDataProgram();
        $selectOpt.appendChild(createOpt);

    }
}

function onCreateProgram(e) {
    e.preventDefault();


    const programData = getProgramData();
    const makeProgram = createProgram(programData.program, programData.date);
    allPrograms.push(makeProgram);
    renderProgram(allPrograms);
    //console.log(renderProgram);
    clearProgram();
}

$button2.addEventListener("click", onCreateProgram);




const $addMovie = document.querySelector("#addMovie");




