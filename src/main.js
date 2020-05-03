// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import ElementUI from 'element-ui';
import './assets/styles/reset.css'
import './assets/styles/border.css'
import 'swiper/css/swiper.css'
import 'element-ui/lib/theme-chalk/index.css';
import moment from 'moment'
import store from './store/index.js'
import './assets/icon/iconfont.css'


Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
Vue.prototype.$moment = moment

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
