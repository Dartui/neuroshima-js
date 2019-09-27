import TheBoard from './components/TheBoard.vue';
import PlayerTray from './components/PlayerTray.vue';

const neuroshima = new Vue({
    el: '#neuroshima',
    components: {
        TheBoard,
        PlayerTray,
    },
    data: {
        documentWidth: 0,
        documentHeight: 0,
        boardSize: 3,
    },
    computed: {
        tileSize: function () {
            const maxSizeFromWidth = this.documentWidth / (3 * this.boardSize - 1)
            const maxSizeFromHeight = this.documentHeight / ((2 * this.boardSize) - 1) / Math.sqrt(3);

            return Math.min(maxSizeFromWidth, maxSizeFromHeight) * 0.80;
        },

        tileWidth: function () {
            return this.tileSize * 2;
        },

        tileHeight: function () {
            return this.tileSize * Math.sqrt(3);
        },

        boardWidth: function () {
            return this.tileWidth * this.boardSize + this.tileSize * (this.boardSize - 1);
        },

        boardHeight: function () {
            return this.tileHeight * (this.boardSize * 2 - 1);
        },

        boardCenterX: function () {
            return this.documentWidth / 2 - this.boardWidth / 2;
        },

        boardCenterY: function () {
            return this.documentHeight / 2 - this.boardHeight / 4;
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            window.addEventListener('resize', this.onResize);
        });

        this.onResize();
    },
    beforeDestroy: function () {
        window.removeEventListener('resize', this.onResize);
    },
    methods: {
        onResize: _.debounce(function () {
            this.documentWidth = window.innerWidth;
            this.documentHeight = window.innerHeight;
        }, 50),
    }
});