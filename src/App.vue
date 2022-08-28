<script>
import EffectiveAltruismWhat from './comics/EffectiveAltruismWhat.vue';
import EffectiveAltruismWhy from './comics/EffectiveAltruismWhy.vue';
import Intro from './comics/Intro.vue';
import SydneyEvangelicalWhat from './comics/SydneyEvangelicalWhat.vue';
import SydneyEvangelicalWhy from './comics/SydneyEvangelicalWhy.vue';
import { getComicNumber, comicList } from './utils/comicNumber';
const comicNumber = getComicNumber();
export default {
    data() {
        return { comicNumber, comicList }
    },
    components: { Intro, EffectiveAltruismWhat, EffectiveAltruismWhy, SydneyEvangelicalWhat, SydneyEvangelicalWhy }
} 
</script>

<template>
    <main>
        <h1>MITT COMICS</h1>
        <Intro v-if="comicNumber == comicList.indexOf('intro')" />
        <SydneyEvangelicalWhat v-else-if="comicNumber == comicList.indexOf('sydney_evangelical_what')" />
        <SydneyEvangelicalWhy v-else-if="comicNumber == comicList.indexOf('sydney_evangelical_why')" />
        <EffectiveAltruismWhat v-else-if="comicNumber == comicList.indexOf('effective_altruism_what')" />
        <EffectiveAltruismWhy v-else-if="comicNumber == comicList.indexOf('effective_altruism_why')" />
        <div v-else>Sorry, no comic at this address.</div>
    </main>
</template>

<style>
h1 {
    text-align: center;
    font-family: monospace;
    font-weight: normal;
}

html {
    background-color: #eee;
}
</style>