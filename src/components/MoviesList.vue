<template>
    <v-container>
            <!-- sorting buttons -->
            <!-- <v-layout id="icons" row class="mb-15">
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
            </v-layout> -->
        <!-- computing and displaying the relevant number of items -->
        <v-data-iterator
            :items="items"
            :items-per-page.sync="itemsPerPage"
            hide-default-footer
        >
          <template v-slot:default="props">
              <v-col
                v-for="item in props.items"
                :key="item.name"
                cols="18"
                sm="18"
                md="18"
                lg=""
              >
                <v-card hover>
                  <v-layout row wrap id="cards">
                      <v-flex xs3 sm8 md4>
                          <v-btn id="movie_btn">
                            <router-link class="movie_titles" :to="{ name: 'details', params: {id: item.id}}">{{item.title}}</router-link>
                          </v-btn>
                      </v-flex>
                      <v-flex xs3 sm8 md3>
                        <div>{{ item.release_date }}</div>
                      </v-flex>
                      <v-flex xs3 sm8 md3>
                        <div>{{ item.popularity }}</div>
                      </v-flex>
                      <v-flex xs3 sm8 md2>
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
import { PRIVATE_KEY } from '../key';
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
      Vue.axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${PRIVATE_KEY}`)
        .then(response => {
        this.items=response.data.results;
        console.log(response);
      })
    },

    // methods: {
    //   sortBy(prop) {
    //   this.items.sort((b,a) => b[prop] < a[prop] ? 1 : -1)
    //   },

    //   sortByAZ(prop){
    //   this.items.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    //   }
    // },  
  
}
</script>



<style scoped>

#cards {
  align-items: center;
}

.movie_titles {
  font-weight: 300;
  color: #000;
  text-decoration: none;
  font-family: "Mulish", Arial, Helvetica, sans-serif;
}

#movie_btn {
  display: inline-block;
  border: none;
  background: rgb(21, 149, 235);
  color: rgb(255, 255, 255);
  padding: 20px 10px;
  cursor: pointer;
}
#movie_btn:hover {
  background: rgb(5, 71, 60);
}

#icons {
  justify-content: space-evenly;
}
</style>