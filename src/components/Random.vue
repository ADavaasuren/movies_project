<template>
    <div>
        <h3>Hello this is random.vue</h3>
         <p>{{ this.$route.params.id }}</p>

        <ul>
            <li id="movies" v-for="item in computedSim" :key="item.title">
                {{item.title}}
                {{item.overview}}
            </li>
            <img :src="imageURL + movieImage" alt="">
        </ul>

        <!-- <ul>
            <li v-for="sim in computedSim" :key="sim.title">
                    {{sim.title}}
                    {{sim.overview}}
            </li>
            <img :src="url" alt="">
        </ul> -->

    </div>
</template>

<script>
import {secret_key } from '../movies';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vue from 'vue';


Vue.use(VueAxios,axios)

export default {
    name: 'random',

    data: () => ({
        items: [],
        movieImage: [],
        imageURL: 'https://image.tmdb.org/t/p/w300',
        limit: 1,
    }),

    mounted() {
        this.getDetails()
     },
    computed: {
        computedSim(){
            return this.limit ? this.items.slice(0,this.limit) : this.items
    }

},


    methods: {

        getDetails: function(){

                var movieId = this.$route.params.id

                axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${secret_key}`)
                    .then(response => {
                    this.items=response.data.results;
                    console.log(response);
                    this.movieImage = response.data.results.poster_path
            })
        }
    }
}

</script>



<style scoped>

</style>