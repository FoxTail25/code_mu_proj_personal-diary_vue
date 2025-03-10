import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
import './assets/css/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

const app = createApp(App);
app.use(createPinia());
app.provide('bootstrap', bootstrap);
app.mount('#app');

