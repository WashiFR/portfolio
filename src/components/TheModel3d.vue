<script setup>
import '@google/model-viewer'
</script>

<template>
    <model-viewer src="/model_3D/loris.glb" camera-orbit="25deg auto auto" autoplay> </model-viewer>
</template>

<style lang="scss" scoped>
model-viewer {
    height: 90%;
    width: auto;
    margin-right: 150px;
}
</style>
