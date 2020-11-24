<template>
    <div >
        <!-- looping through mutated data -->
        <main id="movie_info" v-for="item in shuffledMovie" :key="item.title">
            <section>
                <img :src="`https://image.tmdb.org/t/p/w500/${item.poster_path}`" />
            </section>
            <section id="movie_desc">
                <h1>{{ item.title }} </h1>
                <h2>Description:</h2>
                <p>{{ item.overview }}</p>
            </section>
        </main>
        <button block v-on:click="getMoreMovie">
            More random
        </button>
    </div>
</template>



<script>

import { mapState } from 'vuex';
import axios from 'axios';
import { PRIVATE_KEY } from '../key'

export default {
    name: 'random',

    data() {
        return {
            limit: 1,
            items: []
        }
    },
    computed: {
      ...mapState(["items"]),
      // mutating an array to display less number of movies
      shuffledMovie() {
            return this.limit ? this.items.slice(0,this.limit) : this.items
        },
    },
    mounted() {
        // triggering first random item
        this.$store.dispatch('getShuffled');
        // calling second shuffle function
        this.getMoreMovie();
    },
    methods: {
        // a specific function for this page to initiate more data fetching
        // also includes javascript shuffle function
        getMoreMovie: function() {
                 
                axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${PRIVATE_KEY}`)
            
                     .then((response) => {
                         const _ = require('lodash');
                         let shuffled = _.shuffle(response.data.results);
                         console.log(shuffled);
                         this.items = shuffled;
                        })
        }
    }
}

</script>






<style scoped>

#movie_info {
  margin: 60px 120px 100px;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

h1 {
  font-size: 40px;
  font-weight: 500;
  color: rgb(255, 255, 255);
  text-decoration: none;
  margin-bottom: 10px;
  font-family: "Mulish", Arial, Helvetica, sans-serif;
}

h2 {
  font-size: 28px;
  font-weight: 50;
  color: rgb(255, 255, 255);
  text-decoration: none;
  margin-bottom: 10px;
  font-family: "Mulish", Arial, Helvetica, sans-serif;
}

#movie_desc {
    margin: 60px 100px 100px;
}

button {
  cursor: pointer;
  color: #fff;
  outline: none;
  border: none;
  margin: 10px;
  margin-left: 200px;
  margin-bottom: 13px;
  font-weight: 900;
  font-size: 20px;
  border-radius: 0.2vw;
  padding-left: 2rem;
  padding-right: 3rem;
  margin-right: 2rem;
  padding-top: 1rem;
  background-color: rgba(153, 2, 2, 0.5);
  padding-bottom: 1rem;
}

button:hover {
  color: #000;
  background-color: #e6e6e6;
  transition: all 0.2s;
}

p {
  margin-right: 40px;
  font-size: 18px;
  font-weight: 400;
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-family: "Mulish", Arial, Helvetica, sans-serif;
}

</style>