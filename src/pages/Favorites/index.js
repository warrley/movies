import { useEffect, useState } from 'react';
import './favorites.css'
import { Link } from 'react-router-dom';

const Favorites = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {

        const myList = localStorage.getItem("@myList");
        setMovie(JSON.parse(myList) || [])

    },[])

    return (
        <div className='my-movies'>
            <h1>My Movies</h1>

            <ul>
                {movie.map(movie => (
                    <li key={movie.id}>
                        <span>{movie.title}</span>
                        <div>
                            <Link to={`/movie/${movie.id}`}>See details</Link>
                            <button>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Favorites;