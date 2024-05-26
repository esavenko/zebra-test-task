import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/zebra-test-task/',
            name: 'Home',
            component: () => import('@/pages/AppPage.vue')
        }
    ],
});

export default router;
