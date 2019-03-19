
let movies = [];

function onCreateMovie(e) {
    e.preventDefault();

    if (!$movie.value || !$length.value || !$genre.value) {
        printError();
    } else {
        clear();
        let movieData = getMovieData()
        const makeMovie = createMovie(movieData.title, movieData.length, movieData.genre);
        movies.push(makeMovie);
        renderMovie(movies);
        console.log(movies)
        clearMovie();
    }

};
$button.addEventListener("click", onCreateMovie);



