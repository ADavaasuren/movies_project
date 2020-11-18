<template>
    <div>

        <ul>
            <!-- looping through mutated data -->
            <li v-for="item in computedShuffled" :key="item.id">
                {{item.title}}
                {{item.overview}}
            </li>
            <!-- <img src="" alt="" >  -->
        </ul>

    <button block @click='getShuffled' >More random</button>

    </div>
</template>

<script>
// import {PRIVATE_KEY} from '../key';
// import axios from 'axios';
// import VueAxios from 'vue-axios';
// import Vue from 'vue';
import { mapState } from 'vuex';


// Vue.use(VueAxios,axios)

export default {
    name: 'random',
    data: () => ({
         limit: 1,
    }),
    computed: {
      ...mapState(["shuffled"]),
         computedShuffled(){
            return this.limit ? this.shuffled.slice(0,this.limit) : this.shuffled
        },
    },
    mounted() {
      this.$store.dispatch('getShuffled');
    },
}

</script>




    // mounted() {
    //      this.getPopular();
    //      this.display_image();
    // },  
  





<style scoped>

</style>