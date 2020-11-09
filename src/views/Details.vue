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
        <router-link :to="{name:'Details'}">
          <v-btn text>Categories</v-btn>
        </router-link>
        <router-link :to="{name:'Randomizer'}">
          <v-btn text>Random</v-btn>
        </router-link>
      </v-toolbar>

    <div>
      <div>
        <div class="card text-left">
            <v-img max-height="500" max-width="500" src="https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/lhfjaxldfojyg4bl_1603189227.jpeg?tr=w-812,h-464" alt>
            </v-img>
        </div>
        <div class="card-body">
            <h4 class="card-title">
                <a href="#">Movie title</a>
            </h4>
            <strong>PG-13</strong>
            <p class="card-text">Five young mutants, just discovering their abilities while held in a secret facility against their will, fight to escape their past sins and save themselves.</p>
        </div>
      </div>
      <div>
        <div class="card text-left">
            <v-img max-height="500" max-width="500" src="https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/lhfjaxldfojyg4bl_1603189227.jpeg?tr=w-812,h-464" alt>
            </v-img>
        </div>
        <div class="card-body">
            <h4 class="card-title">
                <a href="#">Movie title</a>
            </h4>
            <strong>PG-13</strong>
            <p class="card-text">Five young mutants, just discovering their abilities while held in a secret facility against their will, fight to escape their past sins and save themselves.</p>
        </div>
      </div>
      <div>
        <div class="card text-left">
            <v-img max-height="500" max-width="500" src="https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/lhfjaxldfojyg4bl_1603189227.jpeg?tr=w-812,h-464" alt>
            </v-img>
        </div>
        <div class="card-body">
            <h4 class="card-title">
                <a href="#">Movie title</a>
            </h4>
            <strong>PG-13</strong>
            <p class="card-text">Five young mutants, just discovering their abilities while held in a secret facility against their will, fight to escape their past sins and save themselves.</p>
        </div>
      </div>


    </div>
      
      

  </v-container>
</template>


<script>
export default {
  props: ['id']

};

</script>