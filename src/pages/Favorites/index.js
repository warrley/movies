import { useEffect, useState } from 'react';
import './favorites.css'
import { Link } from 'react-router-dom';
import { Delete, Trash } from 'lucide-react';

const Favorites = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {

        const myList = localStorage.getItem("@myList");
        setMovie(JSON.parse(myList) || [])

    },[])

    const handleDelete = (id) => {
        const updatedMovies = (movie.filter(movie => movie.id !== id));
        setMovie(updatedMovies);

        localStorage.setItem("@myList", JSON.stringify(updatedMovies))
    }

    return (
        <div className='my-movies'>
            <h1>My Movies</h1>

            <ul>
                {movie.map(movie => (
                    <li key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                        <div className='hero'>
                            <span>{movie.title}</span>
                            <div>
                                <Link to={`/movie/${movie.id}`}>See details</Link>
                                <button onClick={() => handleDelete(movie.id)}> <Trash color='blue' fill='currentColor' height="30" width="30"/> </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Favorites;