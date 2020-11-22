<template>
    <div class="section.restaurantinfo">

        <main class="items" v-for="item in shuffledMovie" :key="item.title">

            <section class="image" >
                <img :src="`https://image.tmdb.org/t/p/w500/${item.poster_path}`" />
            </section>

            <section id="movie_details">
                <h1>{{ item.title }} </h1>
                <p>Description: {{ item.overview }}</p>
            </section>
            
            <button block v-on:click="getMoreMovie">
                More random
            </button>
        
        </main>

    </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';


export default {
    name: 'random',

    data() {

        return {
            limit: 1,
            items: []
        }
    },

    computed: {
      ...mapState(["items"]),
      shuffledMovie() {
            return this.limit ? this.items.slice(0,this.limit) : this.items
        },
    },
    
    mounted() {
        this.$store.dispatch('getShuffled');
        this.getMoreMovie();
    },
    
    methods: {
        getMoreMovie: function() {
                 
                axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b33ac6661da0977b3c9d8014bf3e1d4d`)
            
                     .then((response) => {
                         const _ = require('lodash');
                         let shuffled = _.shuffle(response.data.results);
                         console.log(shuffled);
                         this.items = shuffled;
                        })
        }
    }
}

</script>






<style scoped>
</style>