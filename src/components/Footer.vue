<template>
    <footer>
      <v-flex class="row">
            <h4>Copyright @2020</h4>
            <a href="http://localhost:8080/home" target="_blank">Home</a>
            <a href="http://localhost:8080/random" target="_blank">Random</a>
            <a href="http://localhost:8080/categories" target="_blank">Categories</a>
            <a href="https://www.themoviedb.org/" target="_blank">TMDB</a>
      </v-flex>
    </footer>
</template>


<script>

export default {
    name: 'Footer', 
}

</script>


<style scoped>

.row {
   align-items: center;
   justify-content: space-evenly;
}

a {
  text-decoration: none;
}

</style>