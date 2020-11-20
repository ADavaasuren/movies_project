<template>
    <div>
        <h4>this is home</h4>
        <MoviesList />
    </div>
</template>

<script>
import MoviesList from '../components/MoviesList.vue';

export default {
    name: 'homepage',
    components: {
       MoviesList
    },
}
</script>

<style scoped>

</style>