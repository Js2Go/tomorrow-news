<template>
  <van-action-sheet title="发布" :show="show">
    <div class="actions-wrap">
      <action-item
        v-for="action in actions"
        :key="action.id"
        :action="action"
      />
    </div>
  </van-action-sheet>
</template>

<script>
import { markRaw } from 'vue'
import ActionItem from './ActionItem.vue'
import configActions from '../config/actions'

export default {
  name: 'ActionSheet',
  components: {
    ActionItem
  },
  props: {
    show: Boolean
  },
  setup() {
    const actions = markRaw(configActions)

    return {
      actions
    }
  }
}
</script>

<style lang="scss" scoped>
.actions-wrap {
  padding: 50px 100px 200px;
  display: flex;
}
</style>
