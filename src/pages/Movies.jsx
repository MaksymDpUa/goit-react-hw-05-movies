import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getFilmByTitle } from 'servises/api';

function Movies() {
  const [findedFilms, setFindedFilms] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSearchQvery, setISearchQvery] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const searchQuery = searchParams.get('query');
    if (!searchQuery) {
      setSearchParams({});
      setISearchQvery(false);
      return;
    }
    setISearchQvery(true);
    getFilmByTitle(searchQuery)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error('Something wrong. Please, whrite correct request.');
        }
      })
      .then(data => setFindedFilms(data.results))
      .catch(err => alert(err))
      .finally();
  }, [searchParams, setSearchParams]);

  const handleOnSubmit = evt => {
    evt.preventDefault();
    const searchQuery = evt.target.elements.search.value;
    setSearchParams({ query: searchQuery });
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label>
          <input type="text" name="search" />
        </label>
        <button type="submit">Search</button>
      </form>
      {isSearchQvery && (
        <ul>
          {findedFilms?.map(film => (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`} state={{ from: location }}>
                {film.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Movies;
