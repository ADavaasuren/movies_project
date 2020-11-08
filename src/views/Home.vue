<template>
  <v-container fluid>

    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar
          class="mb-15"
          color="indigo darken-5"
          dark
          flat
        >
          <router-link :to="{name:'Home'}">
              <v-btn text>Home</v-btn>
          </router-link>
          <router-link :to="{name:'Details'}">
              <v-btn text>Categories</v-btn>
          </router-link>
          <router-link :to="{name:'Randomizer'}">
              <v-btn text>Random</v-btn>
          </router-link>

        </v-toolbar>
      </template>

      <template v-slot:default="props">

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


            </v-layout>


            <v-card v-for="item in props.items" :key="item.name" class="pa-3">
              <v-layout row wrap class="cards">
                <v-flex xs12 md6 >
                  <div class="chip">
                    <v-chip x-large class="my-5 movie_titles">{{ item.original_title }}</v-chip>
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
      </template>

      <template v-slot:footer>
        <v-toolbar
          class="mt-15"
          color="indigo"
          dark
          flat
        >
          <v-toolbar-title class="subheading">
            This is a footer
          </v-toolbar-title>
        </v-toolbar>
      </template>

    </v-data-iterator>
  </v-container>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios,axios)

export default {
    data: () => ({
     itemsPerPage: 10,
     items: [],
    }),
    mounted() {
      Vue.axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=b33ac6661da0977b3c9d8014bf3e1d4d')
        .then(response => {
        this.items=response.data.results;
        console.warn(response)
      })
    },
    methods: {
      sortBy(prop){
        this.items.sort((b,a) => b[prop] < a[prop] ? 1 : -1)
      },
      sortByAZ(prop){
        this.items.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
      }
    }
}
// 'https://api.themoviedb.org/3/trending/movie/day?api_key=b33ac6661da0977b3c9d8014bf3e1d4d')


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