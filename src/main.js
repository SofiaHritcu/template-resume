import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BCarousel } from 'bootstrap-vue'


Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.component('b-carousel', BCarousel)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

