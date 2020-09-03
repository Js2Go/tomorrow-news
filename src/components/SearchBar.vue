<template>
  <van-sticky>
    <van-search
      readonly
      show-action
      shape="round"
      class="custom-search"
      placeholder="请输入搜索关键词"
      background="linear-gradient(to right, #4fc08d, #07c160)"
      @click="toSearchPage"
    >
      <template #action>
        <van-button
          round
          icon="plus"
          color="linear-gradient(to right, #ff6034, #ee0a24)"
          @click="show"
        />
      </template>
    </van-search>
  </van-sticky>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'SearchBar',
  setup(props, ctx) {
    const state = reactive({
      show: false
    })

    const toSearchPage = () => {
      
    }

    const show = () => {
      ctx.emit('show', true)
    }

    return {
      toSearchPage,
      show
    }
  }
}
</script>

// <style lang="scss" scoped>
// .custom-search {
//   & >>> .van-search__action {
//     padding: 0;
//     margin: 0 7px;
//     border-radius: 50%;
//     transform: scale(0.8);
//     & >>> .button.van-button.van-button--default.van-button--normal.van-button--round {
//       font-size: 12px;
//     }
//   }
// }
// </style>

<style lang="scss">
.custom-search {
  .van-search__action {
    padding: 0;
    margin: 0 7px;
    border-radius: 50%;
    transform: scale(0.8);
    .button.van-button.van-button--default.van-button--normal.van-button--round {
      font-size: 12px;
    }
  }
}
</style>
