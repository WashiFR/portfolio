<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    project: {
        type: Object,
        required: true,
    },
})

defineEmits(['select'])

let name = props.project.language.shortName
    ? props.project.language.shortName
    : props.project.language.name
</script>

<template>
    <div class="project" @click="$emit('select', props.project)">
        <!--        <img class="hidden" src="img/arrows/arrow-choice.png">-->
        <p>{{ props.project.name }}</p>
        <div class="project_type">
            <div class="custom_type">
                <i
                    :class="`devicon-${props.project.language.name.toLowerCase()}-plain`"
                    :style="`background-color: ${props.project.language.color}`"
                >
                </i>
                {{ name }}
            </div>
            <span>{{ props.project.note }}</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.project {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    border-radius: 100px;
    width: 600px;
    min-height: 55px;
}

.project:hover,
.project_active {
    background-color: black;
    color: white;
    font-weight: bold;
    cursor: pointer;
}

.project img {
    position: absolute;
    left: -30px;
    width: 40px;
    height: 40px;
}

.project_type {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.project p {
    font-size: x-large;
    margin: 0 0 0 20px;
}

.project span {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #4d4d4d;
    height: 100%;
    width: 150px;
    letter-spacing: 1px;
    font-weight: 600;
    font-size: x-large;
    border-bottom-right-radius: 100px;
    border-top-right-radius: 100px;
    clip-path: polygon(21% 0, 100% 0, 100% 100%, 0% 100%);
}

.custom_type {
    display: flex;
    align-items: center;
    background-color: #58414a;
    color: white;
    border-radius: 3px;
    width: 100px;
    height: 26px;
    font-size: larger;
    font-weight: bold;
    text-transform: uppercase;
    padding-right: 20px;
    overflow: hidden;
}

.custom_type i {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 13px 0 3px;
    clip-path: polygon(0 0, 100% 0, 70% 100%, 0% 100%);
}
</style>
