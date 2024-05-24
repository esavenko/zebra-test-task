import { createApp } from 'vue';

import router from '@/router/index';
import { createPinia } from 'pinia';

import App from './App.vue';
import '@/assets/base.css';

const app = createApp(App);

app.use(router);
app.use(createPinia());

app.mount('#app');
