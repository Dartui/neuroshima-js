<template>
    <div class="tray" :style="inlineStyles" v-bind:class="classes" v-on:click="click" v-on-clickaway="clickAway">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <player-tile v-for="(tmp, index) in new Array(3)" :key="index" :index="index"></player-tile>
        </svg>
    </div>
</template>
<script>
import PlayerTile from './PlayerTile.vue';
import { mixin as clickaway } from 'vue-clickaway';

export default {
    components: {
        PlayerTile,
    },
    mixins: [
        clickaway,
    ],
    props: {
        
    },
    data: function() {
        return {
            faded: false,
        }
    },
    mounted: function() {
        
    },
    computed: {
        width: function() {
            return (this.$root.tileWidth) * 3 + (20 * 2) + 4;
        },

        height: function() {
            return this.$root.tileHeight + 4;
        },

        inlineStyles: function() {
            return {
                width: `${this.width}px`,
                height: `${this.height}px`,
            }
        },

        classes: function() {
            return {
                faded: this.faded,
            }
        }
    },
    methods: {
        click: function() {
            this.faded = false;
        },

        clickAway: function() {
            this.faded = !this.faded;
        }
    },
}
</script>