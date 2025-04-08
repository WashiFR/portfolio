<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const nav = ref(null)

const routes = ['infos', 'skills', 'projects', 'about', 'languages']

function isActive(route) {
    return router.currentRoute.value.name === route
}

function setActiveClass(route) {
    return isActive(route) ? 'nav-active' : ''
}

function setImageSrc(route, number) {
    return isActive(route)
        ? `/icons/nav-icon${number}-black.png`
        : `/icons/nav-icon${number}-white.png`
}

function previousContent() {
    const currentRouteIndex = routes.indexOf(router.currentRoute.value.name)
    if (currentRouteIndex > 0) {
        router.push({ name: routes[currentRouteIndex - 1] })
    } else {
        router.push({ name: routes[routes.length - 1] })
    }
}

function nextContent() {
    const currentRouteIndex = routes.indexOf(router.currentRoute.value.name)
    if (currentRouteIndex < routes.length - 1) {
        router.push({ name: routes[currentRouteIndex + 1] })
    } else {
        router.push({ name: routes[0] })
    }
}

onMounted(() => {
    nav.value = document.querySelector('nav')

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            previousContent()
        } else if (event.key === 'ArrowRight') {
            nextContent()
        }
    })
})
</script>

<template>
    <nav>
        <img id="nav-left" class="arrow" src="/img/caret-left.png" @click="previousContent" />
        <router-link :to="{ name: 'infos' }">
            <img :class="setActiveClass(routes[0])" :src="setImageSrc(routes[0], 1)" />
        </router-link>
        <router-link :to="{ name: 'skills' }">
            <img :class="setActiveClass(routes[1])" :src="setImageSrc(routes[1], 2)" />
        </router-link>
        <router-link :to="{ name: 'projects' }">
            <img :class="setActiveClass(routes[2])" :src="setImageSrc(routes[2], 3)" />
        </router-link>
        <router-link :to="{ name: 'about' }">
            <img :class="setActiveClass(routes[3])" :src="setImageSrc(routes[3], 4)" />
        </router-link>
        <router-link :to="{ name: 'languages' }">
            <img :class="setActiveClass(routes[4])" :src="setImageSrc(routes[4], 5)" />
        </router-link>
        <img id="nav-right" class="arrow" src="/img/caret-right.png" @click="nextContent" />
    </nav>
</template>

<style lang="scss" scoped>
nav {
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 20px;

    margin-bottom: 20px;

    img {
        width: 45px;

        &:not(.arrow, .nav-active):hover {
            transform: scale(1.5);
            cursor: pointer;
        }
    }

    .nav-active {
        width: 60px;
    }

    .arrow:hover {
        cursor: pointer;
    }
}
</style>
