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
        <router-link :to="{name:'Movie'}">
          <v-btn text>Categories</v-btn>
        </router-link>
        <router-link :to="{name:'Randomizer'}">
          <v-btn text>Random</v-btn>
        </router-link>
      </v-toolbar>

    <div>
      <div v-if="Movie">
        <div class="card text-left">
            <v-img max-height="500" max-width="500" :src="movie.posters" alt>
            </v-img>
        </div>
        <div class="card-body">
            <h1>{{ movie.original_title }}</h1>
            <h3>{{ movie.original_language }}</h3>
            <p class="card-text">{{ movie.overview }}</p>
        </div>
      </div>
 


    </div>
      
      

  </v-container>
</template>


<script>
export default {
  props: ['id'],

  computed: {
    movie() {
      return this.$store.state.movie;
    }
  },
  mounted() {
    this.$store.dispatch('getMovies', this.id);
  }

};

</script>