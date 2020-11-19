<template>
    <div >

        <section class="row" >
              <div v-for="movie in moviedata" :key="movie.id">
                  <img :src="`https://image.tmdb.org/t/p/w154/${movie.poster_path}`" />
                  <h2>{{ movie.title }}</h2>
                  <p>Release date {{ movie.release_date }}</p>
                  <p>Genre {{ movie.genre_ids }}</p>
              </div>
        </section>



    </div>    
</template>


<script>
import { mapState } from 'vuex';


export default {
    name: 'categories',

    computed: {
      ...mapState(["moviedata"]),
     },
}

</script>





<style scoped>

</style>

