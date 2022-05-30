/* Task for the lesson:

1) Automate user questions about movies using a loop

2) Make it so that the user cannot leave an answer as an empty string, 
   cancel the answer, or enter a movie title longer than 50 characters.
   If this happens, we return the user to the questions again

3) Using conditions, check personalMovieDB.count, 
   and if it is less than 10 - and display the message "Quite a few films watched",
   if the number is from 10 to 30 - "You are a classic viewer",
   and if more - "You are a movie fan". And if none of the options matched, "An error occurred"

4) Practice and rewrite the loop in two more ways */

'use strict';

const numberOfFilms = +prompt('How many movies you have watched the last month?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
    };

for (let i = 0; i < 2; i++) {
    const a = prompt('The last movie you watched?', '');
    const b = prompt('Your rate?', '');

    if (a != null && b != null && a != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done!');
    } else {
        console.log('Error!');
        i++;
    }

}

if (personalMovieDB.count < 10) {
    console.log("Quite a few films watched");
} else if (personalMovieDB.count >=10 && personalMovieDB.count <30) {
    console.log("You are a classic viewer");
} else if (personalMovieDB.count >=30) {
    console.log("You are a movie fan");
} else {
    console.log("An error occured!");
}

console.log(personalMovieDB);

//P.S Some errors to be fixed in the future.