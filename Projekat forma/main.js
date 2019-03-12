var $movie = document.querySelector(".movie");
var $length = document.querySelector(".length");
var $genre = document.querySelector("select");
var $button = document.querySelector("button");

var movies = [];

function onCreateMovie() {
    this.movieValue = $movie.value;
    this.lengthValue = $length.value;
    this.genreValue = $genre.value;

    console.log(this.movieValue, this.lengthValue);
}
var movieOne = new onCreateMovie();
$button.addEventListener("click", onCreateMovie())