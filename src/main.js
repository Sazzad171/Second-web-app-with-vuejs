import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import vuetify from './plugins/vuetify'

import titleMixin from './mixins/titleMixins'
Vue.mixin(titleMixin)

Vue.use(Router)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify,
}).$mount('#app')
