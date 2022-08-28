<script setup>
import Intro from './comics/Intro.vue';
import SydneyEvangelicalWhat from './comics/SydneyEvangelicalWhat.vue';
import { getComicNumber, comicList } from './utils/comicNumber';
const comicNumber = getComicNumber();
function data() {
    return { comicNumber, comicList }
}
</script>

<template>
    <main>
        <h1>MITT COMICS</h1>
        <Intro v-if="comicNumber == comicList.indexOf('intro')" />
        <SydneyEvangelicalWhat v-else-if="comicNumber == comicList.indexOf('sydney_evangelical_what')" />
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