import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueWait from "vue-wait";

Vue.config.productionTip = false;
Vue.use(VueWait);

new Vue({
  router,
  store,
  wait: new VueWait({
    useVuex: true,
  }),
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
