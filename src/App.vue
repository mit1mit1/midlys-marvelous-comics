<script setup>
import Intro from './comics/Intro.vue';
import SydneyEvangelical from './comics/SydneyEvangelical.vue';
import {getComicNumber } from './utils/comicNumber';
const comic = getComicNumber();
function data() {
    return { comic }
}
</script>

<template>
    <main>
        <h1>MITT COMICS</h1>
        <Intro v-if="comic == 1" />
        <SydneyEvangelical v-else-if="comic == 2" />
        <div v-else>Sorry, no comic at this address.</div>
    </main>
</template>

<style>
h1 {
    text-align: center;
    font-family: monospace;
    font-weight: normal;
}
</style>