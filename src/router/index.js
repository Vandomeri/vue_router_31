import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/new',
      name: 'new',
      component: () => import('../views/NewPage.vue')
    },
    {
      path: '/products',
      component: () => import('../views/ProductsPage.vue')
    },
    {
      path: '/product/new-collection/discount/:id',
      name: 'discountCollection',
      component: () => import('../views/ProductPage.vue')
    },
    {
      path: '/help',
      component: () => import('../views/HelpPage.vue'),
      children: [
        {
          path: 'delivery',
          component: () => import('../views/HelpDeliveryPage.vue')
        },
        {
          path: 'guarantee',
          component: () => import('../views/HelpGuaranteePage.vue')
        },
        {
          path: 'service',
          component: () => import('../views/HelpServicePage.vue')
        },
      ]
    },

  ],
})

export default router
