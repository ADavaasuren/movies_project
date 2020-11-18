<template>
  <div>
    <Header />

          <v-layout id="icons" row class="mb-15">
              <v-btn small color="grey" @click="sortByAZ('movie_title')">
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
                  <router-link :to="`/movie/${movie.id}`" >
                    <button class="ghost"> View Item ></button>
                  </router-link>
              </div>
          </section>

                
          
        
             
                <!-- <v-card hover>
                  <v-layout row wrap id="cards">
                      <v-flex xs3 sm8 md4>
                          <v-btn id="movie_btn">
                            <router-link class="movie_titles" :to="{ name: 'details', params: {id: item.id}}">{{item.title}}</router-link>
                          </v-btn>
                      </v-flex>
                      <v-flex xs3 sm8 md3>
                        <div>{{ item.release_date }}</div>
                      </v-flex>
                      <v-flex xs3 sm8 md3>
                        <div>{{ item.popularity }}</div>
                      </v-flex>
                      <v-flex xs3 sm8 md2>
                        <div>{{ item.vote_count }}</div>
                      </v-flex>
                  </v-layout>
                </v-card>
              </v-col>
          </template> -->
        
        <Footer />


  </div>
</template>

<script>
import Header from './Header';
import { mapState } from 'vuex';


export default {
    name: 'movieslist',
    components: {
        Header,
    },
    computed: {
      ...mapState(["moviedata"]),
    },
    mounted() {
      this.$store.dispatch('getMovieData');
    },
    
    data: () => ({
        moviedataPerPage: 10,   
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

// mounted() {
    //   Vue.axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${PRIVATE_KEY}`)
    //     .then(response => {
    //     this.items=response.data.results;
    //     console.log(response);
    //   })
    // },
  





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