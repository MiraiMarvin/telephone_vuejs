import { createRouter, createWebHashHistory } from 'vue-router'
import ClavierView from '../views/ClavierView.vue'
import ContactView from '../views/ContactView.vue'
import JournalView from '../views/JournalView.vue'

const routes = [
  
  {
    path: '/clavier',
    name: 'clavier',
    component: ClavierView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/journal',
    name: 'journal',
    component: JournalView
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
