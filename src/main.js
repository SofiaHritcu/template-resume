import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'
import firebaseConfig from './firebase/firebaseConfig'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  theme: {
    appBlue: '#3366cc',
  },
  render: h => h(App)
}).$mount('#app')
