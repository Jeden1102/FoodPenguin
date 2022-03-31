import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import store from '@/store'
import VueCarousel from 'vue-carousel';
createApp(App).use(router,store,VueCarousel).mount('#app')
