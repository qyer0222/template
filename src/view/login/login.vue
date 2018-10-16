<template>
    <div class="login">
      这里是登陆页面
      <button @click="toLogin">一键登录</button>
      <div>
        vuex
        <div>
         {{count}}
        </div>
        <div>
          <span @click="decrement">-</span>
          <span @click="increment">+</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {
    console.log(this.$store.state.count)
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    decrement () {
      this.$store.commit('decrement')
    },
    increment () {
      this.$store.commit('increment')
    },
    toLogin () {
      this.$local.save('loginFetch', {
        login: true,
        username: 'nihao'
      })
      // 此处做地址记录
      if (this.$route.query.Rurl) {
        this.$router.push({path: this.$route.query.Rurl})
      } else {
        this.$router.push({path: '/'})
      }
    }
  }
}
</script>

<style lang="scss">

</style>
