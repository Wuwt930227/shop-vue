import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/header.css'
import '@/assets/main.css'
import '@/assets/footer.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
