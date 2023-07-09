import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmReview } from 'servises/api';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getFilmReview(movieId)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error('Something wrong. Please, whrite correct request.');
        }
      })
      .then(data => setReviews(data.results))
      .catch(err => alert(err))
      .finally();
  }, [movieId]);

  return (
    <section>
      {reviews.length === 0 && <p>There are no reviews yet</p>}
      {reviews.length !== 0 && (
        <ul>
          {reviews.map(review => (
            <li key={review.author}>
              <h4>Author: {review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Reviews;
