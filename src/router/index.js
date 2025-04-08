import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import('../views/HomeView.vue'),
            redirect: '/infos',
            children: [
                {
                    path: 'infos',
                    name: 'infos',
                    component: () => import('../views/InfosView.vue'),
                },
                {
                    path: 'skills',
                    name: 'skills',
                    component: () => import('../views/SkillsView.vue'),
                },
                {
                    path: 'projects',
                    name: 'projects',
                    component: () => import('../views/ProjectsView.vue'),
                },
                {
                    path: 'about',
                    name: 'about',
                    component: () => import('../views/AboutView.vue'),
                },
                {
                    path: 'languages',
                    name: 'languages',
                    component: () => import('../views/LanguagesView.vue'),
                },
            ],
        },
    ],
})

export default router
