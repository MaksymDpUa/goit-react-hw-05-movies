import AdditionalInfoLinkList from 'components/additionalInfoLinkList/AdditionalInfoLinkList';
import BtnBack from 'components/BtnBack/BtnBack';
import { FilmCard } from 'components/filmCard/FilmCard';
import { useState, useEffect, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getFilmById } from 'servises/api';

function MovieDetails() {
  const [film, setFilm] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
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
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <>
      <BtnBack location={location}>Go back</BtnBack>
      {isLoading && <div>Loading...</div>}
      {film && <FilmCard film={film} />}
      <AdditionalInfoLinkList locationURl={location} />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default MovieDetails;
