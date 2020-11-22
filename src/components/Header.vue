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

export default {
    name: 'header',
}

</script>



<style scoped>

.masthead {
  width: 100%;
  height: 60vh;
  padding: 100px;
  overflow: hidden;
  background-size: cover !important;
  background: radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 72%, rgba(0,0,0,0.65) 90%), url(https://image.tmdb.org/t/p/w1280/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg);
  color: white;
  object-fit: contain;
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