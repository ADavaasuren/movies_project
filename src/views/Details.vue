<template>
  <v-container>
      <v-toolbar
          class="mb-15"
          color="indigo darken-5"
          dark
          flat
          fixed
      >
        <router-link :to="{name:'Home'}">
          <v-btn text>Home</v-btn>
        </router-link>
        <router-link :to="{name:'Details'}">
          <v-btn text>Categories</v-btn>
        </router-link>
        <router-link :to="{name:'Randomizer'}">
          <v-btn text>Random</v-btn>
        </router-link>
      </v-toolbar>

    <div>
      <div v-for="movie in movies" :key="movie.id" :movie="movie">
        <div class="card text-left">
            <v-img max-height="500" max-width="500" :src="movie.poster_path" alt>
            </v-img>
        </div>
        <div class="card-body">
            <h4 class="card-title">
                <router-link :to="{name: 'movie', params: {id: movie.id}}">{{movie.original_title}}</router-link>
            </h4>
            <strong>{{original_language}}</strong>
            <p class="card-text">{{ movie.overview }}</p>
        </div>
      </div>
 


    </div>
      
      

  </v-container>
</template>


<script>
export default {
  props: ['movie'],

  computed: {
    movies() {
      return this.$store.state.movies;
    }
  },
  mounted() {
    this.$store.dispatch('getMovies');
  }

};

</script>