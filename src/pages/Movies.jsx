import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  // const movieId = searchParams.get('movieId');
  const handleOnSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ movieId: evt.target.elements.search.value });
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label>
          <input type="text" name="search" />
        </label>
        <button type="submit">Search</button>
      </form>

      <Link to=":movieId">Movie on ID</Link>
    </div>
  );
}

export default Movies;
