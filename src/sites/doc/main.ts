import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/sites/assets/styles/reset.scss';
import '@/sites/assets/styles/md-style.scss';
import { Hover } from './directive/hover/hover';
import '@cubfe/icons-vue/dist/style_icon.css';
import { isMobile } from '@/sites/assets/util';
if (isMobile) {
  const url = location.hash.replace('/component', '');
  location.replace('demo.html' + url);
}

createApp(App)
  .directive('hover', Hover)
  .use(router)
  .mount('#doc');
