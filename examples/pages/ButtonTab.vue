<template>
  <wing-blank>
    <white-space />
    <button-tab @on-change="handleChange">
      <button-tab-item>全部</button-tab-item>
      <button-tab-item>热门</button-tab-item>
      <button-tab-item>最近</button-tab-item>
    </button-tab>
    <white-space />
    <button-tab :default-value="1" @on-change="handleChange">
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