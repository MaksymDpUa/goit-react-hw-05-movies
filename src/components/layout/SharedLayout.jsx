import { Header } from 'components/header/Header';
import { NavLink, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      {/* <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header> */}
      <Header/>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
