<template>
    <main class="container restaurant">

        <div class="restaurantheading">
            
           <SortByGenre @change="selectedMovie = $event" />
        <pre>{{ $data }}</pre>
        </div>

    <Categories />

    </main>
</template>

<script>
import Categories from '../components/Categories.vue';
import SortByGenre from '../components/SortByGenre';
import { mapState } from "vuex";


export default {

    name: 'categoriespage',
    components: {
        Categories,
        SortByGenre
    },
    
    data() {
        return {
            selectedMovie: '',
        };    
    },
    computed: {
        ...mapState(["moviedata"]),
        filteredGenres() {
            if (this.selectedMovie) {
                return this.moviedata.filter(el => {
                    let name = el.name.toLowerCase()
                    return name.includes(this.SelectedMovie);
                });
            }
            return this.moviedata;
        }
    } 
}

</script>

<style lang="scss" scoped>

</style>