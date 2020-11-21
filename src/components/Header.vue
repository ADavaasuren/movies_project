<template>
    <div>

        <section class="masthead" role="img" aria-label="Image Description">
            <h1>
                Popular Movies
            </h1>
        </section>

    </div>
</template>

<script>
// import axios from 'axios';


export default {
    name: 'header',

    // data() {

    //     return {
    //         limit: 1,
    //         images: []
    //     }
    // },

    // computed: {
    //   shuffledImages() {
    //         return this.limit ? this.images.slice(0,this.limit) : this.images
    //     },
    // },
    
    // mounted() {
    //     this.getImages();
    // },
    
    // methods: {
    //     getImages: function() {

    //             axios.get(`https://image.tmdb.org/t/p/w342/${movie.poster_path}`)
    //                  .then((response) => {
    //                      const _ = require('lodash');
    //                      let shuffled = _.shuffle(response.data.results);
    //                      console.log(shuffled);
    //                      this.items = shuffled;
    //                     })
    //     }
    // }
}

</script>



<style scoped>
.masthead {
  width: 100%;
  height: 80vh; 
  padding: 40px;
  overflow: hidden;
  background-size: cover !important;
  background: radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 72%, rgba(0,0,0,0.65) 100%), url(https://image.tmdb.org/t/p/w1280/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg) no-repeat center center scroll;
}

h1 {
  font-style: normal;
  font-weight: bold;
  color: #eee;
  font-size: 8vmin;
  letter-spacing: 0.03em;
  line-height: 1;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 146px;
}
</style>