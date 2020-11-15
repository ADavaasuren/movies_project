<template>
    <div>

        <p>{{ this.$route.params.id }}</p>

        <ul>
            <li v-for="video in videos" :key="video.title">
                {{video.id}}
            </li>
        </ul>



    </div>
</template>


<script>

import {secret_key} from '../movies';
import axios from 'axios';

export default {
    name: 'trailers',

    data() {
      return {
         videos: [],
         limit: 1,
     }},

     mounted() {
         this.getVideos()
     },
     computed: {
         computedSim(){
             return this.limit ? this.videos.slice(0,this.limit) : this.videos
         }

     },

     methods: {

        getVideos: function(){

             var movieId = this.$route.params.id

             axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${secret_key}`)
            
                 .then((result) => {
                     console.log(result);
                     this.videos = result.data.results; 
                     })
        },
    },
}

</script>


<style scoped>

</style>