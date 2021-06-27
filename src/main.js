import Vue from 'vue'  //import 变量 from 组件位置
import App from './App.vue'
import "./assets/css/base.css"//vs ??
import VueRouter from 'vue - router'


Vue.config.productionTip = false  //???
Vue.use(VueRouter)
import Detail from './components/Detail.vue'

var routes = [
  { path: '/detail', component: Detail }
]

const router = new VueRouter({
  mode: "hash",
  routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
