<template>
  <van-tabbar
    route
    active-color="#07c160"
    v-model="state.tab"
    @change="change"
  >
    <van-tabbar-item
      replace
      v-for="tab in tabs"
      :key="tab.path"
      :to="tab.path"
      :name="tab.meta.name"
      :icon="tab.meta.icon"
      @dblclick="refersh"
    >
      {{ tab.meta.title }}
    </van-tabbar-item>
  </van-tabbar>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script>
import { reactive, markRaw } from 'vue'
import { tabRoutes } from './router/routes'

export default {
  setup() {
    const state = reactive({
      tab: 'home'
    })

    const tabs = markRaw(tabRoutes)

    const change = tab => {
      state.tab = tab
    }

    const refersh = () => {
      console.log(state.tab)
    }

    return {
      state,
      tabs,
      change,
      refersh
    }
  }
}
</script>
