<template>
  <div class="icon-wrap">
    <van-icon :name="action.icon" size="3rem" />
    <span class="title">{{ action.title }}</span>
  </div>
</template>

<script>
export default {
  name: 'ActionItem',
  props: {
    action: Object
  }
}
</script>

<style lang="scss" scoped>
.icon-wrap {
  display: flex;
  flex-direction: column;
  margin-right: 80px;

  .title {
    font-size: 14px;
  }
}
</style>
