import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function MovieDetails() {
  return (
    <div><Link to='cast'>Cast</Link>
      <Link to='reviews'>Reviews</Link><Outlet/></div>
    
  )
}

export default MovieDetails