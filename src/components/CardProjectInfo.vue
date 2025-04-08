<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    project: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <div v-if="project">
        <table>
            <tr>
                <th>Categorie</th>
                <td>{{ props.project.category.name }}</td>
            </tr>
        </table>

        <table>
            <tr>
                <th>Nb. Personnes</th>
                <td>{{ props.project.nbPeople }}</td>
            </tr>
        </table>

        <table>
            <tr>
                <th>Dépot</th>
                <td><a :href="props.project.link" target="_blank">Lien du projet</a></td>
            </tr>
        </table>

        <div class="project_description description">
            {{ props.project.description }}
        </div>
    </div>
</template>

<style scoped lang="scss">
.project_description {
    margin-top: 5px;
}
</style>
