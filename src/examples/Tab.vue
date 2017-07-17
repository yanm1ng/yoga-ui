<template>
  <section :style="{ 'marginTop': '10px' }">
    <tab>
      <tab-item>已发货</tab-item>
      <tab-item>配送中</tab-item>
      <tab-item>待确认</tab-item>
    </tab>
  </section>
</template>

<script>
import {
  Tab,
  TabItem
} from 'components'

export default {
  components: {
    Tab,
    TabItem
  }
}
</script>