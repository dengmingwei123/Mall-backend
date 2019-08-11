// 引入vue
import Vue from 'vue'
// 引入element-ui
import ElementUI from 'element-ui'
// 引入element-ui的css文件
import 'element-ui/lib/theme-chalk/index.css'
// 引入根组件
import App from './App'
// 引入路由
import router from './router'
// 引入通用样式
import '@/assets/common.css'

// 引入axios
import axios from 'axios'
// 使用element-ui
Vue.use(ElementUI)

// 设置axios的默认值
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
axios.defaults.headers.Authorization = localStorage.getItem('mytoken')
// 给Vue的原型中添加axios
Vue.prototype.axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
