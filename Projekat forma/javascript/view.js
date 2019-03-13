var $movie = document.querySelector(".movie");
var $length = document.querySelector(".length");
var $genre = document.querySelector("select");
var $button = document.querySelector("button");
var $moviesList = document.querySelector("div");



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