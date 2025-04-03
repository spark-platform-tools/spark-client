import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: () => import('../views/LandingPage.vue'),
      meta: {
        title: 'Spark',
      },
    },
    {
      path: '/signin',
      name: 'Signin',
      component: () => import('../views/Auth/SigninPage.vue'),
      meta: {
        title: 'Signin',
      },
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../views/Auth/SignupPage.vue'),
      meta: {
        title: 'Signup',
      },
    },
    {
      path: '/documentation',
      name: 'Documentation',
      component: () => import('../views/Docs/DocPage.vue'),
      meta: {
        title: 'Documentation',
      },
    },
    {
      path: '/price',
      name: 'Price',
      component: () => import('../views/PricePage.vue'),
      meta: {
        title: 'Price',
      },
    },
  ],
})

export default router

router.beforeEach((to, from, next) => {
  document.title = `Vue.js ${to.meta.title} | Spark Project`
  next()
})
