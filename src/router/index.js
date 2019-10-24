import Vue from 'vue'
import VueRouter from 'vue-router'
import Headers from '../components/Headers/Headers'
import Coupon from '../components/Headers/Coupon'
import About from '../components/Headers/About'
import Order from '../components/Headers/Order'
import Erji from '../components/Headers/erji'

Vue.use(VueRouter)

const routes = [
  {
    path: '/headers',
    name: 'Headers',
    component: Headers
  },
  {
    path: '/coupon',
    name: 'Coupon',
    component: Coupon
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
    children:[
      {
        path:"erji",
        name:"Erji",
        component:Erji
      }
    ]
  },
  {
    path:"/",
    redirect:"/headers"
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
