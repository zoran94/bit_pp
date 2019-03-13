var $movie = document.querySelector(".movie");
var $length = document.querySelector(".length");
var $genre = document.querySelector("select");
var $button = document.querySelector("button");
var $moviesList = document.querySelector(".right");
var $getDiv = document.querySelector(".er");


function renderMovie(arr) {
    $moviesList.textContent = "";
    for (var i = 0; i < arr.length; i++) {
        var p = document.createElement("p");
        p.textContent = arr[i].getData();
        $moviesList.appendChild(p);
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
    $getDiv.textContent = ""
}