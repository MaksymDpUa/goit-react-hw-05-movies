import { FilmCard } from 'components/filmCard/FilmCard';
import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getFilmById } from 'servises/api';

function MovieDetails() {
  const [film, setFilm] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    getFilmById(movieId)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error('Something wrong. Please, whrite correct request.');
        }
      })
      .then(film => {
        console.log(film)
        setFilm(film)
      })
      .catch(err => alert(err))
      .finally();
  }, []);

  return (
    <>
      {film && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w200${film.poster_path}`}
            alt={film.title}
          />
          <h2>{film.title}</h2>
          <p>User score: {film.popularity}%</p>
          <p>Overview: {film.overview} </p>
          <h3>Genres</h3>
          <ul>{film.genres.map(genre => <li key={genre.id}>{ genre.name}</li>)}</ul>
        </div>
      )}

      <FilmCard film={film} />
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </>
  );
}

export default MovieDetails;
