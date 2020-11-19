<template>
  <div>

    <h4>this details page</h4>

    <main class="container">

        <section class="image" :style="`background: no-repeat center center`">
                <img :src="`https://image.tmdb.org/t/p/w300/${moviedata.poster_path}`" />
        </section>

        <section class="details">
            <h1>{{ moviedata.title }} </h1>
            <p>{{ moviedata.overview }}</p>
        </section>
    </main>

    <main class="container" v-for="movie in similar" :key="movie.id" >

        <section class="image" :style="`background: no-repeat center center`">
                <img :src="`https://image.tmdb.org/t/p/w300/${similar.poster_path}`" />
        </section>

        <section class="details">
            <h1>{{ similar.title }} </h1>
            <p>{{ similar.overview }}</p>
        </section>
    </main>


  </div>    
</template>

<script>
import { mapState } from "vuex";


export default {

  name: 'details',

    data() {
     return {
      limit: 1,
      id: this.$route.params.id
    }},
    computed: {
      ...mapState(["similar"]),
      moviedata() {
        return this.$store.state.moviedata.find(mov => mov.id == this.$route.params.id)
      }
    },
  
    mounted() {
      this.$store.dispatch('getMovieData');
      this.$store.dispatch('getSimilar');
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