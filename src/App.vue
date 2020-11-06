<template>
  <v-app dark>
      <v-app-bar
        app
        flat
        >
        <Header/>
      </v-app-bar>

    <main>

      <v-content>
        <Home />
      </v-content>
    </main>    
  </v-app>
</template>

<script>
import Header from './components/Header';
import Home from './views/Home';



export default {
  name: 'App',

  components: {
    Header,
    Home
  },

  data: () => ({
    //
  }),
};
</script>

<style>

</style>