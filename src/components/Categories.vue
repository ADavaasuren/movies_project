<template>
<v-container fluid>

    <v-card v-for="item in items" :key="item.name">
              <v-layout row wrap class="cards">
                  <v-flex xs6 sm4 md2>
                     <router-link :to="{ name: 'genres', params: {name: item.name}}">{{item.name}}</router-link>
                  </v-flex>
              </v-layout>
            </v-card>

</v-container>    
</template>


<script>
import {secret_key } from '../movies';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vue from 'vue';


Vue.use(VueAxios,axios)

export default {
    name: 'categories',

    data: () => ({
          items: [],
    }),

    mounted() {

        Vue.axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${secret_key}`)
    
            .then(response => {
            this.items=response.data.genres;
            console.log(response);
        })
    }
}



</script>



// https://api.themoviedb.org/3/genre/movie/list?api_key=b33ac6661da0977b3c9d8014bf3e1d4d&language=en-US



<style scoped>

</style>