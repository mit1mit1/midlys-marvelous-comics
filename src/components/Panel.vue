<template>
    <svg viewBox="0 0 540 540" xmlns="<https://www.w3.org/TR/SVG/>" class="panel">
        <line x1="0" y1="80" x2="100" y2="20" stroke="black" stroke-width="5" />
        <rect x="30" y="30" width="480" height="480" rx="15" stroke="black" stroke-width="5" fill="none" />
        <slot></slot>
    </svg>
</template>
      


<style scoped>
.panel {
    max-width: 350px;
    min-width: 290px;
    display: inline-block;
}
</style>
