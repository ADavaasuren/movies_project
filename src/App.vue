<template>
  <v-container>
      <v-toolbar
          class="mb-15"
          color="indigo darken-5"
          dark
          flat
          fixed
      >
        <router-link :to="{name:'movieslist'}">
          <v-btn text>Home</v-btn>
        </router-link>
        <router-link :to="{name:'random'}">
          <v-btn text>Random</v-btn>
        </router-link>
      </v-toolbar>
      <router-view />
  </v-container>    
</template>

<script>

export default {
  name: 'App',
  }

</script>


<style>

body {
  background-color: rgb(66, 66, 66);
  color: white;
}

</style>