<template>
<div>     
    <h3>Hello this is details.vu</h3>
    <p>{{ this.$route.params.id }}</p>
    <ul>

        <li v-for="mov in movie" :key="mov.title">
            {{mov.original_title}}
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

    movie(){

        return {
            movie: [],
        }
    },
    mounted() {

        this.getDetails()
    },
    methods: {
        
        getDetails: function(){

            var movie_id = this.$route.params.id

            axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${secret_key}`)
             .then((result) => {

                console.log(result)
                
                result.data.data.forEach((item) => {

                this.movie.push(item)
            })
          })
            .catch((error) => {
                console.log(error)
            })
        }
    }
}

</script>

<style scoped>
</style>