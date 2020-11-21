<template>
    <div >

        <h1>Upcoming</h1> 
        <section class="row_2" >
              <div v-for="movie in upcoming" :key="movie.id">
                
                  <img 
                  :src="`https://image.tmdb.org/t/p/w154/${movie.poster_path}`" 
                  />

            <section id="movie_details">

                  <h4>{{ movie.title }}</h4>      
                  <p>Release date {{ movie.release_date }}</p>

            </section>
              </div>
        </section>

        <h1>Top Rated</h1> 
        <section class="row_2" >
              <div v-for="movie in toprated" :key="movie.id">
                
                  <img 
                  :src="`https://image.tmdb.org/t/p/w154/${movie.poster_path}`" 
                  />

                <section id="movie_details">  
                  <h4>{{ movie.title }}</h4>
                  <p>Release date {{ movie.release_date }}</p>
                </section>                                    

              </div>
        </section>
        
        <h1>Now Playing</h1> 
        <section class="row_2" >
              <div v-for="movie in nowplaying" :key="movie.id">
                
                  <img 
                  :src="`https://image.tmdb.org/t/p/w154/${movie.poster_path}`" 
                  />

                <section id="movie_details">
                    <h4>{{ movie.title }}</h4>                    
                    <p>Release date {{ movie.release_date }}</p>
                </section>

              </div>
        </section>


    </div>    
</template>


<script>
import { mapState } from 'vuex';


export default {
    name: 'categories',

    computed: {
      ...mapState(["upcoming"]),
      ...mapState(["toprated"]),
      ...mapState(["nowplaying"]),
    },

    mounted() {
        this.$store.dispatch('getUpcoming');
        this.$store.dispatch('getTopRated');
        this.$store.dispatch('getNowPlaying');
    },
}

</script>





<style scoped>

h1 {
  font-weight: 500;
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-family: "Mulish", Arial, Helvetica, sans-serif;
}

</style>