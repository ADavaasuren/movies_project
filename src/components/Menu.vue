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
  // accessing mutated data from store
  computed: {
      ...mapState(["moviedata"]),
      ...mapState(["items"]),
      shuffled() { return this.$store.state.items }
  },
  // calling relevant function from store
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
  padding: 0.30rem 0.30rem;
  margin: 5px;
  text-decoration: none;
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 200;
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