<template>
    <svg viewBox="0 0 1080 540" xmlns="<https://www.w3.org/TR/SVG/>" class="main-svg-box">
        <line x1="0" y1="80" x2="100" y2="20" stroke="black" stroke-width="5" />
        <rect x="40" y="40" width="330" height="480" rx="15" stroke="black" stroke-width="5" fill="none" />
        <rect x="390" y="40" width="330" height="480" rx="15" stroke="black" stroke-width="5" fill="none" />
        <rect x="740" y="40" width="330" height="480" rx="15" stroke="black" stroke-width="5" fill="none" />
        <slot></slot>
    </svg>
</template>
      


<style scoped>
.main-svg-box {
    width: 100%;
}
</style>
