import axios from 'axios';

export const getDetails = ({ commit }) => {
    axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=b33ac6661da0977b3c9d8014bf3e1d4d')
    .then(response => {
        commit('SET_DETAILS', response.data);
    })
}