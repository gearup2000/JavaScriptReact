const numberOfFilms = +prompt('How many movies you have watched the last month?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
    };

const a = prompt('The last movie you watched?', '');
const b = prompt('Your rate?', '');
const c = prompt('The last movie you watched?', '');
const d = prompt('Your rate?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);