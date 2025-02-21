import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from '../../services/api'

function Movie() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMovie() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "d3f900a2a7fd83e3285bbad5c82abf44",
                }
            })
            .then((response) => {
                setMovie(response.data);
                setLoading(false);
            })
            .catch(() => {
                console.log("MOVIE NOT FOUND");
            })
        }

        loadMovie();

        return () => {
            console.log("fois desmontado");
        }

    }, [])
    
    if (loading) {
            <div>
                <h1>Loading details...</h1>
            </div>
    }

    return (
        <div className="movie-info">
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />

            <h3>Sinopse</h3>
            <span>{movie.overview}</span>

            <strong>Avaliation: {movie.vote_average}/10</strong>
        </div>
    )
}

export default Movie;