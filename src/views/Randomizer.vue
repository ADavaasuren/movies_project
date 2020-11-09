<template>
  <v-container>
      <v-toolbar
          class="mb-15"
          color="indigo darken-5"
          dark
          flat
          fixed
      >
        <router-link :to="{name:'Home'}">
          <v-btn text>Home</v-btn>
        </router-link>
        <router-link :to="{name:'Movie'}">
          <v-btn text>Categories</v-btn>
        </router-link>
        <router-link :to="{name:'Randomizer'}">
          <v-btn text>Random</v-btn>
        </router-link>
      </v-toolbar>
  </v-container>   
</template>

