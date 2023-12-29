const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start,
    rememberMyFilms,
    detectPersonalLevel,
    showMyDB,
    writeYourGenres,
    toggleMyDB, 
}

function start() {
    personalMovieDB.count = +prompt('how many movies have you seen?', '');
    
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt('please, tell us how many films have you seen? (enter correct data)', '');
        // personalMovieDB.count = personalMovieDB.count;
    }
    }


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('last film name?', '').trim();
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
        console.log('you really like movies')
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
    for (let i = 1; i <= 3; i++) {
        let genre = prompt(`your fav genre number ${i}?`, '');
        if (genre === '' || genre ===  null) {
            console.log('incorrect')
            i--;
        } else {
        personalMovieDB.genres[i - 1] = genre;
        }
    personalMovieDB.genres.forEach((item, index) => {
        console.log(`fav genre number ${index + 1 } is ${item}`)
    })
    }
    
}

function toggleMyDB() {
    if (personalMovieDB.private) {
        personalMovieDB.private = false
    } else {
        personalMovieDB.private = true
    }
}

console.log(personalMovieDB)
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.toggleMyDB()

