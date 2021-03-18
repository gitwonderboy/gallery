import '@morioh/v-lightbox/dist/lightbox.css';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Lightbox from '@morioh/v-lightbox'

Vue.use(Lightbox);
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
