import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import './assets/main.scss';
import store from './store'



new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')

