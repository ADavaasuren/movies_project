<template>
   <v-carousel 
        :show-arrows="false"
        height="600"
        cycle
        interval="6000"
        hide-delimiters
    >
        <v-carousel-item
            v-for="image in moviedata"
            :key="image.id"
            :src="`https://image.tmdb.org/t/p/w1280${image.backdrop_path}`"
            position="absolute"
            class="carousel"
        >
        <div class="title">
            Popular Movies
        </div>
        </v-carousel-item>
  </v-carousel>
</template>



<script>
import { mapState } from 'vuex';


export default {
    name: 'header',

    computed: {
      ...mapState(["moviedata"]),
    },

    mounted() {
      this.$store.dispatch('getMovieData');
    }
}

</script>



<style scoped>

.carousel{
    object-position: center;
    margin: 12px 0px;
}

.title {
    position: absolute;
    bottom: 100px;
    font-size: 100px;
    margin: 50px 300px 200px;
}

h1 {
  font-style: normal;
  font-weight: bold;
  color: #eee;
  font-size: 8vmin;
  letter-spacing: 0.03em;
  line-height: 1;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 146px;
}

</style>