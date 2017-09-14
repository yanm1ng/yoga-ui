<template>
  <section :style="{ 'marginTop': '10px' }">
    <button-tab @on-change="handleChange">
      <button-tab-item>全部</button-tab-item>
      <button-tab-item>热门</button-tab-item>
      <button-tab-item>最近</button-tab-item>
    </button-tab>
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