import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/index'
import store from './store'
import messagePlugin from './utils/message.plagin'
import dateFilter from './Filters/date.filter'
import InertiaTable from 'inertia-table'
import 'materialize-css/dist/js/materialize.min'
Vue.config.productionTip = true

Vue.use(InertiaTable)
Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter ('date', dateFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')