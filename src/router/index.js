import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Admin from '../views/Admin.vue'
import Account from '../views/Account.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },{
    path: '/account',
    name: 'Account',
    component: Account
  },
]

const router = new VueRouter({
  routes
})

export default router
