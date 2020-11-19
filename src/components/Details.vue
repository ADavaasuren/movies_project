<template>
  <div>

    <h4>this details page</h4>

    <main class="container" v-for="mov in moviedata" :key="mov.id">

        <!-- <section 
            class="image"
            :style="`background: url(https://image.tmdb.org/t/p/w300/${currentItem.poster_path} no repeat center center)`"
        ></section> -->

        <section class="details">
            <h1>{{ movie.title }} </h1>

        </section>

    </main>
        





            <!-- <v-img width="300" :src="imageURL + movieImage" alt="">
            </v-img>

            <div >
                {{mov.title}}
                {{mov.overview}}
            </div>

        </v-card>

        <ul>
            <li v-for="sim in computedSim" :key="sim.title">
                    {{sim.title}}
                    {{sim.overview}}
            </li> -->

        
<!-- Footer -->
  </div>    
</template>

<script>
import { mapState } from "vuex";
// import axios from 'axios'


export default {

  name: 'details',

    data() {
     return {
      limit: 1,
    }},
    computed: {
      ...mapState(["moviedata"]),
      movie() {
        return this.$store.state.moviedata.find(mov => mov.id == this.$route.params.id)
      }
    },
  
    mounted() {
      this.$store.dispatch('getMovieData');
    },

}

</script>















    // data() {
    //   return {
    //      imageURL: 'https://image.tmdb.org/t/p/w300',
    //      similar: [],
    //      limit: 3,
    // }},

    // mounted() {
    //      this.getDetails()
    //      this.getSimilar()
    // },

    // computed: {
    //   computedSim(){
    //       return this.limit ? this.similar.slice(0,this.limit) : this.similar
    //   }
    // },
        
    //     getSimilar: function(){

    //               var movieId = this.$route.params.id

    //               axios.get(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${PRIVATE_KEY}`)
            
    //                   .then((response) => {
    //                   console.log(response);
    //                   this.similar = response.data.results;
    //                   })
    //     },
    // }




<style scoped>

</style>