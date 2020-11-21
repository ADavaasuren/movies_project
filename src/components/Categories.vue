<template>
    <div >

        <h1>Action</h1> 

        <section class="row-2" >
              <div v-for="movie in upcoming" :key="movie.id">
                
                  <img 
                  :src="`https://image.tmdb.org/t/p/w154/${movie.poster_path}`" 
                  />
                  
                  <h4>{{ movie.title }}</h4>
                  
                  <p>Release date {{ movie.release_date }}</p>
                                    
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
      moviedata() { return this.$store.state.upcoming },
      similar() { return this.$store.state.similar }
     },
    mounted() {
      this.$store.dispatch('getUpcoming');
      this.$store.dispatch('getSimilar');
    },
}

</script>





<style scoped>

</style>

