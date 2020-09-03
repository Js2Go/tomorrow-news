<template>
  <van-tab
    :name="data.id"
    :title="data.title"
  >
    <list
      :data="data"
      :loading="loading"
      :finished="finished"
      :refreshing="refreshing"
      @refresh="refresh"
      @load="load"
    />
  </van-tab>
</template>

<script>
import List from './List.vue'

export default {
  name: 'Tab',
  components: {
    List
  },
  props: {
    data: Object,
    refreshing: Boolean,
    loading: Boolean,
    finished: Boolean,
  },
  setup(props, ctx) {
    const refresh = () => {
      ctx.emit('refresh')
    }

    const load = () => {
      ctx.emit('load')
    }

    return {
      refresh,
      load
    }
  }
}
</script>

<style>

</style>