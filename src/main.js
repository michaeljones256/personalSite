import Vue from 'vue'
import App from './App.vue'
import router from './router/index' //import router.js into main.js

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router //added router instance
}).$mount('#app')