<template>
    <div class="app">
        <v-app-bar height="40" dark fixed>
          <Menu />
        </v-app-bar>
        <div>
          <router-view/>
        </div>
        <v-footer height="100" dark>
          <Footer />
        </v-footer>
    </div>
</template>



<script>
import Menu from './components/Menu.vue';
import Footer from './components/Footer.vue';


export default {
  name: 'App',
  components: {
      Menu,
      Footer
  }
}
</script>


<style>

* {
  margin: 0;
}

.app {
  background-color: #111;
}

@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300&family=Poppins:wght@600&display=swap');

</style>