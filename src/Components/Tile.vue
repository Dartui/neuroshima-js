<template>
    <polygon :points="polygonPoints" fill="white" stroke="black" :stroke-width="strokeWidth"/>
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

        radius: {
            required: true,
            type: Number,
        },

        strokeWidth: {
            type: Number,
            default: 1,
        },
    },
    computed: {
        centerX: function() {
            return parseFloat(this.x + this.radius);
        },

        centerY: function() {
            return parseFloat(this.y + this.height);
        },

        points: function() {
            return [
                {
                    x: this.centerX - (this.radius / 2),
                    y: this.centerY - this.height,
                },
                {
                    x: this.centerX + (this.radius / 2),
                    y: this.centerY - this.height,
                },
                {
                    x: this.centerX + this.radius,
                    y: this.centerY,
                },
                {
                    x: this.centerX + (this.radius / 2),
                    y: this.centerY + this.height, 
                },
                {
                    x: this.centerX - (this.radius / 2),
                    y: this.centerY + this.height, 
                },
                {
                    x: this.centerX - this.radius,
                    y: this.centerY,
                },
                {
                    x: this.centerX - (this.radius / 2),
                    y: this.centerY - this.height,
                },
            ];
        },

        height: function() {
            return parseFloat(
                ((this.radius * Math.sqrt(3)) / 2).toFixed(2)
            );
        },

        polygonPoints: function() {
            return this.points.map((point) => {
                return `${point.x},${point.y}`;
            }).join(' ');
        },

    },
    methods: {
        
    },
}
</script>