import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//buefy
import buefy from 'buefy'
import 'buefy/dist/buefy.css'
//element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/app.css'
Vue.use(buefy)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
