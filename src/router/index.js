import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Admin from '../views/Admin.vue'
import Projects from '../views/Projects.vue'

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
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
]

const router = new VueRouter({
  routes
})

export default router
