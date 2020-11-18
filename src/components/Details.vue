<template>
  <div>
    
             <!-- <v-card elevation="24" rounded="10" shaped >

            <v-img width="300" :src="imageURL + movieImage" alt="">
            </v-img>

            <div v-for="mov in movie" :key="mov.title">
                {{mov.title}}
                {{mov.overview}}
            </div>

        </v-card>

        <ul>
            <li v-for="sim in computedSim" :key="sim.title">
                    {{sim.title}}
                    {{sim.overview}}
            </li>

        </ul> -->
<!-- Footer -->
  </div>    
</template>

<script>
// import { PRIVATE_KEY } from '../key';
// import axios from 'axios';
        

export default {
    name: 'details',

    // data() {
    //   return {
    //      movie: [],
    //      movieImage: [],
    //      imageURL: 'https://image.tmdb.org/t/p/w300',
    //      similar: [],
    //      limit: 3,
    // }},

    // mounted() {
    //      this.getDetails()
    //      this.getSimilar()
    // },

    // computed: {
    //   computedSim(){
    //       return this.limit ? this.similar.slice(0,this.limit) : this.similar
    //   }
    // },
    // methods: {

    //     getDetails: function(){

    //              var movieId = this.$route.params.id

    //             axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${PRIVATE_KEY}`)
            
    //                 .then((result) => {
    //                  console.log(result);
    //                  this.movie = result; 
    //                  this.movieImage = result.data.poster_path
    //                 })
    //     },
        
    //     getSimilar: function(){

    //               var movieId = this.$route.params.id

    //               axios.get(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${PRIVATE_KEY}`)
            
    //                   .then((response) => {
    //                   console.log(response);
    //                   this.similar = response.data.results;
    //                   })
    //     },
    // }
}

</script>



<style scoped>

</style>