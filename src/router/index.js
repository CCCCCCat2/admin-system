import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import ChatRoom from '../pages/ChatRoom.vue'
import ContactManagement from '../pages/ContactManagement/Index.vue'

Vue.use(VueRouter)

const routes = [ {
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
},
{
  path: '/contact-management',
  component: ContactManagement
}
]

const router = new VueRouter({
  routes
})

export default router
