<template>
    <div>
        <div class="wobbling-3"></div>
    </div>
</template>

<style scoped>
.wobbling-3 {
    width: 120px;
    height: 22px;
    border-radius: 40px;
    color: #514b82;
    border: 2px solid;
    position: relative;
}

.wobbling-3::before {
    content: "";
    position: absolute;
    margin: 2px;
    width: 25%;
    top: 0;
    bottom: 0;
    left: 0;
    border-radius: inherit;
    background: currentColor;
    animation: w3 1s infinite linear;
}

@keyframes w3 {
    50% {
        left: 100%;
        transform: translateX(calc(-100% - 4px))
    }
}</style>