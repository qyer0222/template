<template>
    <div class="flex">
      <keep-alive>
      <clLeftHeader class="left-box"></clLeftHeader></keep-alive>
      <transition mode="out-in">
        <router-view class="flex-right"/>
      </transition>
    </div>
</template>

<script>
import clLeftHeader from '../../../components/cl-left-header/cl-left-header'
export default {
  components: {clLeftHeader},
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
