import { Header } from 'components/header/Header';
import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div className={css.container}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
