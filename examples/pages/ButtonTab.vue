<template>
  <wing-blank>
    <button-tab @on-change="handleChange">
      <button-tab-item>全部</button-tab-item>
      <button-tab-item>热门</button-tab-item>
      <button-tab-item>最近</button-tab-item>
    </button-tab>
  </wing-blank>
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