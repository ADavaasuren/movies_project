<template>
  <v-container>
    <v-toolbar flat
      src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg"
    >

      <v-toolbar-items>
        
        <v-btn text>Home</v-btn>

        <v-btn text>Categories</v-btn>

        <v-btn text>Random</v-btn>
        
      </v-toolbar-items>

      <v-spacer></v-spacer>

    </v-toolbar>
  </v-container>
</template>

<script>
  export default {
    name: 'Header',

    data: () => ({
      
    }),
  } 
</script>

<style scoped>

</style>