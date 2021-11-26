import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import AdminLayout from './layouts/AdminLayout.vue'
import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage.vue'

const router = createRouter({
  history: createWebHistory('/admin'),
  routes: [
    {path: '/', component: HomePage},
    {path: '/about', component: AboutPage},
  ]
})

createApp(AdminLayout).use(router).mount('#app')
