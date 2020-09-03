<template>
  <search-bar @show="show" />
  <action-sheet v-model:show="state.show" />
  <tabs />
</template>

<script>
import { reactive } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'
import SearchBar from '../components/SearchBar.vue'
import ActionSheet from '../components/ActionSheet.vue'
import Tabs from '../components/Tabs.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    SearchBar,
    ActionSheet,
    Tabs
  },
  setup() {
    const state = reactive({
      show: false
    })

    const show = flag => {
      state.show = flag
    }

    return {
      state,
      show
    }
  }
}
</script>
