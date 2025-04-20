import { createRouter, createWebHistory } from 'vue-router'
import headerall from "@/components/header/header-all.vue"
import mainone from '@/components/main/main-one.vue'

const routes = [
  {
    path: '/',
    components: {
      header: headerall,
      main: mainone
    }
  },
  {
    path: "/cheap-phone",
    components: {
      header: headerall,
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
