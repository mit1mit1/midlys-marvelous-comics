<script setup>
import Intro from './comics/Intro.vue';
const comicParam = new URLSearchParams(window.location.search).get('comic');
let comic = "";
if (comicParam?.toLowerCase() === "intro" || parseInt(comicParam) === 1 || !comicParam) {
    comic = 1;
}
function data() {
    return { comic }
}
</script>

<template>
    <main>
        <h1>MITT COMICS</h1>
        <Intro v-if="comic == 1" />
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