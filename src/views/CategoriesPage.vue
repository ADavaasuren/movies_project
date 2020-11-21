<template>
    <main class="container">

    <Categories />

    </main>
</template>

<script>
import Categories from '../components/Categories.vue';
import { mapState } from "vuex";


export default {

    name: 'categoriespage',
    components: {
        Categories,
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