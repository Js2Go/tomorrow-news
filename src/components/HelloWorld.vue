<template>
  <h1>{{ msg }}</h1>
  <van-button
    type="primary"
    @dblclick="count"
  >
    count is: {{ state.count }}
  </van-button>
  <van-field
    colon
    readonly
    clickable
    label="验证码"
    v-model="state.pwd"
    @touchstart.stop="state.show = true"
  />
  <van-number-keyboard
    v-model="state.pwd"
    :show="state.show"
    :maxlength="6"
    @blur="state.show = false"
  />
</template>

<script>
import { reactive, ref, watchEffect } from 'vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup(_, ctx) {
    const state = reactive({
      count: 0,
      show: false,
      pwd: ''
    })

    const count = () => {
      state.count++
    }

    return {
      state,
      count
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  width: 100%;
}
</style>
