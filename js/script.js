'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
// personalMovieDB.count = numberOfFilms;

const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
      filmRate = prompt('На сколько оцените его?', ''),
      lastFilm2 = prompt('Один из последних просмотренных фильмов?', ''),
      filmRate2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastFilm] = filmRate;
personalMovieDB.movies[lastFilm2] = filmRate2;

// alert(personalMovieDB.count);
console.log(personalMovieDB);
