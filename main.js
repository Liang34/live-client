import App from './App'
import Vue from 'vue'
import $H from './common/request.js'
Vue.prototype.$H = $H

import store from './store/index.js'
Vue.prototype.$store = store

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	store,
    ...App
})
// app.config.globalProperties.$H = $H
// app.use(store))
app.$mount()
