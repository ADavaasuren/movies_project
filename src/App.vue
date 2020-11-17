<template>
  <div>
    <div class="content">
        <Menu />
        <Header />
        <MoviesList />
        <Footer />
    </div>
  </div>
</template>

<script>
import Footer from './components/Footer'
import Header from './components/Header'
import Menu from './components/Menu'
import MoviesList from './components/MoviesList'


export default {
  name: 'App',
  
  data: () => ({
    popular: []
  }),
  
  components: {
    Footer,
    Header,
    Menu,
    MoviesList
  }, 
}

</script>



<style>

@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300&family=Poppins:wght@600&display=swap');

</style>