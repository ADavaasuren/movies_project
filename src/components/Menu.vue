<template>
    <nav>
      <ul>
        <li><router-link :to="{name: 'home'}">
                <v-btn small >Home</v-btn>
        </router-link></li>
        <li><router-link :to="{name: 'randompage', params: {id: shuffled.id}}">
                <v-btn small>Random</v-btn>
        </router-link></li>
        <li><router-link :to="{name:'categoriespage'}"> 
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
      ...mapState(["shuffled"]),
      shuffled() { return this.$store.state.shuffled }
  },

  mounted() {
      this.$store.dispatch('getMovieData');
      this.$store.dispatch('getShuffled');
  }
}
</script>




<style lang="scss" scoped>

</style>




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