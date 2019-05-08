import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import ContactManagement from '../pages/ContactManagement/Index.vue'
import Register from '../pages/Register/Index.vue'
import UserCenter from '../pages/UserCenter/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/contact-management',
    component: ContactManagement
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/user-center',
    component: UserCenter
  }
]

const router = new VueRouter({
  routes
})

export default router
