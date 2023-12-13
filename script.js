let numberOfFilms = +prompt('how many movies have you seen?','');

function start() {
numberOfFilms = +prompt('how many movies have you seen?','');

while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('how many films have you seen?', '');
    personalMovieDB.count = numberOfFilms;
    
}
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}





function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('last film name?', '');
        const b = prompt(`rate ${a}`, '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        console.log('done');
    personalMovieDB.movies[a] = b;
    } else {
        console.log('error');
        i--
    }
    }
}


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('not many')
    } else if (personalMovieDB.count < 30 && personalMovieDB.count > 10) {
        console.log('not bad')
    } else if (personalMovieDB.count > 30) {
        console.log('you relly like movies')
    } else {
        console.log('error')
    }
}

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB.private)
    }
}


function writeYourGenres() {
    for (let i = 1; i <= 3;i++) {
        personalMovieDB.genres[i - 1] = prompt(`your fav genre number ${i}?`, '');
    }
}

console.log(personalMovieDB)
start();
rememberMyFilms();
writeYourGenres();
detectPersonalLevel();
showMyDB();

