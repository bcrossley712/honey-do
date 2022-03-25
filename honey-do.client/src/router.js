import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard, authSettled } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: loadPage('LandingPage'),
    beforeEnter: authSettled
  },
  {
    path: '/group/:id/home',
    name: 'Home',
    component: loadPage('HomePage'),
    beforeEnter: authGuard
  },
  {
    path: '/group/:id/items',
    name: 'Items',
    component: loadPage('ItemsPage'),
    beforeEnter: authGuard
  },
  {
    path: '/group/:id/recipes',
    name: 'Recipes',
    component: loadPage('RecipesPage'),
    beforeEnter: authGuard
  },
  {
    path: '/group/:id/chores',
    name: 'Chores',
    component: loadPage('ChoresPage'),
    beforeEnter: authGuard
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
