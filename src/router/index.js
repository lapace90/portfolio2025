import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProjectDetail from '../views/ProjectDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/projects/:slug',
    name: 'project-detail',
    component: ProjectDetail,
    props: true,
  },
  // Fallback : toute URL inconnue redirige vers la home
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Retour à la position sauvegardée (back/forward navigateur)
    if (savedPosition) return savedPosition
    // Scroll vers une ancre si présente dans l'URL
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    // Sinon scroll en haut
    return { top: 0 }
  },
})

export default router
