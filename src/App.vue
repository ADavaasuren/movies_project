<template>
  <div>
    <div class="content">
      <Menu />
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
// import Header from './components/Header.vue';
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

@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300&family=Poppins:wght@600&display=swap');

</style>