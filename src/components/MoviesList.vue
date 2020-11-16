<template>
    <v-container>

            <v-layout row class="mb-15">
              <v-btn x-large text color="grey" @click="sortByAZ('original_title')">
                  <span class="text-lowercase">movie title</span>
              </v-btn>
              <v-btn x-large text color="grey" @click="sortBy('release_date')">
                <span class="text-lowercase">release date</span>
              </v-btn>
              <v-btn x-large text color="grey" @click="sortBy('popularity')">
                <span class="text-lowercase">popularity</span>
              </v-btn>
              <v-btn x-large text color="grey" @click="sortBy('vote_count')">
                <span class="text-lowercase">votes</span>
              </v-btn>
            </v-layout>

        <v-data-iterator
            :items="items"
            :items-per-page.sync="itemsPerPage"
            hide-default-footer
        >
          <template v-slot:default="props">
              <v-col
                v-for="item in props.items"
                :key="item.id"
                cols="18"
                sm="18"
                md="18"
                lg=""
              >
                <v-card>
                  <v-layout row wrap class="cards">
                      <v-flex xs12 md6 >
                          <v-btn id="movie_btn">
                            <router-link class="movie_titles" :to="{ name: 'details', params: {id: item.id}}">{{item.title}}</router-link>
                          </v-btn>
                      </v-flex>
                      <v-flex xs6 sm4 md2>
                        <div>{{ item.release_date }}</div>
                      </v-flex>
                      <v-flex xs6 sm4 md2>
                        <div>{{ item.popularity }}</div>
                      </v-flex>
                      <v-flex xs2 sm4 md2>
                        <div>{{ item.vote_count }}</div>
                      </v-flex>
                  </v-layout>
                </v-card>
              </v-col>
          </template>   
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
          itemsPerPage: 10,
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
.movie_titles {
  font-weight: 900;
  color: #000;
  text-decoration: none;
}
#movie_btn {
  display: inline-block;
  border: none;
  background: rgb(21, 149, 235);
  color: rgb(255, 255, 255);
  padding: 20px 50px;
  cursor: pointer;
}
#movie_btn:hover {
background: rgb(5, 71, 60);
}

</style>