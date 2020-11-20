<template>
    <div >

        <section class="row" >
              <div v-for="movie in upcoming" :key="movie.id">
                  <img :src="`https://image.tmdb.org/t/p/w154/${movie.poster_path}`" />
                  <h2>{{ movie.title }}</h2>
                  <p>Release date {{ movie.release_date }}</p>
                  <p>Genre {{ movie.genre_ids }}</p>
                  <router-link :to="{name: 'detailspage', params: {id: movie.id}}" >
                  <button class="ghost"> View Item ></button>
                  </router-link>
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
     },
    mounted() {
      this.$store.dispatch('getUpcoming');
    },
}

</script>





<style scoped>

</style>

