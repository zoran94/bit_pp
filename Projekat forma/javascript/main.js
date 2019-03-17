
var movies = [];

function onCreateMovie(e) {
    e.preventDefault();

    if (!$movie.value || !$length.value || !$genre.value) {
        printError();
    } else {
        clear();
        var movieData = getMovieData()
        var makeMovie = createMovie(movieData.title, movieData.length, movieData.genre);
        movies.push(makeMovie);
        renderMovie(movies);
        console.log(movies)
        clearMovie();
    }
    
};
$button.addEventListener("click", onCreateMovie);



