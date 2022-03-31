import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue';
import Menu from '../views/Menu.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/Menu',
    name: 'Menu',
    component: Menu
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
