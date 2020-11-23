<template>
  <div id="app">
        <div>
        <h1>Trending Movies</h1>
        <table border="1px">
            <tr>
                <td>Name</td>
                <td>Popularity</td>
                <td>Release Date</td>
            </tr>
            <tr v-for="item in list" v-bind:key="item.id">
                <td>{{item.original_title}}</td>
                <td>{{item.popularity}}</td>
                <td>{{item.release_date}}</td>
            </tr>
        </table>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios,axios)

export default {
    name: "MovieList",
    data()
    {
        return{list:undefined}
    },
    mounted()
    {
        Vue.axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=')
        .then((resp) =>{
            this.list=resp.data.results;
            console.warn(resp.data.results)
        })
    }
}

</script>

<style>
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
