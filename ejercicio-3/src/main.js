import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import VAnimateCss from "v-animate-css";

Vue.use(Buefy);
Vue.use(VAnimateCss);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
