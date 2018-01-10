// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/public.css'
import 'font-awesome/css/font-awesome.css'
import http from './http/httpResource'
/**
 * 设置项目使用的全局UI
 */
Vue.use(ElementUI)

/**
 * 设置为 false 以阻止 vue 在启动时生成生产提示。
 * @type {boolean}
 */
Vue.config.productionTip = false

/**
 * http
 */
Vue.use(http)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
