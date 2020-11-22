<template>
    <nav class="nav">
            <button>
                <router-link exact to="/home">Home</router-link>
            </button>
            <button>
                <router-link :to="{name: 'randompage', params: {id: shuffledMovie.id}}">Random</router-link>
            </button>
            <button>
                <router-link :to="{name:'categoriespage'}">Categories</router-link>
            </button>
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




<style scoped>

button {
  background-color: rgba(153, 2, 2, 0.5);
  transition: background ease 0.25s;
  border-radius: 5px;
  display: inline-block;
  border: none;
  padding: 0.75rem 1.5rem;
  margin: 10px;
  text-decoration: none;
  color: #ffffff;
  font-size: 1.2rem;
  cursor: pointer;
  text-align: left;
  -webkit-appearance: none;
  -moz-appearance: none;
}

button:hover {
  color: #000;
  background-color: #e6e6e6;
  transition: all 0.2s;
}

</style>