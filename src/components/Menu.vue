<template>

    <nav>
      <ul>
          <li><router-link exact to="/home"><v-btn small >Home</v-btn></router-link></li>
          <li><router-link :to="{name: 'randompage', params: {id: shuffledMovie.id}}"><v-btn small>Random</v-btn></router-link></li>
          <li><router-link :to="{name:'categoriespage'}"><v-btn small>Categories</v-btn></router-link></li>
      </ul>
    </nav>

</template>




<script>
import { mapState } from 'vuex';


export default {

  name: 'menu',
  
  data: () => ({

        shuffledMovie: []
  }),

  computed: {
      ...mapState(["moviedata"]),
      ...mapState(["items"]),
      shuffled() { return this.$store.state.items }
  },

  mounted() {
      this.$store.dispatch('getMovieData');
  }
}
</script>




<style lang="scss" scoped>

</style>