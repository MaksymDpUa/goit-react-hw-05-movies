import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getTrendingFilms } from 'servises/api';


const API_KEY = '08b33049f839026db786bd595752148e';
function getFilms() {
  return fetch('https://api.themoviedb.org/3/trending/all/day?api_key=08b33049f839026db786bd595752148e');
}



function Home() {

const [trendingFilms, setTrendingFilms] = useState([])


  useEffect(() => {
    getTrendingFilms().then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error('Something wrong. Please, whrite correct request.');
        }
      })
    .then(films => {
        console.log(films);
        setTrendingFilms(films.results);
      })
      .catch(err => alert(err))
  }, [])
  

  return (<><h1>Trending today</h1>
    <ul>{trendingFilms.map(film => <li key={film.id} > <Link to={`/movies/${film.id}`}>{ film.title?  film.title : film.name}</Link></li>) }</ul>
  </>)
 
}

export default Home