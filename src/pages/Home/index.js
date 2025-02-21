import { useEffect, useState } from "react";
import api from '../../services/api'
import { Link } from "react-router-dom";
import './home.css'
import { Play } from "lucide-react";

// URL of API: https://api.themoviedb.org/3/movie/now_playing?api_key=d3f900a2a7fd83e3285bbad5c82abf44

function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function loadMovies() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "d3f900a2a7fd83e3285bbad5c82abf44",
                    page: 1,
                }
            });

            // console.log(response.data.results.slice(0, 10))
            setMovies(response.data.results.slice(0, 20))


        }

        loadMovies();
        setLoading(false)

    }, [])

    if (loading) {
        return (
            <div className="loading">
                <h2>Loading movies...</h2>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="movies-list">
                {movies.map(movie => (
                    <article key={movie.id}>
                        <Link to={`/movie/${movie.id}`}>
                            <img className="img" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                            <strong>{movie.title}</strong>
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default Home;