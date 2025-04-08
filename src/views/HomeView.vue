<script setup>
import TheModel3d from '@/components/TheModel3d.vue'
import TheInfoBand from '@/components/TheInfoBand.vue'
import TheNavbar from '@/components/TheNavbar.vue'
</script>

<template>
    <main>
        <div class="left-content">
            <TheNavbar />

            <RouterView />
        </div>

        <div class="right-content">
            <TheInfoBand />

            <TheModel3d />
        </div>
    </main>
</template>

<style lang="scss" scoped>
$main-margin-top: 40px;

main {
    display: flex;
    justify-content: space-between;
    height: calc(95vh - $main-margin-top);
    width: 100%;

    margin-top: $main-margin-top;

    .right-content,
    .left-content {
        height: 100%;
    }

    .left-content {
        width: 700px;
    }

    .right-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}
</style>
