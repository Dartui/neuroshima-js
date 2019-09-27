<template>
    <polygon :points="points" fill="white" stroke="black" :fill="color" stroke-width="2" v-on:click="onClick" />
</template>
<script>
export default {
    props: {
        x: {
            required: true,
            type: Number,
        },

        y: {
            required: true,
            type: Number,
        },
    },
    data: function() {
        return {
            color: '#fff',
        }
    },
    computed: {
        height: function() {
            return this.$root.tileHeight;
        },

        width: function() {
            return this.$root.tileWidth;
        },

        size: function() {
            return this.$root.tileSize;
        },

        _points: function() {
            return [
                {
                    x: this.x - (this.size / 2),
                    y: this.y - (this.height / 2),
                },
                {
                    x: this.x + (this.size / 2),
                    y: this.y - (this.height / 2),
                },
                {
                    x: this.x + this.size,
                    y: this.y,
                },
                {
                    x: this.x + (this.size / 2),
                    y: this.y + (this.height / 2), 
                },
                {
                    x: this.x - (this.size / 2),
                    y: this.y + (this.height / 2), 
                },
                {
                    x: this.x - this.size,
                    y: this.y,
                },
                {
                    x: this.x - (this.size / 2),
                    y: this.y - (this.height / 2),
                },
            ];
        },

        points: function() {
            return this._points.map((point) => {
                return `${point.x},${point.y}`;
            }).join(' ');
        },
    },
    methods: {
        onClick: function() {
            this.color = '#'+('000000' + (Math.random()*(1<<24)|0).toString(16)).slice(-6);
        }
    },
}
</script>