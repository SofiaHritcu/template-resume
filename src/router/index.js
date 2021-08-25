import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Edit from '../views/Edit.vue'
import Settings from '../views/Settings.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import ResetPassword from '../views/ResetPasword.vue'
import firebase from 'firebase'
import "firebase/storage"
import UserManagement from '../views/UserManagement.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit,
    meta: { requiresAuth: true }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: { requiresAuth: true }
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/usermanagement',
    name: 'UserManagement',
    component: UserManagement
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Load user
    firebase.auth().onAuthStateChanged(user => {
      // If user obj does not exist --> redirect to login page
      if (!user) {
        next({ name: 'Login' });
      } else {
        next();
      }
    });
  } else {
    next();
  }
})

export default router
