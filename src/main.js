import Vue from 'vue'  //import 变量 from 组件位置
import App from './App.vue'
import "./assets/css/base.css"//vs ??

Vue.config.productionTip = false  //???

new Vue({
  render: h => h(App),
}).$mount('#app')
