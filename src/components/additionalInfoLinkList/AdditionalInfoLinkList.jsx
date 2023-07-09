import { Link } from 'react-router-dom';

import css from './AdditionalInfoLinkList.module.css';

function AdditionalInfoLinkList({ locationURl }) {
  return (
    <div className={css.container}>
      <h4>Additional information</h4>
      <ul>
        <li>
          <Link to="cast" state={{ from: locationURl.state?.from }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: locationURl.state?.from }}>
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AdditionalInfoLinkList;
