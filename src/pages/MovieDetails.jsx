import AdditionalInfoLinkList from 'components/additionalInfoLinkList/AdditionalInfoLinkList';
import BtnBack from 'components/BtnBack/BtnBack';
import { FilmCard } from 'components/filmCard/FilmCard';
import { useState, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getFilmById } from 'servises/api';

function MovieDetails() {
  const [film, setFilm] = useState();
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getFilmById(movieId)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error('Something wrong. Please, whrite correct request.');
        }
      })
      .then(film => setFilm(film))
      .catch(err => alert(err))
      .finally();
  }, [movieId]);

  return (
    <>
      <BtnBack location={location}>Go back</BtnBack>
      {film && <FilmCard film={film} />}
      <AdditionalInfoLinkList locationURl={location} />
      <Outlet />
    </>
  );
}

export default MovieDetails;
