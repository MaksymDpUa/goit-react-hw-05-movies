import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmCredits } from 'servises/api';

import css from './Cast.module.css';

function Cast() {
  const { movieId } = useParams();
  const [filmCredits, setFilmCredits] = useState([]);

  useEffect(() => {
    getFilmCredits(movieId)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error('Something wrong. Please, whrite correct request.');
        }
      })
      .then(data => setFilmCredits(data.cast))
      .catch(err => alert(err))
      .finally();
  }, [movieId]);

  return (
    <section>
      <ul>
        {filmCredits?.map(el => (
          <li key={el.credit_id} className={css.listItem}>
            <img
              className={css.photo}
              src={`https://image.tmdb.org/t/p/w200${el.profile_path}`}
              alt=""
            />
            <div>
              <h3>{el.name}</h3>
              <p>Character: {el.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Cast;
