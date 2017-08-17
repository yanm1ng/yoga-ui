<template>
  <section>
    <card head-title="卡片标题" head-desc="描述描述" footer="查看更多">
      <img slot="icon" :src="logo" style="width: 20px; margin-right: 10px;">
      <div slot="body">
        <p>custom content</p>
        <p>custom content</p>
        <p>custom content</p>
      </div>
    </card>
    <card :has-head="false" footer="查看更多">
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
import logo from 'assets/logo.png'

export default {
  components: {
    Card
  },
  data() {
    return {
      logo
    }
  }
}
</script>
