<template>
    <div class="comic-box">
        <slot></slot>
    </div>
</template>

<style>
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