import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'


Vue.use(Vuetify)

const opts = {}

export default new Vuetify(opts)


Vue.config.productionTip = false

new Vue({
    router,
    Vuetify,
    render: h => h(App),
}).$mount('#app')



