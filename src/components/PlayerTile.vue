<template>
    <tile :x="x" :y="y"></tile>
</template>
<script>
import Tile from './Tile.vue';

export default {
    components: {
        Tile,
    },
    props: {
        index: {
            required: true,
            type: Number,
        }
    },
    data: function() {
        return {
            
        }
    },
    mounted: function() {
        
    },
    computed: {
        x: function() {
            return 1 + this.$root.tileWidth / 2 + (this.$root.tileWidth + 20) * this.index;
        },

        y: function() {
            return 1 + this.$root.tileHeight / 2;
        }
    },
    methods: {
        
    },
}
</script>