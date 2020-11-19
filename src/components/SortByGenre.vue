<template>
    <div>
        
            <label :for="select">What is your favourite {{ select }}?</label>

            <select
                @change="$emit('change', $event.target.value)"
                :id="select"
                name="select"
            >
                <option value>-- Please select a {{ select }}</option>
                <option v-for="option in genre[0].genres" :key="option.name" :value="option">
                    {{ option.name }}
                </option>
            </select>
            

    </div>
</template>


<script>
import { mapState } from 'vuex';


export default {
        name: 'sortbygenre',

        // data() {
        //     genre: []
        // },
        
        props: {
            select: {
                type: String,
                default: 'genre',
            }, 
        },
        computed: {
         ...mapState(["genre"]),
            }
}

</script>




<style scoped>

</style>