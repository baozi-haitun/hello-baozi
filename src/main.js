import Vue from 'vue'  //import 变量 from 组件位置
import "./assets/css/base.css"//vs ??
import VueRouter from 'vue-router'


Vue.config.productionTip = false  //???
Vue.use(VueRouter)
import Detail from './view/Detail.vue'
import Index from './view/Index.vue'
import App from './App.vue'


var routes = [
  { path: '/', component: Index },
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
