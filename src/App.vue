<template>
  <v-container>
      <v-toolbar
          class="mb-15"
          color="indigo darken-5"
          dark
          flat
          fixed
      >
        <router-link :to="{name:'movieslist'}">
          <v-btn text>Home</v-btn>
        </router-link>
        <router-link :to="{ name: 'random', params: {id: items.id}}" >
          <v-btn text>Random</v-btn>
        </router-link>
      </v-toolbar>
      <router-view />
  </v-container>    
</template>

<script>
import {secret_key } from './movies';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vue from 'vue';


Vue.use(VueAxios,axios)

export default {
  name: 'App',

  data: () => ({
        items: [],
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
    },  
  
  }
}

</script>


<style>

</style>