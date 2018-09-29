<template>
    <div>
      <clLeftHeader></clLeftHeader>
      <transition>
        <router-view/>
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
