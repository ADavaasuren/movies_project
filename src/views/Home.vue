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
            <v-card v-for="item in props.items" :key="item.name" class="pa-3">
              <v-layout row wrap class="cards">
                <v-flex xs12 md6>
                  <v-chip>{{ item.original_title }}</v-chip>
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
  }

// 'https://api.themoviedb.org/3/trending/movie/day?api_key=b33ac6661da0977b3c9d8014bf3e1d4d')


</script>

<style scoped>

.cards {
  border-bottom: 2px solid black;
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