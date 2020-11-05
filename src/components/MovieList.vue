<template>
    <div>
        <h1>Movie List</h1>
        <table border="1px">
            <tr>
                <td>Name</td>
                <td>Popularity</td>
                <td>First Air Date</td>
            </tr>
            <tr v-for="item in list" v-bind:key="item.id">
                <td>{{item.original_name}}</td>
                <td>{{item.popularity}}</td>
                <td>{{item.first_air_date}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios,axios)

export default {
    name: "MovieList",
    data()
    {
        return{list:undefined}
    },
    mounted()
    {
        Vue.axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=b33ac6661da0977b3c9d8014bf3e1d4d')
        .then((resp) =>{
            this.list=resp.data.results;
            console.warn(resp.data.results)
        })
    }
}
</script>