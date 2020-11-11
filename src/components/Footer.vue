<template>
    <v-container fluid>

    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar
          class="mb-15"
          color="indigo darken-5"
          dark
          flat
        >

      </template>

      <template v-slot:default="props">

            <v-layout row class="pa-8 mb-2">
              <v-btn small flat color="grey" @click="sortByAZ('original_title')">
                  <v-icon left small></v-icon>
                  <span class="text-lowercase">By movie title</span>
              </v-btn>
              <v-btn small flat color="grey" @click="sortBy('release_date')">
                <v-icon left small></v-icon>
                <span class="text-lowercase">By release date</span>
              </v-btn>
              <v-btn small flat color="grey" @click="sortBy('popularity')">
                <v-icon left small></v-icon>
                <span class="text-lowercase">By popularity</span>
              </v-btn>
              <v-btn small flat color="grey" @click="sortBy('vote_count')">
                <v-icon left small></v-icon>
                <span class="text-lowercase">By votes</span>
              </v-btn>


            </v-layout>


            <v-card v-for="item in props.items" :key="item.name" class="pa-3">
              <v-layout row wrap class="cards">
                  <v-flex xs12 md6 >
                      <div class="chip">
                         <router-link :to="{name: 'Movie', params: {id: movie_id}}" x-large class="my-5 movie_titles">{{ item.original_title }}</router-link>
                      </div>
                  </v-flex>
                  <v-flex xs6 sm4 md2>
                    <div>Release date:</div>
                    <div>{{ item.release_date }}</div>
                  </v-flex>
                  <v-flex xs6 sm4 md2>
                    <div>Popularity:</div>
                    <div>{{ item.popularity }}</div>
                  </v-flex>
                  <v-flex xs2 sm4 md2>
                    <div>Votes:</div>
                    <div>{{ item.vote_count }}</div>
                  </v-flex>
                </v-layout>
            </v-card>
      </template>

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

    </v-data-iterator>
  </v-container>
</template>

<script>
export default {
    name: 'Footer'    
}
</script>


<style scoped>

</style>