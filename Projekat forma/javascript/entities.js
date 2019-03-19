function Movie(title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = genre;
    this.getData = function () {
        return `${this.title}, ${this.length} min, ${this.genre.getData()}`;
    }
};

function Genre(genre) {
    this.genre = genre;
    this.getData = function () {
        return `${this.genre}`;
    }
};

function createMovie(title, length, genre) {
    let newGenre = new Genre(genre);
    return new Movie(title, length, newGenre);
}


////// create Program

function Program(program, date) {
    this.program = program;
    this.date = date;
    this.movieList = [];
    this.getDataProgram = function () {
        return `${this.program} ${this.date}`;
    }
};

function createProgram(program, date) {
    return new Program(program, date)
}
