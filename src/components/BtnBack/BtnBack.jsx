import { Link } from 'react-router-dom';
import css from './BtnBack.module.css';

function BtnBack({ location }) {
  return (
    <Link to={location.state?.from ?? '/'} className={css.button}>
      Go back
    </Link>
  );
}

export default BtnBack;
