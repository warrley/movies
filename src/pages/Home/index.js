import { useEffect, useState } from "react";
import api from '../../services/api'

// URL of API: https://api.themoviedb.org/3/movie/now_playing?api_key=d3f900a2a7fd83e3285bbad5c82abf44

function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        async function loadMovies() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "d3f900a2a7fd83e3285bbad5c82abf44",
                    page: 1,
                }
            });

            console.log(response.data.results)

        }


        loadMovies();

    }, [])

    return (
        <div>
            <h1>Bem vindo a home</h1>
        </div>
    )
}

export default Home;