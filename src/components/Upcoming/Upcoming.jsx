import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header'
import './Upcoming.css'


function Upcoming() {
  const data = useLoaderData();

  return (
    <div>
        <Header/>
      <h2 className='kerak_h2'>Upcoming</h2>
      <ul>
        {
            data.results.map(movie => (
              <li className='item' key={movie.id}>
                <img 
                width={200}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                alt={movie.title} 
                className="movie-poster" 
                />
                <strong>{movie.title}</strong></li>
            ))
        }
      </ul>
    </div>
  );
}

export default Upcoming ;
