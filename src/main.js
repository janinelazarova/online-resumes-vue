import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import Autocomplete from '@trevoreyre/autocomplete-vue'
import '@trevoreyre/autocomplete-vue/dist/style.css'

axios.defaults.baseURL = 
  process.env.NODE_ENV === "development" ? "https://bit-please-team-api.herokuapp.com" : "/"

Vue.use(Autocomplete)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
