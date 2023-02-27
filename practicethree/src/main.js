import Vue from 'vue'
import Parent from './Parent.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Parent),
}).$mount('#app3')


