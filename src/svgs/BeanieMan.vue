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
            default: 100,
        },
        lengthY: {
            type: Number,
            default: 400,
        },
    },
    data() {
        const headX = this.minimumX + this.lengthX / 10;
        const headY = this.minimumY + this.lengthY / 5;
        const headHeight = this.lengthY / 5;
        const headWidth = this.lengthX / 10 * 8;
        const headCentreX = headX + headWidth / 2;
        const beanieFoldHeight = this.lengthY / 15;
        const beanieFoldY =  headY;
        const beanieStripeHeight = beanieFoldHeight / 5;
        return {
            headX,
            headY,
            headWidth,
            headHeight,
            beanieSquareX: headX + headWidth / 2,
            beanieFoldX: this.minimumX + this.lengthX / 15,
            beanieFoldY,
            beanieStripe1Y: beanieFoldY + beanieStripeHeight,
            beanieStripe2Y: beanieFoldY + beanieStripeHeight * 3,
            beanieFoldHeight,
            beanieStripeHeight,
            beanieFoldWidth: this.lengthX / 15 * 13,
            beanieEllipseRadiusX: this.lengthX / 15 * 11 / 2,
            beanieCentreX: headCentreX,
            beanieEllipseCentreY: beanieFoldY,
            beanieEllipseRadiusY: beanieFoldHeight * 13 / 20,
            bodyX1: headCentreX,
            bodyX2: headCentreX,
            bodyY1: headY + headHeight,
            bodyY2: headY + headHeight + this.lengthY / 5 * 2,
            // beanieSquareY: 20,
            // beanieSquareWidth: 16,

        }
    }
}
</script>

<template>
    <rect :x="headX" :y="headY" stroke="black" :height="headHeight" :width="headWidth" rx="15" stroke-width="2"
        fill="transparent">
    </rect>
    <rect :x="beanieFoldX" :y="beanieFoldY" :height="beanieFoldHeight" :width="beanieFoldWidth" rx="8" fill="yellow"></rect>
    <ellipse :cx="beanieCentreX" :cy="beanieEllipseCentreY" :rx="beanieEllipseRadiusX" :ry="beanieEllipseRadiusY" fill="yellow"></ellipse>
    <rect :x="beanieFoldX" :y="beanieStripe1Y" :height="beanieStripeHeight" :width="beanieFoldWidth" rx="2" fill="black"></rect>
    <rect :x="beanieFoldX" :y="beanieStripe2Y" :height="beanieStripeHeight" :width="beanieFoldWidth" rx="2" fill="black"></rect>
    <!-- <rect :x="beanieSquareX" :y="beanieSquareY" :width="beanieSquareWidth" :height="beanieSquareWidth"
        :transform="`rotate(45 ${beanieSquareX + beanieSquareWidth / 2} ${beanieSquareY + beanieSquareWidth / 2})`"
        fill="black">
    </rect> -->
    <line :x1="bodyX1" :y1="bodyY1" :x2="bodyX2" :y2="bodyY2" stroke-width="2" stroke="black"></line>
</template>