<template>
  <v-container fluid>
    <div>
      <Details />
    </div>

  </v-container>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Details from '@/components/Details.vue'


Vue.use(VueAxios,axios)

export default {
  name: 'home',
  components: {
    Details
  },
    data: () => ({
        itemsPerPage: 10,
        items: [],
      }),
    mounted() {
      Vue.axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=b33ac6661da0977b3c9d8014bf3e1d4d')
        .then(response => {
        this.items=response.data.results;
        console.warn(response)
      })
    },
    methods: {
      sortBy(prop){
        this.items.sort((b,a) => b[prop] < a[prop] ? 1 : -1)
      },
      sortByAZ(prop){
        this.items.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
      }
    },
  }
// 'https://api.themoviedb.org/3/trending/movie/day?api_key=b33ac6661da0977b3c9d8014bf3e1d4d')


</script>

<style scoped>

.cards {
  border: 2px solid black;
  align-items: center;
}

.chip {
  margin-left: 10px;
}

.movie_titles {
  font-weight: 700;
  color: #000;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
background: #666;
}

</style>