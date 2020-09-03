<template>
  <div class="wrap">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        :loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <list-item
          v-for="item in data.data"
          :key="item.id"
          :data="item"
        />
      </van-list>
    </van-pull-refresh>
    <div class="occupation"></div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import ListItem from './ListItem.vue'

export default {
  name: 'List',
  components: {
    ListItem
  },
  emits: ['refresh', 'load'],
  props: {
    data: Object,
    refreshing: Boolean,
    loading: Boolean,
    finished: Boolean,
  },
  setup(props, ctx) {
    const onRefresh = () => {
      ctx.emit('refresh')
    }
  
    const onLoad = () => {
      ctx.emit('load')
    }

    return {
      onRefresh,
      onLoad
    }
  }
}
</script>

<style lang="scss" scoped>
.occupation {
  margin-bottom: 180px;
}
</style>
