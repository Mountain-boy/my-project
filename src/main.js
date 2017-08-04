// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import { AjaxPlugin } from 'vux'

import Home from '@/home/home.vue'
import About from '@/about/about.vue'
import Picture from '@/picture/picture.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
Vue.use(AjaxPlugin)
Vue.use(VueRouter)


const routes = [
{
    path: '/',
    component: Home,
    children:[
        {
            path: '/home',
            component: Home,
        }
   ]
},
{
    path: '/about',
    component: About
},
{
    path: '/picture',
    component: Picture
}
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
