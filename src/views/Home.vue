<template>
    <div>
      <Header />
      <MoviesList />
      <Footer />
    </div>
</template>

<script>
import MoviesList from '@/components/MoviesList.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'




export default {
  name: 'home',
  components: {
    MoviesList,
    Header,
    Footer
  },
} 

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