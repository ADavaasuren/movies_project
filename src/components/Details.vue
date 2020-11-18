<template>
  <div>
    <pre>{{ $data }}</pre>

    <h4>this details page</h4>

    <main class="container" v-for="movie in computedMovie" :key="movie.title">

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

export default {
    name: 'details',

    props: ["id"],

    data() {
     return {
            // limit: 1,
        };
    },
    computed: {
      ...mapState(["details"]),
    },
  
    mounted() {
       this.$store.dispatch('getDetails');
    },
}


    //   currentItem() {
    //       let result;
          
    //       for (let i = 0; i < this.moviedata.length; i++) {
    //           for (let j=0; j < this.moviedata[i].length; j++) {
    //             if (this.moviedata[i].[j].id === this.id) {
    //               result = this.moviedata[i].[j];
    //               break;
    //             }
    //         }   
    //         return result;
    //       }
    //    }
    //}
//}    
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
    // methods: {

    //     getDetails: function(){

    //              var movieId = this.$route.params.id

    //             axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${PRIVATE_KEY}`)
            
    //                 .then((result) => {
    //                  console.log(result);
    //                  this.movie = result; 
    //                  this.movieImage = result.data.poster_path
    //                 })
    //     },
        
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