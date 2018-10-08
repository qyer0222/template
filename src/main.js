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
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Utile)
Vue.prototype.$cl = 'nihao'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// 导航守卫,此处用来做路由拦截
router.beforeEach((to, from, next) => {
  let toLogin = to.matched.some((item) => {
    return item.meta.login
  })
  if (toLogin) {
    let info = router.app.$local.fetch('nihao')
    // 已经登录
    alert(info.login)
    if (info.login) {
      next()
    } else {
      router.push({path: '/login'})
    }
  } else {
    next()
  }
})
