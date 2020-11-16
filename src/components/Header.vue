<template>
    <div>
       <router-link :to="{name:'movieslist'}">
              <v-btn id="btn" x-large text>Home</v-btn>
       </router-link>
       <router-link :to="{ name: 'random', params: {id: computedSim.id}}" >
              <v-btn id="btn" x-large text>Random</v-btn>
       </router-link>
       <router-link :to="{name:'categories', params: {id: computedSim.id}}" >
              <v-btn id="btn" x-large text>Categories</v-btn>
       </router-link>
    </div>
</template>


<script>
import { secret_key } from '../movies';
import axios from 'axios'
import VueAxios from 'vue-axios';
import Vue from 'vue';

Vue.use(VueAxios,axios)

export default {

  name: 'Header',

    data: () => ({
        items: [],
        computedSim: [],
    }),

    mounted() {
      this.getPopular();
    },
    
    methods: {
      getPopular: function(){
    
              Vue.axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${secret_key}`)
            
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

#btn {
    text-decoration: none;
}

</style>