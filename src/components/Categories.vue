<template>
    <div >

        <div v-for="item in moviedata[0].results" :key="item.id">
            {{ item.genre_ids }}        
        </div>

        <!-- <v-card >      -->
                <!-- <v-layout row wrap class="cards">
                    <v-flex xs6 sm4 md2>
                        <router-link :to="{ name: 'genre', params: {id: item.name}}">{{item.name}}</router-link>
                    </v-flex>
                </v-layout>
        </v-card> -->

    </div>    
</template>


<script>
// import {secret_key } from '../movies';
// import axios from 'axios';
// import VueAxios from 'vue-axios';
// import Vue from 'vue';


// Vue.use(VueAxios,axios)
import { mapState } from 'vuex';

export default {
    name: 'categories',

    computed: {
      ...mapState(["moviedata"]),
    }
}    
//     data: () => ({
//           items: [],
//     }),

//     mounted() {

//         Vue.axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${secret_key}`)
    
//             .then(response => {
//             this.items=response.data.genres;
//             console.log(response);
//         })
//     }




</script>



// https://api.themoviedb.org/3/genre/movie/list?api_key=b33ac6661da0977b3c9d8014bf3e1d4d&language=en-US



<style scoped>

</style>