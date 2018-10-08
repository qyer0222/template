<template>
    <div id="home">
        <clHeader></clHeader>
        <transition :name=names>
          <router-view class="flex-box"/>
        </transition>
    </div>
</template>
<script>
import clHeader from '../../components/cl-header/cl-header'
export default {
  components: {clHeader},
  data () {
    return {
      names: 'left'
    }
  },
  watch: {
    $route (to, from) {
      if (to.meta.index < from.meta.index) {
        this.names = 'right'
      } else {
        this.names = 'left'
      }
    }
  },
  created () {
    let info = this.$local.fetch('nihao')
    console.log(info)
  }
}
</script>
<style lang="scss">
    #home{
       font-size: 14px;
      //初始位置  left
      .left-enter{
        opacity: 1;
        transform: translateX(100%)
      }
      //结束位置
      .left-enter-to{
        transform: translateX(0);
      }
      //时间
      .left-enter-active,.left-leave-active{
        transition: 1s;
      }
      .left-leave-to{
        transform: translateX(-100%);
      }
      // right
      .right-enter{
        opacity: 1;
        transform: translateX(-100%)
      }
      //结束位置
      .right-enter-to{
        transform: translateX(0);
      }
      //时间
      .right-enter-active,.right-leave-active{
        transition: 1s;
      }
      .right-leave{
        transform: translateX(0);
      }
      .right-leave-to{
        transform: translateX(100%);
      }
    }
</style>
