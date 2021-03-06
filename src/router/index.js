import { createRouter, createWebHashHistory  } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue';
import Menu from '../views/Menu.vue';
import Checkout from '../views/Checkout.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title:"Restaurant",
    }
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact,
    meta:{
      title:"Contact",
    }
  },
  {
    path: '/Menu',
    name: 'Menu',
    component: Menu,
    meta:{
      title:"Menu",
    }
  },
  {
    path: '/Checkout',
    name: 'Checkout',
    component: Checkout,
    meta:{
      title:"Checkout",
    }
  },
]

const router = createRouter({
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
  history: createWebHashHistory(),
  routes,
  mode:"hash"
})
router.beforeEach((to,from,next)=>{
  document.title = `${to.meta.title} | Food Penguin`;
  return next();
})
export default router
