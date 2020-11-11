<template>
    <div>
      <Header />
      <MoviesList />
    </div>
</template>

<script>
import MoviesList from './components/MoviesList.vue';
import Header from './components/Header.vue';


export default {
  name: 'App',
  components: {
    MoviesList,
    Header,
  }
} 

</script>


<style>

body {
  background-color: rgb(66, 66, 66);
  color: white;
}

</style>