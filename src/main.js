// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import bootstrapVue from 'bootstrap-vue'
import PortalVue from 'portal-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueCarousel from '@chenfengyuan/vue-carousel';
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.component(VueCarousel.name, VueCarousel);
Vue.use(PortalVue);
Vue.config.productionTip = false;
Vue.use(bootstrapVue);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
