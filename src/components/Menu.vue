<template>
    <nav>
      <ul>
        <li><router-link :to="{name:'movieslist'}">
                <v-btn class="btn" small text >Home</v-btn>
        </router-link></li>
        <li><router-link :to="{ name: 'random', params: {id: items.id}}" >
                <v-btn small text >Random</v-btn>
        </router-link></li>
        <li><router-link :to="{name:'categories', params: {id: items.id}}" >
                <v-btn small text >Categories</v-btn>
        </router-link></li>
      </ul>
    </nav>
</template>     




<script>
import {PRIVATE_KEY} from '../key';
import axios from 'axios'
import VueAxios from 'vue-axios';
import Vue from 'vue';

Vue.use(VueAxios,axios)

export default {

  name: 'menu',

    data: () => ({
      items: [],
      computedSim: [],
    }),

    mounted() {
      this.getPopular();
    },
    
    methods: {
      getPopular: function(){
    
              Vue.axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${PRIVATE_KEY}`)
            
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


<style lang="scss" scoped>


</style>