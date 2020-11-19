<template>
    <div>
<h4>This is random page</h4>

<pre>{{ $data }}</pre>


<main class="container" >

        <!-- <section class="image" :style="`background: no-repeat center center`">
                <img :src="`https://image.tmdb.org/t/p/w300/${shuffled.poster_path}`" />
        </section> -->

        <section class="details">
            <h1>{{ shuffled.title }} </h1>
            <p>{{ shuffled.overview }}</p>
        </section>
</main>

        <!-- <ul>
            <!looping through mutated data -->
            <!-- <li v-for="item in computedShuffled" :key="item.id">
                {{computedShuffled.title}}
                {{item.overview}} -->
            <!-- </li> -->
        <!-- </ul> -->

    <button block @click='getShuffled' >More random</button>

    </div>
</template>

<script>
// import { mapState } from 'vuex';

export default {
    name: 'random',
    data() {
        return {
        id: this.$route.params.id
        }
        //  limit: 1,
    },

    computed: {
    //   ...mapState(["shuffled"]),
       shuffled() {
            // return this.limit ? this.shuffled.slice(0,this.limit) : this.shuffled
           return this.$store.state.shuffled.find(mov => mov.id == this.$route.params.id)
        }
    },
    mounted() {
      this.$store.dispatch('getShuffled');
    },
}

</script>






<style scoped>

</style>