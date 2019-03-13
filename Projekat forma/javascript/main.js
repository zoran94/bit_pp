
var movies = [];

function onCreateMovie(e) {
    e.preventDefault();

    var movieData = getMovieData()
    var makeMovie = createMovie(movieData.title, movieData.length, movieData.genre);
    movies.push(makeMovie);
    renderMovie(movies);
    clearMovie();

};


$button.addEventListener("click", onCreateMovie);

