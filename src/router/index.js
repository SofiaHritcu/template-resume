import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Resume from '../views/Resume.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'
import Others from '../views/Others.vue'
import EditAbout from '../views/EditAbout.vue'
import EditPortfolio from '../views/EditPortfolio.vue'
import EditResume from '../views/EditResume.vue'
import Settings from '../views/Settings.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import firebase from 'firebase'
import "firebase/storage"
import UserManagement from '../views/UserManagement.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/home/:userID',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/profile/home/:userID',
    name: 'ProfileHome',
    component: Home,
  },
  {
    path: '/profile/resume/:userID',
    name: 'ProfileResume',
    component: Resume,
  },
  {
    path: '/profile/contact/:userID',
    name: 'ProfileContact',
    component: Contact,
  },
  {
    path: '/profile/projects/:userID',
    name: 'ProfileProjects',
    component: Projects,
  },
  {
    path: '/resume/:userID',
    name: 'Resume',
    component: Resume,
    meta: { requiresAuth: true }
  },
  {
    path: '/projects/:userID',
    name: 'Projects',
    component: Projects,
    meta: { requiresAuth: true }
  },
  {
    path: '/contact/:userID',
    name: 'Contact',
    component: Contact,
    meta: { requiresAuth: true }
  },
  {
    path: '/others/:userID',
    name: 'Others',
    component: Others,
    meta: { requiresAuth: true }
  },
  {
    path: '/editabout',
    name: 'EditAbout',
    component: EditAbout,
    meta: { requiresAuth: true }
  },
  {
    path: '/editportfolio',
    name: 'EditPortfolio',
    component: EditPortfolio,
    meta: { requiresAuth: true }
  },
  {
    path: '/editresume',
    name: 'EditResume',
    component: EditResume,
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
    path: '*',
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
