<script setup>
import Intro from './comics/Intro.vue';
</script>

<template>

    <main>
        <h1>MITT Comics</h1>
        <div class="comic-box">
            <Intro></Intro>
        </div>
    </main>
</template>

<style>
h1 {
    text-align: center;
}

.comic-box {
    margin-left: auto;
    margin-right: auto;
    max-width: 1050px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
}
</style>