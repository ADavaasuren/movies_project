<template>
  <v-container fluid>
      <v-toolbar
          class="mb-15"
          color="indigo darken-5"
          dark
          flat
          fixed
      >
        <v-spacer></v-spacer>
            <router-link :to="{name:'movieslist'}">
              <v-btn x-large text>Home</v-btn>
            </router-link>
            <router-link :to="{ name: 'random', params: {id: computedSim.id}}" >
              <v-btn x-large text>Random</v-btn>
            </router-link>
            <router-link :to="{name:'categories', params: {id: computedSim.id}}" >
              <v-btn x-large text>Categories</v-btn>
            </router-link>
        <v-spacer></v-spacer>

      </v-toolbar>
      <router-view />

      <v-toolbar
          class="mt-15"
          color="indigo"
          dark
          flat
      >
      <v-spacer></v-spacer>
      <v-toolbar-title class="subheading">
          This is a footer
      </v-toolbar-title>
      <v-spacer></v-spacer>
      </v-toolbar>


  </v-container>
</template>

<script>
// import {secret_key } from './movies';
// import axios from 'axios';
// import VueAxios from 'vue-axios';
// import Vue from 'vue';


// Vue.use(VueAxios,axios)

export default {
  name: 'App',

  data: () => ({
        items: [],
        computedSim: []
  }),
  
  // methods: {
  //   goRandom() {
  //     this.$router.push(`/random/{{computedSim.id}}`)
  //   }
  // }
  // mounted() {
  //       this.getPopular();
  // },
  
  // methods: {
  //     getPopular: function(){
    
  //             Vue.axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${secret_key}`)
            
  //               .then((response) => {
  //                   const _ = require('lodash');
  //                   let shuffled = _.shuffle(response.data.results);
  //                   console.log(shuffled);
  //                   this.items = shuffled;
  //               })
  //     }
  // }
}

</script>



<style scoped>

.btn {
  text-decoration: none;
}

</style>