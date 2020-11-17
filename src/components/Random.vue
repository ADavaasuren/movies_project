<template>
    <div>

        <ul>
            <!-- looping through mutated data -->
            <li v-for="item in computedSim" :key="item.title">
                {{item.title}}
                {{item.overview}}
            </li>
            <!-- <img src="" alt="" >  -->
        </ul>

    <!-- <v-btn block v-on:click="getPopular">More random</v-btn> --> -->

    </div>
</template>

<script>
import {PRIVATE_KEY} from '../key';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vue from 'vue';


Vue.use(VueAxios,axios)

export default {
    name: 'random',
  
    data: () => ({
        items: [],
        limit: 1,
        image: []
    }),

    mounted() {
         this.getPopular();
         this.display_image();
    },

    computed: {
        computedSim(){
         return this.limit ? this.items.slice(0,this.limit) : this.items
    }},
    
    methods: {
         getPopular: function() {

                 Vue.axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${PRIVATE_KEY}`)
            
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