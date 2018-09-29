<template>
  <div id="app">
    <transition>
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
