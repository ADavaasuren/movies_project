<template>
  <div class="heroBlock">
    <v-carousel hide-delimiters cycle>
        <v-carousel-item
          v-for="movie in movies"
          :key="movie.id"
          :src="movie.imageUrl">
          <div class="title">

            {{ movie.title }}

          </div>

        </v-carousel-item>
    </v-carousel>
  </div>

  <!-- <div id="app">
        <div>
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
  </div> -->
</template>

<script>
// import Vue from 'vue';
// import axios from 'axios';
// import VueAxios from 'vue-axios';
// Vue.use(VueAxios,axios)

export default {
  data () {
        return {
          movies: [
            { imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91yL3qRT2EL._AC_SL1500_.jpg', id: 'dadad', title: 'The SpongeBob Movie: Sponge on the Run'},
            { imageUrl: 'https://www.moviemeter.nl/images/cover/1133000/1133497.jpg?cb=1602571126', id: 'fabfkjbfa', title: 'Operation Christmas Drop'},

          ],
        }
      },


    // name: "MovieList",
    // data()
    // {
    //     return{list:undefined}
    // },
    // mounted()
    // {
    //     Vue.axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=b33ac6661da0977b3c9d8014bf3e1d4d')
    //     .then((resp) =>{
    //         this.list=resp.data.results;
    //         console.warn(resp.data.results)
    //     })
    // }
}

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