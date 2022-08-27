<script>
import Beanie from "./Beanie.vue";
import Man from "./Man.vue";
import { availableLimbPositions } from "../limbPositions";


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
        limbPositions: {
            default: availableLimbPositions.handsDown,
        },
        beanieColor: {
            type: String,
            default: "yellow",
        },
        beanieStripeColor: {
            type: String,
            default: "black",
        }
    },
    data() {
        const headY = this.minimumY + this.lengthY / 5;
        const beanieFoldHeight = this.lengthY / 15;
        const beanieFoldY = headY;
        return {
            beanieFoldX: this.minimumX + this.lengthX / 40,
            beanieFoldY,
            beanieFoldHeight,
            beanieFoldWidth: this.lengthX / 40 * 38,
            headY,
        };
    },
    components: { Beanie, Man }
}
</script>

<template>
    <Man :minimumY="headY" :minimumX="minimumX" :lengthX="lengthX" :lengthY="lengthY" :limbPositions="limbPositions" />
    <Beanie :foldX="beanieFoldX" :foldY="beanieFoldY" :foldWidth="beanieFoldWidth" :foldHeight="beanieFoldHeight"
        :stripeColor="beanieStripeColor" :baseColor="beanieColor" />
</template>