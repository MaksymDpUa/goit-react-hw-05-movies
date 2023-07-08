import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getFilmCredits } from 'servises/api';

function Cast() {
  // const {state: movieId} = useLocation();
  // console.log(movieId);
  const {movieId} = useParams();
  // console.log(movieId)
  const [filmCredits, setFilmCredits] = useState([])

useEffect(() => {
getFilmCredits(movieId).then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error('Something wrong. Please, whrite correct request.');
        }
      })
      .then(data => {
        setFilmCredits(data.cast);
        console.log(data.cast);
      })
      .catch(err => alert(err))
      .finally();
}, [movieId])

// name, "/83o3koL82jt30EJ0rz4Bnzrt2dd.jpg", character
  return (
    <section>
      <ul>
        {filmCredits?.map(el => 
          (<li key={el.id}><img src={`https://image.tmdb.org/t/p/w100${el.profile_path}`} alt="" />{ el.name}</li>))}
      </ul>
    </section>
  )
}


export default Cast