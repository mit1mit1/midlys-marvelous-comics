<script>

export default {
    props: {
        foldX: {
            type: Number,
        },
        foldY: {
            type: Number,
        },
        foldWidth: {
            type: Number,
        },
        foldHeight: {
            type: Number,
        },
        stripeColor: {
            type: String,
        },
        baseColor: {
            type: String,
        },
    },
    data() {
        const stripeHeight = this.foldHeight / 5;

        return {
            foldX: this.foldX,
            foldY: this.foldY,
            foldWidth: this.foldWidth,
            foldHeight: this.foldHeight,
            beanieCentreX: this.foldX + this.foldWidth / 2,
            ellipseCentreY: this.foldY + this.foldHeight * 2 / 20,
            ellipseRadiusY: this.foldHeight * 12 / 20,
            ellipseRadiusX: this.foldWidth * 8 / 19,
            stripeHeight,
            stripe1Y: this.foldY + stripeHeight,
            stripe2Y: this.foldY + stripeHeight * 3,
        }
    }
}
</script>

<template>

    <rect class="beanie-fold" :x="foldX" :y="foldY" :height="foldHeight" :width="foldWidth" rx="8" :fill="baseColor">
    </rect>
    <ellipse class="beanie-ellipse" :cx="beanieCentreX" :cy="ellipseCentreY" :rx="ellipseRadiusX" :ry="ellipseRadiusY"
        :fill="baseColor"></ellipse>
    <rect class="beanie-stripe" :x="foldX" :y="stripe1Y" :height="stripeHeight" :width="foldWidth" rx="2"
        :fill="stripeColor"></rect>
    <rect class="beanie=stripe" :x="foldX" :y="stripe2Y" :height="stripeHeight" :width="foldWidth" rx="2"
        :fill="stripeColor"></rect>
</template>