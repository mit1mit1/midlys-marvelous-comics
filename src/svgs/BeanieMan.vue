<script>
import { limbPositions } from "../limbPositions";
import Beanie from "./Beanie.vue";

const getLineEnd = (x1, y1, lineXPercent, lineYUp, lineLength) => {
    const x2 = x1 + lineXPercent * lineLength;
    const y2 = y1 + Math.sqrt(1 - lineXPercent * lineXPercent) * lineLength * (lineYUp ? -1 : 1);
    return [x2, y2]
}


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
        expression: {
            type: String,
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
        const headX = this.minimumX + this.lengthX / 10;
        const headY = this.minimumY + this.lengthY / 5;
        const headHeight = this.lengthY / 5;
        const headWidth = this.lengthX / 10 * 8;
        const headCentreX = headX + headWidth / 2;
        const beanieFoldHeight = this.lengthY / 15;
        const beanieFoldY = headY;
        const bodyLength = this.lengthY / 10 * 3;
        const bodyTopY = headY + headHeight;
        const bodyY2 = bodyTopY + bodyLength;
        const upperArmLength = bodyLength * 0.51;
        const lowerArmLength = bodyLength * 0.51;
        const upperLegLength = bodyLength * 0.58;
        const lowerLegLength = bodyLength * 0.58;
        const handLength = bodyLength * 0.14;
        const upperArmX1 = headCentreX;
        const upperArmY1 = bodyTopY + 0.26 * bodyLength;
        const { rightArmPosition, leftArmPosition, rightLegPosition, leftLegPosition } = limbPositions.hasOwnProperty(this.expression) ? { ...limbPositions[this.expression] } : { ...limbPositions["handsDown"] };
        const [rightUpperArmX2, rightUpperArmY2] = getLineEnd(upperArmX1, upperArmY1, rightArmPosition.elbowXPercent, rightArmPosition.elbowYUp, upperArmLength);
        const [leftUpperArmX2, leftUpperArmY2] = getLineEnd(upperArmX1, upperArmY1, leftArmPosition.elbowXPercent, leftArmPosition.elbowYUp, upperArmLength);
        const [rightLowerArmX2, rightLowerArmY2] = getLineEnd(rightUpperArmX2, rightUpperArmY2, rightArmPosition.wristXPercent, rightArmPosition.wristYUp, lowerArmLength);
        const [leftLowerArmX2, leftLowerArmY2] = getLineEnd(leftUpperArmX2, leftUpperArmY2, leftArmPosition.wristXPercent, leftArmPosition.wristYUp, lowerArmLength);
        const [rightHandX2, rightHandY2] = getLineEnd(rightLowerArmX2, rightLowerArmY2, rightArmPosition.fingertipXPercent, rightArmPosition.fingertipYUp, handLength);
        const [leftHandX2, leftHandY2] = getLineEnd(leftLowerArmX2, leftLowerArmY2, leftArmPosition.fingertipXPercent, leftArmPosition.fingertipYUp, handLength);
        const [rightUpperLegX2, rightUpperLegY2] = getLineEnd(headCentreX, bodyY2, rightLegPosition.kneeXPercent, rightLegPosition.kneeYUp, upperLegLength);
        const [leftUpperLegX2, leftUpperLegY2] = getLineEnd(headCentreX, bodyY2, leftLegPosition.kneeXPercent, leftLegPosition.kneeYUp, upperLegLength);
        const [rightLowerLegX2, rightLowerLegY2] = getLineEnd(rightUpperLegX2, rightUpperLegY2, rightLegPosition.ankleXPercent, rightLegPosition.ankleYUp, lowerLegLength);
        const [leftLowerLegX2, leftLowerLegY2] = getLineEnd(leftUpperLegX2, leftUpperLegY2, leftLegPosition.ankleXPercent, leftLegPosition.ankleYUp, lowerLegLength);
        return {
            headX,
            headY,
            headWidth,
            headHeight,
            beanieFoldX: this.minimumX + this.lengthX / 40,
            beanieFoldY,
            beanieFoldHeight,
            beanieFoldWidth: this.lengthX / 40 * 38,
            bodyX1: headCentreX,
            bodyX2: headCentreX,
            bodyY1: bodyTopY,
            bodyY2,
            upperArmX1,
            upperArmY1,
            rightUpperArmX2,
            rightUpperArmY2,
            leftUpperArmX2,
            leftUpperArmY2,
            rightLowerArmX2,
            rightLowerArmY2,
            leftLowerArmX2,
            leftLowerArmY2,
            rightHandX2,
            rightHandY2,
            leftHandX2,
            leftHandY2,
            rightUpperLegX2,
            rightUpperLegY2,
            leftUpperLegX2,
            leftUpperLegY2,
            rightLowerLegX2,
            rightLowerLegY2,
            leftLowerLegX2,
            leftLowerLegY2,
        };
    },
    components: { Beanie }
}
</script>

