import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
//引入字体css
import '@/assets/font/font.css'
import { createPinia } from 'pinia'
const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')