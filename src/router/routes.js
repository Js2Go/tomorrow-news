export const tabRoutes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      name: 'home',
      title: '首页',
      icon: 'wap-home-o'
    },
    component: () => import('../views/home.vue')
  },
  {
    path: '/me',
    name: 'Me',
    meta: {
      name: 'me',
      title: '我的',
      icon: 'contact'
    },
    component: () => import('../views/me.vue')
  },
]

const routes = [
  ...tabRoutes
]

export default routes
