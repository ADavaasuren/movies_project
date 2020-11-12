<template>
    <v-container fluid>
        <v-data-iterator
            :items="items"
            :items-per-page.sync="itemsPerPage"
            hide-default-footer
        >
            <v-layout row class="pa-8 mb-2">
              <v-btn small flat color="grey" @click="sortByAZ('original_title')">
                  <v-icon left small></v-icon>
                  <span class="text-lowercase">By movie title</span>
              </v-btn>
              <v-btn small flat color="grey" @click="sortBy('release_date')">
                <v-icon left small></v-icon>
                <span class="text-lowercase">By release date</span>
              </v-btn>
              <v-btn small flat color="grey" @click="sortBy('popularity')">
                <v-icon left small></v-icon>
                <span class="text-lowercase">By popularity</span>
              </v-btn>
              <v-btn small flat color="grey" @click="sortBy('vote_count')">
                <v-icon left small></v-icon>
                <span class="text-lowercase">By votes</span>
              </v-btn>
            </v-layout> -->

            <v-card v-for="item in items" :key="item.title">
              <v-layout row wrap class="cards">
                  <v-flex xs12 md6 >
                      <div class="chip">
                         <router-link :to="{ name: 'details', params: {id: item.id}}">{{item.title}}</router-link>
                      </div>
                  </v-flex>
                  <v-flex xs6 sm4 md2>
                    <div>Release date:</div>
                    <div>{{ item.release_date }}</div>
                  </v-flex>
                  <v-flex xs6 sm4 md2>
                    <div>Popularity:</div>
                    <div>{{ item.popularity }}</div>
                  </v-flex>
                  <v-flex xs2 sm4 md2>
                    <div>Votes:</div>
                    <div>{{ item.vote_count }}</div>
                  </v-flex>
              </v-layout>
            </v-card>
        </v-data-iterator>
    </v-container>
</template>

<script>
import {secret_key } from '../movies';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vue from 'vue';


Vue.use(VueAxios,axios)

export default {
    name: 'movieslist',

    data: () => ({
          itemsPerPage: 5,      
          items: [],
    }),
    mounted() {
      Vue.axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${secret_key}`)
        .then(response => {
        this.items=response.data.results;
        console.log(response);
      })
    },
    methods: {
      sortBy(prop) {
      this.items.sort((b,a) => b[prop] < a[prop] ? 1 : -1)
      },

      sortByAZ(prop){
      this.items.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
      }
    },
}
</script>



<style scoped>

.cards {
  border: 2px solid black;
  align-items: center;
}
.chip {
  margin-left: 10px;
}
.movie_titles {
  font-weight: 700;
  color: #000;
  text-decoration: none;
}
.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
background: #666;
}

</style>