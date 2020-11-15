<template v-for="mov in movie" :key="mov.title">
    <v-card class="mx-auto" max-width="400">

        <v-img class="white--text align-end" height="200px" src="imageURL + movieImage">
            <v-card-title >{{mov.title}}</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0"></v-card-subtitle>

        <v-card-text class="text--primary">
            <div>{{mov.overview}}</div>
            <div></div>
        </v-card-text>

        <v-card-actions>
            <v-btn color="orange" text></v-btn>

            <v-btn color="orange" text></v-btn>
        </v-card-actions>

        <!-- <v-img
        class="white--text align-end"
        height="200px"
        src="imageURL + movieImage"
        >
            <v-card-title v-for="sim in computedSim" :key="sim.title">{{sim.title}}</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">
        </v-card-subtitle>

        <v-card-text class="text--primary">
        <div>{{sim.overview}}</div>

        <div></div>
        </v-card-text>

     <v-card-actions>
        <v-btn
            color="orange"
            text
        ></v-btn>

        <v-btn
            color="orange"
            text
        ></v-btn>
     </v-card-actions> -->
  </v-card>


</template>

<script>
import {secret_key} from '../movies';
import axios from 'axios';

export default {
    name: 'details',

     data() {
      return {
         movie: [],
         movieImage: [],
         imageURL: 'https://image.tmdb.org/t/p/w300',
         similar: [],
         limit: 3,
     }},

     mounted() {
         this.getDetails()
         this.getSimilar()
     },
     computed: {
         computedSim(){
             return this.limit ? this.similar.slice(0,this.limit) : this.similar
         },
         computedSimImage(){
            return this.limit ? this.similarImage.slice(0,this.limit) : this.similarImage
         }
     },

     methods: {

        getDetails: function(){

             var movieId = this.$route.params.id

             axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${secret_key}`)
            
                 .then((result) => {
                     console.log(result);
                     this.movie = result; 
                     this.movieImage = result.data.poster_path
                     })
        },
        
        getSimilar: function(){

             var movieId = this.$route.params.id

             axios.get(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${secret_key}`)
            
                 .then((response) => {
                     console.log(response);
                     this.similar = response.data.results
                 })
        },
     }
}


</script>



<style scoped>

</style>