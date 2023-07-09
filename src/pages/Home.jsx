import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingFilms } from 'servises/api';

function Home() {
  const [trendingFilms, setTrendingFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingFilms()
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error('Something wrong. Please, whrite correct request.');
        }
      })
      .then(films => setTrendingFilms(films.results))
      .catch(err => alert(err));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {trendingFilms.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`} state={{ from: location }}>
              {film.title ? film.title : film.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
