import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { 
    moviedata: [],
    items: [],
    upcoming: [],
    toprated: [],
    nowplaying: [],
    },

  mutations: {
    updatemoviedata: (state, data) => {
      state.moviedata = data
    },
    updateitems: (state, data) => {
      state.items = data
    },
    updateupcoming: (state, data) => {
      state.upcoming = data
    },
    updatetoprated: (state, data) => {
      state.toprated = data
    },
    updatenowplaying: (state, data) => {
      state.nowplaying = data
    }
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
      
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=b33ac6661da0977b3c9d8014bf3e1d4d&language=en-US&page=20`)
        .then(response => {
          const _ = require('lodash');
          console.log(response)
          let shuffledmovie = _.shuffle(response.data.results);
          commit('updateitems', shuffledmovie)
        })
    },
    async getUpcoming ({ commit }) {
      
            axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=b33ac6661da0977b3c9d8014bf3e1d4d&language=en-US&page=1`)
              .then(response => {
              console.log(response);
              commit('updateupcoming', response.data.results);
            })
    },
    async getTopRated ({ commit }) {
      
      axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=b33ac6661da0977b3c9d8014bf3e1d4d&language=en-US&page=20`)
        .then(response => {
        console.log(response);
        commit('updatetoprated', response.data.results);
      })
    },
  
    async getNowPlaying ({ commit }) {
      
      axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=b33ac6661da0977b3c9d8014bf3e1d4d&language=en-US&page=50`)
        .then(response => {
        console.log(response);
        commit('updatenowplaying', response.data.results);
      })
    },
  }  
})