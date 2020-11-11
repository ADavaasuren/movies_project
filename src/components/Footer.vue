<template>
    <v-container fluid>
      <template v-slot:footer>
        <v-toolbar
          class="mt-15"
          color="indigo"
          dark
          flat
        >
          <v-toolbar-title class="subheading">
            This is a footer
          </v-toolbar-title>
        </v-toolbar>
      </template>
  </v-container>
</template>

<script>
export default {
    name: 'Footer'    
}
</script>


<style scoped>

</style>