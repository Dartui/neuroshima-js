<template>
    <tile v-if="shouldShow" :x="x" :y="y"></tile>
</template>
<script>
import Tile from './Tile.vue';

export default {
    components: {
        Tile
    },

    props: {
        r: {
            required: true,
            type: Number,
        },

        q: {
            required: true,
            type: Number,
        },
    },

    computed: {
        size: function() {
            return this.$root.tileSize;
        },

        height: function() {
            return this.$root.tileHeight;
        },

        width: function() {
            return this.$root.tileWidth;
        },

        boardSize: function() {
            return this.$root.boardSize;
        },

        verticalOffset: function() {
            return this.height / 2 * (this.boardSize - 2)
        },

        x: function() {
            const centerX = this.$root.documentWidth / 2;
            const centerOffset = (this.boardSize - 1) * 1.5 * this.size;
            const tileX = this.r * this.width * 0.75;

            return centerX - centerOffset + tileX;
        },

        y: function() {
            const centerY = this.$root.documentHeight / 2;
            const centerOffset = (this.boardSize - 1) * this.height / 2;
            // const baseY = this.$root.boardCenterY + this.verticalOffset;
            // const baseY = 0;
            const tileY = this.q * this.height - this.r * (this.height / 2);

            return centerY - centerOffset + tileY;
        },

        shouldShow: function() {
            if (this.q >= this.boardSize + this.r) {
                return false;
            }

            if (this.r >= this.boardSize + this.q) {
                return false;
            }

            return true;
        }
    }
}
</script>