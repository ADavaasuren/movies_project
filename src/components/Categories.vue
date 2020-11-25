<template>
    <main 
    class="container"
    >
        <h1>Upcoming</h1>
        <section class="row_2" >
              <div v-for="movie in upcoming" :key="movie.id">                
                  <img 
                  :src="`https://image.tmdb.org/t/p/w154/${movie.poster_path}`" 
                  />
                  <section id="movie_details">
                        <h3>{{ movie.title }}</h3>
                        <h4>Release date:</h4>
                        <p>{{ movie.release_date }}</p>
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
                  <h3>{{ movie.title }}</h3>
                  <h4>Release date:</h4>
                  <p>{{ movie.release_date }}</p>
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
                    <h3>{{ movie.title }}</h3>
                    <h4>Release date:</h4>
                    <p>{{ movie.release_date }}</p>
                </section>
              </div>
        </section>
    </main>    
</template>


<script>
import { mapState } from 'vuex';


export default {
    name: 'categories',
    // mutated data from store
    computed: {
      ...mapState(["upcoming"]),
      ...mapState(["toprated"]),
      ...mapState(["nowplaying"]),
    },
    // mounting functions from Vuex store
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
  margin: 100px 0px;
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-family: "Mulish", Arial, Helvetica, sans-serif;
}

h2 {
  font-weight: 500;
  color: rgb(255, 255, 255);
  margin-bottom: 10px;
  text-decoration: none;
  font-family: "Mulish", Arial, Helvetica, sans-serif;
}

h3 {
  font-weight: 400;
  font-size: 20px;
  color: rgb(255, 255, 255);
  margin-bottom: 10px;
  text-decoration: none;
  font-family: "Mulish", Arial, Helvetica, sans-serif;
}

h4 {
  font-weight: 400;
  font-size: 16px;
  color: rgb(255, 255, 255);
  margin-bottom: 10px;
  text-decoration: none;
  font-family: "Mulish", Arial, Helvetica, sans-serif;
}

.row_2 {
  margin: 100px 50px;
  width: 100%;
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(6, 2fr);
  grid-template-rows: 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 50px;
}

#movie_details {
  font-weight: 500;
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-family: "Mulish", Arial, Helvetica, sans-serif;
}

.container {
  padding-bottom: 10px;
  padding-top: 10px;
  margin-left: 40px;
  margin-right: 40px;
}

</style>
