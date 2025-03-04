import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';
import VueAxios from 'vue-axios';
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./index.css";
import Vuelidate from 'vuelidate';
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueAxios, axios);
Vue.use(Vuelidate);
Vue.config.productionTip = false;
new Vue({
  router: router,
  store: store,
  render: function render(h) {
    return h(App);
  }
}).$mount("#app");