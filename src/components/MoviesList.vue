<template>
  <div>
    <Header />

          <v-layout id="icons" row class="mb-15">
              <v-btn small color="grey" @click="sortByAZ('title')">
                  <span class="text-lowercase">movie title</span>
              </v-btn>
              <v-btn small color="grey" @click="sortBy('release_date')">
                  <span class="text-lowercase">release date</span>
              </v-btn>
              <v-btn small color="grey" @click="sortBy('popularity')">
                  <span class="text-lowercase">popularity</span>
              </v-btn>
              <v-btn small color="grey" @click="sortBy('vote_count')">
                  <span class="text-lowercase">votes</span>
              </v-btn>
          </v-layout>

          <section class="row" >
              <div v-for="movie in moviedata" :key="movie.id">
                  <h2>{{ movie.title }}</h2>
                  <p>Release date {{ movie.release_date }}</p>
                  <p>Popularity {{ movie.popularity }}</p>
                  <router-link :to="{name: 'detailspage', params: {id: movie.id}}" >
                    <button class="ghost"> View Item ></button>
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
      similar() { return this.$store.state.similar }

    },
    mounted() {
      this.$store.dispatch('getMovieData');
      this.$store.dispatch('getSimilar');
    },
    
    data: () => ({
        // moviedataPerPage: 10,   
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

#cards {
  align-items: center;
}

.movie_titles {
  font-weight: 300;
  color: #000;
  text-decoration: none;
  font-family: "Mulish", Arial, Helvetica, sans-serif;
}

#movie_btn {
  display: inline-block;
  border: none;
  background: rgb(21, 149, 235);
  color: rgb(255, 255, 255);
  padding: 20px 10px;
  cursor: pointer;
}
#movie_btn:hover {
  background: rgb(5, 71, 60);
}

#icons {
  justify-content: space-evenly;
}
</style>