<template>
    <rect class="stick-head" :x="headX" :y="headY" stroke="black" :height="headHeight" :width="headWidth" rx="15"
        stroke-width="2" fill="transparent">
    </rect>
    <Beanie :foldX="beanieFoldX" :foldY="beanieFoldY" :foldWidth="beanieFoldWidth" :foldHeight="beanieFoldHeight"
        :stripeColor="beanieStripeColor" :baseColor="beanieColor" />
    <line stroke-linejoin="round" class="stick-torso" :x1="bodyX1" :y1="bodyY1" :x2="bodyX2" :y2="bodyY2"
        stroke-width="2" stroke="black">
    </line>
    <line stroke-linejoin="round" class="stick-upper-arm-right" :x1="upperArmX1" :y1="upperArmY1" :x2="rightUpperArmX2"
        :y2="rightUpperArmY2" stroke-width="2" stroke="black"></line>
    <line stroke-linejoin="round" class="stick-upper-arm-left" :x1="upperArmX1" :y1="upperArmY1" :x2="leftUpperArmX2"
        :y2="leftUpperArmY2" stroke-width="2" stroke="black"></line>
    <line stroke-linejoin="round" class="stick-lower-arm-right" :x1="rightUpperArmX2" :y1="rightUpperArmY2"
        :x2="rightLowerArmX2" :y2="rightLowerArmY2" stroke-width="2" stroke="black"></line>
    <line stroke-linejoin="round" class="stick-lower-arm-left" :x1="leftUpperArmX2" :y1="leftUpperArmY2"
        :x2="leftLowerArmX2" :y2="leftLowerArmY2" stroke-width="2" stroke="black"></line>
    <line stroke-linejoin="round" class="stick-hand-right" :x1="rightLowerArmX2" :y1="rightLowerArmY2" :x2="rightHandX2"
        :y2="rightHandY2" stroke-width="2" stroke="black"></line>
    <line stroke-linejoin="round" class="stick-hand-left" :x1="leftLowerArmX2" :y1="leftLowerArmY2" :x2="leftHandX2"
        :y2="leftHandY2" stroke-width="2" stroke="black"></line>
    <line stroke-linejoin="round" class="stick-upper-leg-right" :x1="bodyX1" :y1="bodyY2" :x2="rightUpperLegX2"
        :y2="rightUpperLegY2" stroke-width="2" stroke="black"></line>
    <line stroke-linejoin="round" class="stick-upper-leg-left" :x1="bodyX1" :y1="bodyY2" :x2="leftUpperLegX2"
        :y2="leftUpperLegY2" stroke-width="2" stroke="black"></line>
    <line stroke-linejoin="round" class="stick-lower-leg-right" :x1="rightUpperLegX2" :y1="rightUpperLegY2"
        :x2="rightLowerLegX2" :y2="rightLowerLegY2" stroke-width="2" stroke="black"></line>
    <line stroke-linejoin="round" class="stick-lower-leg-left" :x1="leftUpperLegX2" :y1="leftUpperLegY2"
        :x2="leftLowerLegX2" :y2="leftLowerLegY2" stroke-width="2" stroke="black"></line>
</template>