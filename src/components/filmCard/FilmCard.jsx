import css from './FilmCard.module.css';

export const FilmCard = ({ film }) => {
  return (
    <section className={css.container}>
      <img
        className={css.poster}
        src={`https://image.tmdb.org/t/p/w200${film.poster_path}`}
        alt={film.title}
      />
      <div> 
        <h2>{film.title}</h2>
        <p>User score: {film.popularity}%</p>
        <p>Overview: {film.overview} </p>
        <h3>Genres</h3>
        <ul>
          {film.genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
