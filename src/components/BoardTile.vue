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
            const baseX = this.$root.boardCenterX;
            const tileX = this.r * this.width - this.r * (this.width / 4);

            return baseX + tileX;
        },

        y: function() {
            const baseY = this.$root.boardCenterY + this.verticalOffset;
            const tileY = this.q * this.height - this.r * (this.height / 2);

            return baseY + tileY;
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