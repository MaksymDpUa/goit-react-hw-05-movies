import { NavLink } from 'react-router-dom'
import'./Header.css'

export const Header = () => {
    return      (<header className='header'>
        <nav className='nav'>
          <NavLink className='link' to="/">Home</NavLink>
          <NavLink className='link' to="/movies">Movies</NavLink>
        </nav>
      </header>)
}