<template>
    <div>
        <pre>{{ $data }}</pre>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: this.$route.params.id
            };
        }
    };
</script>

<style scoped>

</style>