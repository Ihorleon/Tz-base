import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/index'
import store from './store'
import messagePlugin from './utils/message.plagin'
import dateFilter from './Filters/date.filter'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


Vue.config.productionTip = true
Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter ('date', dateFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
