<template>
    <div>
        <h3>Hello this is random.vue</h3>

        <ul>
            <li v-for="item in items" :key="item.title">
                {{}}
            </li>
            
        </ul>


    </div>
</template>

<script>
import {secret_key } from '../movies';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vue from 'vue';



Vue.use(VueAxios,axios)

export default {
    name: 'random',

    data: () => ({
        items: [],
        selectedItem: [],
        // movieImage: [],
        // imageURL: 'https://image.tmdb.org/t/p/w300',
        // limit: 1,
    }),

    // computed: {
    //     computedSim(){
    //         return this.limit ? this.items.slice(0,this.limit) : this.items

    created () {
        var random = Math.floor(Math.random() * this.items.length);
        this.selectedItem.push(this.items[random]);
    },

    methods: {
        getDetails: function(){
    
                // var movieId = this.$route.params.id

                axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${secret_key}`)
                    .then(response => {
                    this.items=response.data.results;
                    console.log(response);
                    this.movieImage = response.data.results.poster_path
            })
        }
    },
    shuffle: function(items) {

        var currentIndex = items.length, temporaryValue, randomIndex;
        items='items';

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = items[currentIndex];
            items[currentIndex] = items[randomIndex];
            items[randomIndex] = temporaryValue;
        }
        this.items({ results: this.shuffle(response.data.results) })
        console.log(items);
}
}

// https://api.themoviedb.org/3/movie/400160/videos?api_key=b33ac6661da0977b3c9d8014bf3e1d4d&language=en-US


</script>



<style scoped>

</style>