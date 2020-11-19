import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { 
    moviedata: [],
    shuffled: [],
    genre: [
      {
        "genres": [
          {
            "id": 28,
            "name": "Action"
          },
          {
            "id": 12,
            "name": "Adventure"
          },
          {
            "id": 16,
            "name": "Animation"
          },
          {
            "id": 35,
            "name": "Comedy"
          },
          {
            "id": 80,
            "name": "Crime"
          },
          {
            "id": 99,
            "name": "Documentary"
          },
          {
            "id": 18,
            "name": "Drama"
          },
          {
            "id": 10751,
            "name": "Family"
          },
          {
            "id": 14,
            "name": "Fantasy"
          },
          {
            "id": 36,
            "name": "History"
          },
          {
            "id": 27,
            "name": "Horror"
          },
          {
            "id": 10402,
            "name": "Music"
          },
          {
            "id": 9648,
            "name": "Mystery"
          },
          {
            "id": 10749,
            "name": "Romance"
          },
          {
            "id": 878,
            "name": "Science Fiction"
          },
          {
            "id": 10770,
            "name": "TV Movie"
          },
          {
            "id": 53,
            "name": "Thriller"
          },
          {
            "id": 10752,
            "name": "War"
          },
          {
            "id": 37,
            "name": "Western"
          }
        ]
      }
    ]
  },
  mutations: {
    updatemoviedata: (state, data) => {
      state.moviedata = data
    },
    updateshuffled: (state, data) => {
      state.shuffled = data
    },

  },  
  actions: {
    async getMovieData ({ commit }) {
      
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b33ac6661da0977b3c9d8014bf3e1d4d`)
        .then(response => {
          console.log(response)
          commit('updatemoviedata', response.data.results)
        })
    },

    async getShuffled ({ commit }) {
      
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b33ac6661da0977b3c9d8014bf3e1d4d`)
        .then(response => {
          const _ = require('lodash');
          console.log(response)
          let shuffledmovie = _.shuffle(response.data.results);
          commit('updateshuffled', shuffledmovie)
        })
    },
    // async getDetails ({ commit}) {
      
    //   axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b33ac6661da0977b3c9d8014bf3e1d4d`)
    //   .then(response => {
    //     console.log(response)
    //     commit('updatedetails', response.data.results)
    //   })
  //},

  }
  // modules: {
  // }
})