import Vue from 'vue'
import App from './App'
import router from './router'

// 引入axios
import axios from 'axios'

// 设置axios的默认值
axios.default.baseURL = 'http://localhost:8888/api/private/v1/'
// axios.default.headers.Authorization = localStorage.getItem('mytoken')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
