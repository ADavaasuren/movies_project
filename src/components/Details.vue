<template>
    <div>     
        <h3>Hello this is details.vu</h3>

        <p>{{ this.$route.params.id }}</p>

<!-- 
        <ul>
        <li v-for="mov in movie" :key="mov.title">
            {{mov.title}}
            {{mov.overview}}
        </li>
        </ul>

        <img :src="url" alt=""> -->

    </div>    
</template>

<script>
// import {secret_key} from '../movies';
// import axios from 'axios';

export default {
    name: 'details',

//     data() {
//      return {
//         movie: [],
//         url: '',
//         size: 'w300',
//     }},

//     mounted() {
//         this.getDetails()
//     },
//     methods: {

//         getDetails: function(){

//             var movieId = this.$route.params.id

//             axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${secret_key}`)
            
//                 .then((result) => {
//                     console.log(result);
//                     this.movie = result; 

//                     this.url = `https://image.tmdb.org/t/p/${this.size}/${result.data.poster_path}`

//                     console.log(this.url)
//                     })
//         }
//     }
}

</script>

<style scoped>
</style>