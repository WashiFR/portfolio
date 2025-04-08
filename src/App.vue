<script setup>
import TheFooter from '@/components/TheFooter.vue'
import TheBackgroundContainer from '@/components/TheBackgroundContainer.vue'
</script>

<template>
    <TheBackgroundContainer />

    <img class="pokeball" src="/img/pokeball.png" />

    <RouterView />

    <TheFooter />
</template>

<style scoped>
.pokeball {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 500px;
    z-index: -1;
}
</style>
