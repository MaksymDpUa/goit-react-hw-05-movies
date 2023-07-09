const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'api_key=08b33049f839026db786bd595752148e';



function getTrendingFilms() {
  return fetch(`${BASE_URL}trending/movie/day?${API_KEY}`);
}

function getFilmById(filmId) {
    return fetch(`${BASE_URL}movie/${filmId}?${API_KEY}`)
}

function getFilmByTitle(title) {
    return fetch(`${BASE_URL}search/movie?query=${title}&${API_KEY}`)
}

function getFilmCredits(filmId) {
  return fetch(`${BASE_URL}movie/${filmId}/credits?language=en-US&${API_KEY}`);
}
 
function getFilmReview(filmId) {
  return fetch(
    `${BASE_URL}movie/${filmId}/reviews?language=en-US&${API_KEY}&page=1`
  );
}


export {
  getTrendingFilms,
  getFilmById,
  getFilmByTitle,
  getFilmCredits,
  getFilmReview,
};