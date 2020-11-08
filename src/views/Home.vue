<template>
  <v-container fluid>
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar
          class="mb-2"
          color="indigo darken-5"
          dark
          flat
          fixed
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
          <v-row
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card flat>
              <v-layout row wrap>
                <v-flex>
                  <div>Title</div>
                  <div>{{ item.original_title }}</div>
                  <div>Release date:</div>
                  <div>{{ item.release_date }}</div>
                  <div>Popularity:<div>
                  <div>{{ item.popularity }}</div>
                </v-flex>
              </v-layout>
            </v-card>
          </v-row>
      </template>

      <template v-slot:footer>
        <v-toolbar
          class="mt-2"
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
     itemsPerPage: 20,
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

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
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