<template>
  <section>
    <white-space />
    <tab @on-change="handleChange">
      <tab-item>已发货</tab-item>
      <tab-item>配送中</tab-item>
      <tab-item>待确认</tab-item>
    </tab>
    <tab :value="1" :animate="false" :style="{ 'marginTop': '20px' }" @on-change="handleChange">
      <tab-item>已发货</tab-item>
      <tab-item>配送中</tab-item>
      <tab-item>待确认</tab-item>
    </tab>
    <tab :value="1" color="#eb4735" :style="{ 'marginTop': '20px' }" @on-change="handleChange">
      <tab-item>已发货</tab-item>
      <tab-item>配送中</tab-item>
      <tab-item disabled>待确认</tab-item>
    </tab>
  </section>
</template>

<script>
export default {
  methods: {
    handleChange(e) {
      console.log(e)
    }
  }
}
</script>