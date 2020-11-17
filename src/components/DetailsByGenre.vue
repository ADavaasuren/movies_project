<template>
    <div>

       <!-- <ul>

            <li v-for="movie in movie_by_genre" :key="movie.genre_ids">
                {{movie_by_genre.title}}
                {{movie_by_genre.overview}}
                {{movie_by_genre.genre_ids}}
            </li>
            <img :src="imageURL + movieImage" alt="">

        </ul> -->


    </div>
</template>


<script>
// import {secret_key} from '../movies';
// import axios from 'axios';

export default {
    name: 'detailsbygenre',

    // data() {
    //   return {
    //      movie_by_genre: [],
    //     //  imageURL: 'https://image.tmdb.org/t/p/w300',
    //     //  limit: 3,
    //  }},

    //  mounted() {
    //      this.getGenres()
    //  },
    //  computed: {
    //      computedSim(){
    //          return this.limit ? this.similar.slice(0,this.limit) : this.similar
    //      }

    // methods: {

    //     getGenres: function(){

    //          axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${secret_key}`)
            
    //              .then((result) => {
    //                  console.log(result);
    //                  this.movie_by_genre = result.data.results.genres;
                    //  this.movieImage = result.data.poster_path
    //                  })
    //     },
    //  }
}
// genreUrl = `${url}/genre/movie/list`
// https://api.themoviedb.org/3/movie/popular?api_key=b33ac6661da0977b3c9d8014bf3e1d4d&language=en-US&page=1

</script>


<style scoped>

</style>