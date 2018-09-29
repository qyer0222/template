<template>
    <div id="home">
        <clHeader></clHeader>
        <transition>
          <router-view/>
        </transition>
    </div>
</template>
<script>
import clHeader from '../../components/cl-header/cl-header'
export default {
  components: {clHeader},
  data () {
    return {

    }
  }
}
</script>
<style lang="scss">
    #home{
       font-size: 14px;
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
