<template>
    <div>
      <MoviesList />
    </div>
</template>

<script>
import MoviesList from '@/components/MoviesList.vue'



export default {
  name: 'home',
  components: {
    MoviesList
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