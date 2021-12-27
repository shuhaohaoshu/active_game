import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/good_luck',
    name: 'good_luck',
    component: () => import('../views/good_luck.vue'),
  },{
    path: '/koi_lucky_draw',
    name: 'koi_lucky_draw',
    component: () => import('../views/koi_lucky_draw.vue'),
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
