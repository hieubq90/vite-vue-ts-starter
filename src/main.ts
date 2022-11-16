import { createApp } from 'vue'
// import { createHead } from '@vueuse/head'
import { createRouter, createWebHistory } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'

import 'uno.css'
import '@/assets/styles/main.scss'

App.name = 'App'
const routes = setupLayouts(generatedRoutes)

const app = createApp(App)
// const head = createHead()
const router = createRouter({
  history: createWebHistory(),
  routes,
})

// register all directives
// directives(app)

// app.use(head)
app.use(router)
app.mount('#app')
