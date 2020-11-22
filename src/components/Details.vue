<template>
  <div >
    <main class="movie_detail">
        <section>
                <img :src="`https://image.tmdb.org/t/p/w500/${moviedata.poster_path}`" />
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
      <div v-for="movie in similarMovies" :key="movie.id" >
              <section id="image_info">
                      <img :src="`https://image.tmdb.org/t/p/w300/${movie.poster_path}`" />
              </section>
              <section id="similarMovie_info">
                  <h1>{{ movie.title }} </h1>
                  <h3>Release date:</h3>
                  <p>{{ movie.release_date }}</p>
              </section>
      </div>        
    </main>
  </div>    
</template>

<script>
import axios from 'axios'


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

                  axios.get(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=b33ac6661da0977b3c9d8014bf3e1d4d`)
            
                      .then((response) => {
                      console.log(response);
                      this.similar = response.data.results;
                      })
        },
    }
}

</script>




<style scoped>

h3 {
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 20px;
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-family: "Mulish", Arial, Helvetica, sans-serif;
}

h1 {
  font-size: 60px;
  font-weight: 500;
  margin-bottom: 10px;
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-family: "Mulish", Arial, Helvetica, sans-serif;
}

h2 {
  font-size: 50px;
  font-weight: 500;
  margin-bottom: 20px;
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-family: "Mulish", Arial, Helvetica, sans-serif;
}

p {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-family: "Mulish", Arial, Helvetica, sans-serif;
}

#similarMovie_info {
  margin: 30px 0px 0px;
  margin-bottom: 70px;
}

#similar_info {
  margin: 20px 50px 0;
  display: flex;
  margin-left: 100px;
}

#image_info {
  margin-right: 300px;
}

</style>





