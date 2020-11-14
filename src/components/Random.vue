<template>
    <div>
        {{ this.$route.params.id }}
        <ul>
            <li v-for="item in computedSim" :key="item.title">
                {{item.title}}
                {{item.overview}}        
            </li>
                <!-- <img :src="imageURL + items.backdrop_path" alt="" >  -->
        </ul>

    <v-btn block v-on:click="getPopular">More random</v-btn>
                
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
        imageURL: 'https://image.tmdb.org/t/p/w300',
        limit: 1,
    }),

    mounted() {
        this.getPopular();
    },

    computed: {
        computedSim(){
        return this.limit ? this.items.slice(0,this.limit) : this.items
    }},

    
    methods: {
        getPopular: function() {

                Vue.axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${secret_key}`)
            
                    .then((response) => {
                        const _ = require('lodash');
                        let shuffled = _.shuffle(response.data.results);
                        console.log(shuffled);
                        this.items = shuffled;
                    })
        },

    }
}
    

</script>



<style scoped>

</style>