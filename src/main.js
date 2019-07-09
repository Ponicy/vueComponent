import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './lib/css/base.scss';
import './lib/js/hotcss.js';

// 挂载到Vue原型上
// import tip from './directive/tips/index';

// Vue.prototype.$Tips = tip;

import h5 from '../packages/H5/index.js';
console.log(h5)

Vue.use(h5)

// console.log(Vue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
