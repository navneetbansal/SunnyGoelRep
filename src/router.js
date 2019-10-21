import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "register" */ './views/Register.vue')
    },
    {
      path: '/editor',
      name: 'create_editor',
      component: () => import(/* webpackChunkName: "editor" */ './views/CreateArticle.vue')
    },
    {
      path: '/editor/:articleSlug',
      name: 'edit_editor',
      component: () => import(/* webpackChunkName: "edit_editor" */ './views/EditArticle.vue')
    }
    ,
    {
      path: '/article/:articleSlug',
      name: 'view_article',
      component: () => import(/* webpackChunkName: "view_article" */ './views/Article.vue')
    }
  ]
})
