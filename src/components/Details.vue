<template>
  <div>


    <main class="container">

        <section class="image" >
                <img :src="`https://image.tmdb.org/t/p/w500/${moviedata.poster_path}`" />
        </section>

        <section class="details">
            <h1>{{ moviedata.title }} </h1>
            <p>{{ moviedata.overview }}</p>
        </section>

    </main>


    <h1>Similar movies</h1>

    <main class="container" v-for="movie in similarMovies" :key="movie.id" >

        <section class="image" >
                <img :src="`https://image.tmdb.org/t/p/w300/${movie.poster_path}`" />
        </section>

        <section class="details">
            <h1>{{ movie.title }} </h1>
            <p>{{ movie.overview }}</p>
        </section>
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
    computed: {
      moviedata() {
        return this.$store.state.moviedata.find(mov => mov.id == this.$route.params.id)
      },

      similarMovies() {
        return this.limit ? this.similar.slice(0,this.limit) : this.similar
      },
    },
  
    mounted() {
      this.$store.dispatch('getMovieData');
      this.getSimilar()
    },
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
</style>





