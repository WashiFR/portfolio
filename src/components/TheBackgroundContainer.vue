<script setup></script>

<template>
    <div class="bg-container">
        <div class="bg-dark-red"></div>
        <div class="bg-red"></div>
    </div>
</template>

<style lang="scss" scoped>
@mixin bg($color, $width) {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: $width;
    z-index: -1;

    background-color: $color;
}

.bg-red {
    @include bg(#e53142, 700px);
}

.bg-dark-red {
    @include bg(#c42731, 800px);
}
</style>
