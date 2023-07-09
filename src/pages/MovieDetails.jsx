// import AdditionalInfoLinkList from 'components/additionalInfoLinkList/AdditionalInfoLinkList';
import BtnBack from 'components/BtnBack/BtnBack';
// import { FilmCard } from 'components/filmCard/FilmCard';
import { useState, useEffect, Suspense, lazy } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getFilmById } from 'servises/api';

function MovieDetails() {
  const [film, setFilm] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const AdditionalInfoLinkList = lazy(() =>
    import('components/additionalInfoLinkList/AdditionalInfoLinkList')
  );
  const FilmCard = lazy(() => import('components/filmCard/FilmCard'));
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
      <Suspense fallback={<div>Loading...</div>}>
        <BtnBack location={location}>Go back</BtnBack>
        {isLoading && <div>Loading...</div>}
        {film && <FilmCard film={film} />}
        <AdditionalInfoLinkList locationURl={location} />
        <Outlet />
      </Suspense>
    </>
  );
}

export default MovieDetails;
