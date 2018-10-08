<template>
    <div id="cl-header" class="cl-header cl">
      <router-link tag="div" to="/" exact>
        <a><i class="iconfont icon-edit"></i>page1页面</a>
      </router-link>
      <router-link tag="div" to="/homePage2">
        <a>page2页面</a>
      </router-link>
      <router-link tag="div" to="/page1">
        <a>外侧page1页面</a>
      </router-link>
      <div class="fr" @click="outPage">退出</div>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    outPage () {
      this.$local.save('nihao', {
        login: null,
        username: null
      })
      this.$router.push({path: '/login'})
    }
  }
}
</script>

<style lang="scss">
  .cl-header{
    div{
      float: left;
      height: 80px;
      line-height: 80px;
      width: 200px;
      text-align: center;
    }
  }
</style>
