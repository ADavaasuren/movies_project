<template>
    <nav>
      <ul>
        <li><router-link :to="{name:'home'}">
                <v-btn class="btn" small >Home</v-btn>
        </router-link></li>
        <li><router-link :to="{ name: 'random', params: {id: item.id}}">
                <v-btn small>Random</v-btn>
        </router-link></li>
        <li><router-link :to="{name:'categories'}"> 
        //params: {id: items.id}}"
                <v-btn small>Categories</v-btn>
        </router-link></li>
      </ul>
    </nav>
</template>




<script>
// import {PRIVATE_KEY} from '../key';
// import axios from 'axios'
// import VueAxios from 'vue-axios';
// import Vue from 'vue';

// Vue.use(VueAxios,axios)

import { mapState } from 'vuex';


export default {

  name: 'menu',

  computed: {
      ...mapState(["moviedata"]),
  },

  mounted() {
      this.$store.dispatch('getMovieData');
  }
    // data: () => ({
    //   items: [],
    // }),

    // mounted() {
    //   this.getPopular();
    // },
    
    // methods: {
    //   getPopular: function(){
    
    //           Vue.axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${PRIVATE_KEY}`)
            
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


<style lang="scss" scoped>


</style>