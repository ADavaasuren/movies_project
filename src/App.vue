<template>
  <v-app> 
      <router-link :to="{name:'Home'}">
      </router-link>
      <router-link :to="{name:'Movie'}">
      </router-link>
      <router-link :to="{name:'Randomizer'}">
      </router-link>

      <router-view></router-view>
  </v-app>
</template>

<script>

export default {
   name: 'App',
 };
</script>


<style>

</style>