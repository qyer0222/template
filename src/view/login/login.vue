<template>
    <div class="login">
      这里是登陆页面
      <button @click="toLogin">一键登录</button>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    toLogin () {
      this.$local.save('nihao', {
        login: true,
        username: 'nihao'
      })
    }
  }
}
</script>

<style lang="scss">

</style>
