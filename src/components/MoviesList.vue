<template>
  <div>
    <Header />

          <v-layout row class="sort_icons">
              <v-btn id="icons" small color="grey" @click="sortByAZ('title')">
                  <span class="text-lowercase">movie title</span>
              </v-btn>
              <v-btn id="icons" small color="grey" @click="sortBy('release_date')">
                  <span class="text-lowercase">release date</span>
              </v-btn>
              <v-btn id="icons" small color="grey" @click="sortBy('popularity')">
                  <span class="text-lowercase">popularity</span>
              </v-btn>
              <v-btn id="icons" small color="grey" @click="sortBy('vote_count')">
                  <span class="text-lowercase">votes</span>
              </v-btn>
          </v-layout>

          <section class="row_1" >
              <div v-for="movie in lessMovie" :key="movie.id" >
            
                  <img 
                    :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" 
                  />
                 
                <section id="movie_details">
                     <h2>{{ movie.title }}</h2>                   
                </section>

                  <router-link 
                    :to="{name: 'detailspage',
                     params: {id: movie.id}}"
                  >
                    <button class="ghost">
                       View Details
                    </button>                  
                  </router-link>

              </div>
          </section>         
                        
     <Footer />
  </div>
</template>

<script>
import Header from './Header';


export default {
    name: 'movieslist',
    components: {
        Header,
    },
    computed: {
      moviedata() { return this.$store.state.moviedata },
      similar() { return this.$store.state.similar },
      lessMovie() {
          return this.limit ? this.moviedata.slice(0,this.limit) : this.moviedata
        },

    },
    mounted() {
      this.$store.dispatch('getMovieData');
      this.$store.dispatch('getSimilar');
    },
    
    data: () => ({
        limit: 10
    }),
    methods: {
            sortBy(prop) {
            this.moviedata.sort((b,a) => b[prop] < a[prop] ? 1 : -1)
            },

            sortByAZ(prop){
            this.moviedata.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
            }  
    }
}    

</script>




<style scoped>

.sort_icons {
  margin: 20px 400px 20px;
}

button {
  display: inline-block;
  border: none;
  margin: 50px 10px 10px;
  background: rgb(21, 149, 235);
  color: rgb(255, 255, 255);
  padding: 10px 80px;
  cursor: pointer;
}
button:hover {
  color: #000;
  background-color: #e6e6e6;
  transition: all 0.2s;
}

p {
  font-weight: 200;
  margin-bottom: 10px;
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-family: "Mulish", Arial, Helvetica, sans-serif;
}

h2 {
  font-size: 30px;
  margin-bottom: 10px;
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-family: "Mulish", Arial, Helvetica, sans-serif;

}

</style>