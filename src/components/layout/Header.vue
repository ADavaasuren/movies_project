<template>
    <header class="header">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/details">Details</router-link> |
        <router-link to="/randomizer">Random</router-link>
      </div>
    </header>
</template>


<script>
export default {
    name: "Header"
}
</script>


<style scoped>

.header {
    background: rgb(214, 192, 182);
    color: #fff;
    text-align: center;
    padding: 2px;
}

.header a {
    color: rgb(22, 7, 65);
    padding-right: 5px;
    text-decoration: none;
}

</style>