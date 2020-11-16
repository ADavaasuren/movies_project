<template>
  <v-container fluid>

        <Header />
    <router-view />
        <Footer />

  </v-container>
</template>

<script>
import Footer from './components/Footer'
import Header from './components/Header'



export default {
  name: 'App',

  components: {
    Footer,
    Header
  }, 
}

</script>



<style scoped>

</style>