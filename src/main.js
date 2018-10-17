// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import './assets/css/normalize.css'
import './assets/css/reset.css'
import './assets/css/common.css'
import './assets/font/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
import Utile from './lib/utils' // 插件
import Vuex from 'vuex'
/* eslint-disable */
import store from './vuex/store'
/* eslint-disable */
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Utile)
Vue.use(Vuex)
// Vue.prototype.$cl = 'nihao'
// 导航守卫,此处用来做路由拦截
router.beforeEach((to, from, next) => {
  let toLogin = to.matched.some((item) => {
    return item.meta.login
  })
  // 验证该页面是否需要授权登录
  if (toLogin) {
    let info = router.app.$local.fetch('loginFetch')
    // 已经登录
    if (info.login) {
      next()
    } else {
<<<<<<< HEAD
      router.push({path: '/login', query: {Rurl: to.fullPath}})
=======
      // 路由重定向
      router.push({path: '/login', query: {redirect: to.path}})
>>>>>>> [Fix] 忘记提交了
    }
  } else {
    next()
  }
})
// vue 挂载一定要在最后否则会出现问题，否则会出现路由已经启动但是无法监听的情况，因为路由已经挂载了，eslint-disable不做控制
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
