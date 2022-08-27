<script>
export default {
    props: {
        minimumX: {
            type: Number,
            default: 35,
        },
        minimumY: {
            type: Number,
            default: 35,
        },
        lengthX: {
            type: Number,
            default: 50,
        },
        lengthY: {
            type: Number,
            default: 65,
        },
        rotation: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            minimumX: this.minimumX,
            minimumY: this.minimumY,
            lengthX: this.lengthX,
            lengthY: this.lengthY,
            centreX: this.minimumX + this.lengthX / 2,
            centreY: this.minimumY + this.lengthY / 2,
            textX: this.minimumX + this.lengthX / 4,
            textY: this.minimumY + 3 * this.lengthY / 5,
            rotation: this.rotation,
        }
    }
}
</script>

<template>
    <g :transform="`rotate(${this.rotation} ${this.centreX} ${this.centreY})`">
        <rect class="bible-cover" :x="minimumX + 5" :y="minimumY + 5" stroke="black" :height="lengthY" :width="lengthX" rx="15"
            stroke-width="4" fill="white"></rect>
        <rect class="bible-cover" :x="minimumX" :y="minimumY" stroke="black" :height="lengthY" :width="lengthX" rx="15"
            stroke-width="4" fill="white"></rect>
        <text :x="textX" :y="textY">B</text>
    </g>
</template>