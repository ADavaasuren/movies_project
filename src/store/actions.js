import axios from 'axios';

export const getMovies = ({commit}, movie_id) => {
    axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=b33ac6661da0977b3c9d8014bf3e1d4d`)
    .then(response => {
        commit('SET_MOVIES', response.data);
    })
}



// https://api.themoviedb.org/3/movie/340102?api_key=b33ac6661da0977b3c9d8014bf3e1d4d