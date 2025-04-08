<script setup>
import CardProject from '@/components/CardProject.vue'
import { projects } from '@/data/data-projects.js'
import CardProjectInfo from '@/components/CardProjectInfo.vue'
import { ref } from 'vue'

const projectChoosed = ref(null)

function isProjectChoosed() {
    return projectChoosed.value !== null
}

function onProjectSelect(project) {
    projectChoosed.value = project
}
</script>

<template>
    <div>
        <div id="projects" class="content_3">
            <CardProject
                :project="project"
                v-for="project in projects"
                :key="project.id"
                @select="onProjectSelect"
            />
        </div>

        <div id="project_info" class="project_info" v-if="isProjectChoosed">
            <CardProjectInfo :project="projectChoosed" />
        </div>
    </div>
</template>

<style scoped>
.content_3 {
    display: flex;
    flex-direction: column;
    padding: 0 80px;
    gap: 3px;
    margin-bottom: 50px;
    height: 230px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-color: #c42731 #f5f5f5;
}

.content_3::-webkit-scrollbar {
    width: 10px;
}

.content_3::-webkit-scrollbar-thumb {
    background-color: #c42731;
    border-radius: 10px;
}

.content_3::-webkit-scrollbar-track {
    background-color: #f5f5f5;
}
</style>
