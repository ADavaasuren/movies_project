<template>
  <div>
    <Header />
          <v-layout row id="sort_icons">
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
          <!-- looping through mutated data -->
          <section class="row_1" >
              <div v-for="movie in lessMovie" :key="movie.id" >            
                  <img 
                    :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" 
                  />
                <section id="movie_details">
                     <h2>{{ movie.title }}</h2>
                     <h3>Release date:</h3>
                     <p> {{ movie.release_date }}</p>
                     <h3>Popularity:</h3>
                     <p>{{ movie.popularity }}</p>                   
                </section>
                  <router-link 
                    :to="{name: 'detailspage',
                     params: {id: movie.id}}"
                  >
                    <button>
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
      // mutating an array to reduce the number of items to display
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
    // sorting functions for the click event
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

#sort_icons {
  margin: 20px 470px 10px;
}

button {
  display: inline-block;
  border: none;
  margin: 20px 0px 10px;
  background: rgb(21, 149, 235);
  color: rgb(255, 255, 255);
  padding: 10px 50px;
  cursor: pointer;
}
button:hover {
  color: #000;
  background-color: #e6e6e6;
  transition: all 0.2s;
}

p {
  font-size: 13px;
  margin-bottom: 10px;
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-family: "Mulish", Arial, Helvetica, sans-serif;
}

h2 {
  font-size: 25px;
  margin-bottom: 10px;
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-family: "Mulish", Arial, Helvetica, sans-serif;

}

h3 {
  font-size: 15px;
  margin-bottom: 10px;
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-family: "Mulish", Arial, Helvetica, sans-serif;

}

#icons {
  cursor: pointer;
  color: #fff;
  outline: none;
  border: none;
  margin: 30px;
  font-weight: 800;
  border-radius: 0.2vw;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-right: 2rem;
  padding-top: 0.5rem;
  background-color: rgba(153, 2, 2, 0.5);
  padding-bottom: 0.5rem;
}

#icons:hover {
  color: #000;
  background-color: #e6e6e6;
  transition: all 0.2s;
}

.row_1 {
  margin: 60px 10px 60px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 60px;
}



</style>