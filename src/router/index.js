import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import ChatRoom from '../pages/ChatRoom.vue'

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
    path: '/chatting-room',
    component: ChatRoom
  }
]

const router = new VueRouter({
  routes
})

export default router
