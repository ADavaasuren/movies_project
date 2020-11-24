<template>
      <v-flex class="row">
            <h4>Copyright @2020</h4>
            <a href="/home" target="_blank">Home</a>
            <a href="/random" target="_blank">Random</a>
            <a href="/categories" target="_blank">Categories</a>
            <a href="https://www.themoviedb.org/" target="_blank">TMDB</a>
      </v-flex>
</template>


<script>

export default {
    name: 'Footer', 
}

</script>


<style scoped>

.row {
   align-items: center;
   display: flex;
   justify-content: space-evenly;
   margin-bottom: 0px;
}

a {
  text-decoration: none;
  color: rgb(140, 164, 190);
}

</style>