<template>
  <section :style="{ 'marginTop': '10px' }">
    <button-tab @on-change="handleChange">
      <button-tab-item>全部</button-tab-item>
      <button-tab-item>热门</button-tab-item>
      <button-tab-item disabled>最近</button-tab-item>
    </button-tab>
  </section>
</template>

<script>
import {
  ButtonTab,
  ButtonTabItem
} from 'components'

export default {
  components: {
    ButtonTab,
    ButtonTabItem
  },
  methods: {
    handleChange(e) {
      console.log(e)
    }
  }
}
</script>