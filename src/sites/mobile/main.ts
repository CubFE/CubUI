import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import cubui from '@/packages/cubui.vue';
createApp(App).use(router).use(cubui).mount('#app');
