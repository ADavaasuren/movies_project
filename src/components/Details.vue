<template>
<div>     
    <h3>Hello this is details.vu</h3>

    <p>{{ this.$route.params.id }}</p>


    <ul>
      <li v-for="mov in movie" :key="mov.title">
        {{mov.title}}
        {{mov.overview}}
      </li>
    </ul>


</div>    
</template>

<script>
import {secret_key} from '../movies';
import axios from 'axios';

export default {
    name: 'Details',

    data() {
     return {
        movie: [],
    }},
    mounted() {
        this.getDetails()
    },
    methods: {
        getDetails: function(){

            var movieId = this.$route.params.id

            axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${secret_key}`).then((result) => {
                console.log(result);
                this.movie = result; 
                })
        }
    }
}

</script>

<style scoped>
</style>