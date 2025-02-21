import { useEffect, useState } from "react";
import { useParams, useNavigate, replace } from "react-router-dom";
import './movie-info.css'
import api from '../../services/api'

function Movie() {
    const { id } = useParams();
    const navigation = useNavigate();
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
                navigation("/", { replace});
                return;
            })
        }

        loadMovie();

    }, [navigation, id])

    function saveMovie() {
        const myList = localStorage.getItem("@myList");

        let savedMovies = JSON.parse(myList) || [];

        const hasMovie = savedMovies.some((savedMovies) => savedMovies.id === movie.id);

        if (hasMovie) {
            alert("ESSE FILME JA ESTA NA LISTA");
            return;
        }

        savedMovies.push(movie);
        localStorage.setItem("@myList", JSON.stringify(savedMovies));
        alert("FILME SALVO COM SUCESSO");

    }
    
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
            <strong>Avaliation: {movie.vote_average} / 10</strong>

            <div className="buttons-area">
                <button onClick={saveMovie}>Save</button>
                <button>
                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${movie.title} Trailer`}>Trailler</a>
                </button>
            </div>

        </div>
    )
}

export default Movie;