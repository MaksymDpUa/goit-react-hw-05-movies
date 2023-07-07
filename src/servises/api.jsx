const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'api_key=08b33049f839026db786bd595752148e';

// function getFilms(serchValue, endPoint) {
//   return fetch(
//     `${BASE_URL}${endPoint}?api_key=${API_KEY}&q=${serchValue}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
//   );
// }

function getTrendingFilms() {
  return fetch(`${BASE_URL}trending/movie/day?${API_KEY}`);
  // console.log(films.data.results);
  // return films.data.results
}

function getFilmById(filmId) {
    return fetch(`${BASE_URL}movie/${filmId}?${API_KEY}`)
}


export { getTrendingFilms, getFilmById }