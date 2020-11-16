<template>
  <v-container fluid>

      <v-toolbar class="mb-15" color="indigo darken-5" dark flat fixed>
      <v-spacer></v-spacer>
        <Header />
      <v-spacer></v-spacer>
      </v-toolbar>

    <router-view />

    <v-card height="100">
      <v-footer absolute class="font-weight-medium">
      <v-col class="text-center" cols="12">
        <Footer />
      </v-col>
      </v-footer>
    </v-card>

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
  
  // methods: {
  //   goRandom() {
  //     this.$router.push(`/random/{{computedSim.id}}`)
  //   }
  // }
  
}

</script>



<style scoped>

</style>