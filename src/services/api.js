import axios from 'axios'


// URL Base: https://api.themoviedb.org/3/
// URL of API: https://api.themoviedb.org/3/movie/now_playing?api_key=d3f900a2a7fd83e3285bbad5c82abf44

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

export default api;