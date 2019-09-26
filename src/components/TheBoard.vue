<template>
    <svg id="board" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <template v-for="(row, r) in dimension">
            <board-tile
                v-for="(column, q) in dimension"
                :key="`${r}-${q}`"
                :r="r"
                :q="q"
            ></board-tile>
        </template>
    </svg>
</template>
<script>
import BoardTile from './BoardTile.vue';

export default {
    components: {
        BoardTile,
    },

    computed: {
        boardHeight: function() {
            return this.$root.boardHeight;
        },

        boardWidth: function() {
            return this.$root.boardWidth;
        },

        dimension: function() {
            return new Array(this.$root.boardSize * 2 - 1);
        }
    }
}
</script>