const numberOfFilms = +prompt("Скільки фільмі ви вже подивилися?","");
const personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: {},
privat: false
};

const a = prompt("Один з останніх переглянутих  фільмів?",""),
      b = prompt("На скільки ви оціните його?"),
      c = prompt("Один з останніх переглянутих  фільмів?",""),
      d = prompt("На скільки ви оціните його?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d; 

console.log(personalMovieDB);