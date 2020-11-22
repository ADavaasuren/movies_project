<template>
  <div >

    <main class="movie_detail">
        <section>
                <img :src="`https://image.tmdb.org/t/p/w500/${moviedata.poster_path}`" />
        </section>

        <section class="movieitems">
            <h1>{{ moviedata.title }} </h1>
            <h5>Overview:</h5>
            <p>{{ moviedata.overview }}</p>
        </section>
    </main>


    <h1>Similar movies</h1>

    <main id="similar_info">
      <div v-for="movie in similarMovies" :key="movie.id" >
              <section id="image_info">
                      <img :src="`https://image.tmdb.org/t/p/w300/${movie.poster_path}`" />
              </section>

              <section id="movie_info">
                  <h2>{{ movie.title }} </h2>
                  <p>Release date {{ movie.release_date }}</p>
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

h2,h1 {
  font-size: 50px;
  font-weight: 500;
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-family: "Mulish", Arial, Helvetica, sans-serif;
}

#movie_info {
  margin: 30px 0px 0px;
  margin-bottom: 100px;
}

#similar_info {
  margin: 100px 50px 0;
  display: flex;
  margin-left: 100px;
}

#image_info {
  margin-right: 400px;
}

</style>





