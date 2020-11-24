<template>
  <div >
    <main class="movie_detail">
        <section>
                <img :src="`https://image.tmdb.org/t/p/w342/${moviedata.poster_path}`" />
        </section>
        <section class="movieitems">
            <h1>{{ moviedata.title }} </h1>
            <h3>Overview:</h3>
            <p>{{ moviedata.overview }}</p>
            <h3>Release date:</h3>
            <p> {{ moviedata.release_date }}</p>
            <h3>Popularity:</h3>
            <p>{{ moviedata.popularity }}</p>
        </section>
    </main>
    <h2>Similar movies</h2>
    <main id="similar_info">
      <!-- looping through mutated data -->
      <div v-for="movie in similarMovies" :key="movie.id" >
              <section id="image_info">
                      <img :src="`https://image.tmdb.org/t/p/w185/${movie.poster_path}`" />
              </section>
              <section id="similarMovie_info">
                  <h2>{{ movie.title }} </h2>
                  <h4>Release date:</h4>
                  <p>{{ movie.release_date }}</p>
              </section>
      </div>        
    </main>
  </div>    
</template>

<script>
import axios from 'axios'
import { PRIVATE_KEY } from '../key'


export default {

  name: 'details',

    data() {
     return {
        similar: [],
        limit: 3,
        id: this.$route.params.id
    }},
    // dynamically matching selected item to display
    computed: {
      moviedata() {
        return this.$store.state.moviedata.find(mov => mov.id == this.$route.params.id)
      },
      // mutating an array to display limited number of items
      similarMovies() {
        return this.limit ? this.similar.slice(0,this.limit) : this.similar
      },
    },
    // calling relevant functions from Vuex store  
    mounted() {
      this.$store.dispatch('getMovieData');
      this.getSimilar()
    },
    // a specific function to fetch similar items
    methods: {
      
      getSimilar: function(){

                  var movieId = this.$route.params.id

                  axios.get(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${PRIVATE_KEY}`)
            
                      .then((response) => {
                      console.log(response);
                      this.similar = response.data.results;
                      })
        },
    }
}

</script>




<style scoped>

h1 {
  font-size: 50px;
  font-weight: 500;
  margin-bottom: 10px;
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-family: "Mulish", Arial, Helvetica, sans-serif;
}

h2 {
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 20px;
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-family: "Mulish", Arial, Helvetica, sans-serif;
}

h3 {
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 10px;
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-family: "Mulish", Arial, Helvetica, sans-serif;
}

h4 {
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 10px;
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-family: "Mulish", Arial, Helvetica, sans-serif;
}

p {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-family: "Mulish", Arial, Helvetica, sans-serif;
}

#similarMovie_info {
  margin: 40px 0px 0px;
  margin-bottom: 50px;
}

#similar_info {
  margin: 10px 50px 0;
  display: flex;
  margin-left: 200px;
}

#image_info {
  margin-right: 300px;
}

.movie_detail {
  margin: 20px 0 160px 200px;
  display: flex;
  align-items: center;
}

.movieitems {
  margin: 100px 70px 200px;
  font-size: 30px;
  font-weight: 500;
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-family: "Mulish", Arial, Helvetica, sans-serif;
}

</style>





