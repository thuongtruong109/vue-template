import { createRouter, createWebHistory } from 'vue-router'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,

  // uncomment the following lines to use manual routes
  //   routes: [
  //     {
  //       path: '/',
  //       name: 'home',
  //       component: () => import('../pages/home.vue'),
  //     },
  //     { path: '/:path(.*)', component: () => import('../pages/not-found.vue') },
  //     {
  //       path: '/about',
  //       name: 'about',
  //       component: () => import('../pages/about.vue'),
  //     },
  //   ],
})

if (import.meta.hot) {
  handleHotUpdate(router)
}

export default router
