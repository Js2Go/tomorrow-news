<template>
  <van-tabs
    animated
    swipeable
    sticky
    offset-top="64px"
    v-model:active="state.active"
  >
    <tab
      v-for="tab in state.tabs"
      :key="tab.id"
      :data="tab"
      :loading="state.loading"
      :finished="state.finished"
      :refreshing="state.refreshing"
      @refresh="onRefresh"
      @load="onLoad"
    />
  </van-tabs>
</template>

<script>
import { reactive, onMounted } from 'vue'
import configTabs from '../config/tabs'
import Tab from './Tab.vue'

export default {
  name: 'Tabs',
  components: {
    Tab
  },
  setup() {
    const state = reactive({
      tabs: configTabs,
      active: configTabs[1].id,
      loading: false,
      finished: false,
      refreshing: false,
    })

    const onRefresh = () => {
      state.finished = false

      state.loading = true
      onLoad()
    }

    const onLoad = () => {
      setTimeout(() => {
        if (state.refreshing) {
          state.tabs.find(item => item.id === state.active).data = []
          state.refreshing = false
        }

        let flag = 1

        for (let i = 0; i < 5; i++, flag++) {
          // state.list.push(state.list.length + 1)
          state.tabs.find(item => item.id === state.active).data.push(...[
            {
              id: flag * i,
              title: flag * i
            },
            {
              id: flag * (i + 1),
              title: flag * (i + 1)
            },
            {
              id: flag * (i + 2),
              title: flag * (i + 2)
            },
            {
              id: flag * (i + 3),
              title: flag * (i + 3)
            },
            {
              id: flag * (i + 4),
              title: flag * (i + 5)
            },
            {
              id: flag * (i + 5),
              title: flag * (i + 5)
            }
          ])
        }
        console.log(state.tabs.find(item => item.id === state.active).data)
        state.loading = false

        if (state.tabs.find(item => item.id === state.active).data.length >= 40) {
          state.finished = true
        }
      }, 1000)
    }

    return {
      state,
      onRefresh,
      onLoad
    }
  }
}
</script>

<style>

</style>