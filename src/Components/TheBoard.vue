<template>
    <div id="board">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" :height="1000" :width="1000">
            <tile :x="0" :y="0" :radius="200"></tile>
            <tile :x="0" :y="346.42" :radius="200"></tile>
        </svg>
    </div>
</template>
<script>
import Tile from './Tile.vue';

export default {
    components: {
        Tile,
    },
    props: {
        
    },
    data: function() {
        return {
            
        }
    },
    mounted: function() {
        
    },
    computed: {
        
    },
    methods: {
        
    },
}
</script>