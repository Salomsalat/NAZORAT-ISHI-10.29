import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
   <>
    <div className='kerak'>
      <div className="header_list">
      <Link className='header_link' to="/">Home</Link>
    <Link className='header_link' to="/popular">Popular</Link>
    <Link className='header_link' to="/upcoming">Upcoming</Link>
    <Link className='header_link' to="/toprated">Top Rated</Link>
      </div>
    </div>
    </>
  );
}

export default Header;
