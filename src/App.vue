<template>
  <div id="app">
    <transition mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      index: '/home',
      names: 'left'
    }
  },
  watch: {
    $router (to, from) {
      console.log(to.meta.index)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  .router-link-active{
    a{
      color: red;
    }
  }
  .v-enter{
    opacity: 0;
  }
  .v-enter-active{
    transition: all 1s ease;
  }
  .v-leave{
    opacity: 0;
  }
  .v-leave-active{
    transition: all 1s ease;
  }
}
</style>
