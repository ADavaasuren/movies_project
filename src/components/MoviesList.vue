<template>

<div>
    <h3>Hello this is MoviesList.vue</h3>

    <ul>

        <li v-for="movie in movies" :key="movie.title">
          <router-link :to="{ name: 'Details', params: {id: movie.id}}">{{movie.title}}</router-link>

        </li>

    </ul>

</div>


</template>

<script>
import {secret_key } from '../movies';
import axios from 'axios';

export default {
    name: 'MoviesList',

    data() {
      return {
          movies: []
    }},

    mounted() {
        this.getMovies()
    },
    methods:{
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
    }
}    
</script>



<style scoped>

</style>