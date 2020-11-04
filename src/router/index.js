import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from "firebase/app";
import 'firebase/app';
import 'firebase/auth';

Vue.use(VueRouter)

const routes = [
  {
    path: "/Home",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/',
    name: 'Login',
    component: function () {
      return import('../views/Login.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  if(requiresAuth) {
    firebase.auth().onAuthStateChanged( (user) => {
      if (!user) next('/')
      else next();
    })
  }else if(to.path=='/'){
    firebase.auth().onAuthStateChanged( (user) => {
      if (user) next('/home')
      else next();
    })
  } else next()
});

export default router
