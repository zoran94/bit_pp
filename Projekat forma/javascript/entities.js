function Movie(title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = genre;
    this.getData = function () {
        return this.title + ", " + this.length + " min " + ", " + this.genre.getData();
    }
};

function Genre(genre) {
    this.genre = genre;
    this.getData = function () {
        return this.genre;
    }
};

function createMovie(title, length, genre) {
    var newGenre = new Genre(genre);
    return new Movie(title, length, newGenre);
}

