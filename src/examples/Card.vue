<template>
  <section>
    <card head-title="卡片标题" head-desc="描述描述" footer="查看更多">
      <img slot="icon" src="../assets/logo.png" :style="{ 'width': '20px', 'marginRight': '10px' }">
      <div slot="body">
        <p>custom content</p>
        <p>custom content</p>
        <p>custom content</p>
      </div>
    </card>
    <card :has-head="false" footer="查看更多">
      <img slot="icon" src="../assets/logo.png" :style="{ 'width': '20px', 'marginRight': '10px' }">
      <div slot="body">
        <p>custom content</p>
        <p>custom content</p>
        <p>custom content</p>
      </div>
    </card>
  </section>
</template>

<script>
import {
  Card
} from 'components'

export default {
  components: {
    Card
  }
}
</script>
