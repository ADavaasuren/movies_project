<template v-slot:default="props">
    <v-container fluid>
        <v-data-iterator
            :movies="movies"
            :movies-per-page.sync="moviesPerPage"
            hide-default-footer
        >
            <v-layout row class="pa-8 mb-2">
              <v-btn small flat color="grey" @click="sortByAZ('original_title')">
                  <v-icon left small></v-icon>
                  <span class="text-lowercase">By movie title</span>
              </v-btn>
              <v-btn small flat color="grey" @click="sortBy('release_date')">
                <v-icon left small></v-icon>
                <span class="text-lowercase">By release date</span>
              </v-btn>
              <v-btn small flat color="grey" @click="sortBy('popularity')">
                <v-icon left small></v-icon>
                <span class="text-lowercase">By popularity</span>
              </v-btn>
              <v-btn small flat color="grey" @click="sortBy('vote_count')">
                <v-icon left small></v-icon>
                <span class="text-lowercase">By votes</span>
              </v-btn>
            </v-layout>

            <v-card v-for="movie in movies" :key="movie.title" class="pa-3">
              <v-layout row wrap class="cards">
                  <v-flex xs12 md6 >
                      <div class="chip">
                         <router-link :to="{ name: 'details', params: {id: movie.id}}">{{movie.title}}</router-link>
                      </div>
                  </v-flex>
                  <v-flex xs6 sm4 md2>
                    <div>Release date:</div>
                    <div>{{ movie.release_date }}</div>
                  </v-flex>
                  <v-flex xs6 sm4 md2>
                    <div>Popularity:</div>
                    <div>{{ movie.popularity }}</div>
                  </v-flex>
                  <v-flex xs2 sm4 md2>
                    <div>Votes:</div>
                    <div>{{ movie.vote_count }}</div>
                  </v-flex>
                </v-layout>
            </v-card>

        </v-data-iterator>
    </v-container>
</template>

<script>

import {secret_key } from '../movies';
import axios from 'axios';

export default {
    name: 'MoviesList',

    data() {
      return {
          moviesPerPage: 10,
          movies: [],
    }},

    mounted() {
        this.getMovies()
    },

    methods: {
      getMovies: function(){

        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${secret_key}`)
        .then((result) => {
            result.data.results.forEach((item) => {
                console.log(item)
                this.movies.push(item)
            })
        })
        .catch((error) => {
            console.log(error)
        })
      },
      sortBy(prop){
        this.movies.sort((b,a) => b[prop] < a[prop] ? 1 : -1)
      },
      sortByAZ(prop){
        this.movies.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
      },
    }
};
</script>



<style scoped>

.cards {
  border: 2px solid black;
  align-items: center;
}
.chip {
  margin-left: 10px;
}
.movie_titles {
  font-weight: 700;
  color: #000;
}
.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
background: #666;
}

</style>