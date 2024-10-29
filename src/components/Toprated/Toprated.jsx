import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header'
import './Toprated.css'

function Toprated() {
  const data = useLoaderData();

  return (
    <div>
          <Header/>
      <h2 className='kerak_h2'>Top Rated</h2>
      <ul className=''>
        {
            data.results.map(movie => (
              <li className='item' key={movie.id}>
                <img 
                width={200}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                alt={movie.title} 
                className="movie-poster" 
                />{movie.title}</li>
            ))
        }
      </ul>
    </div>
  );
}

export default Toprated;
