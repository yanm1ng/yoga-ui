<template>
  <section>
    <cell-box title="所有组件">
      <cell :title="item.title" is-link v-for="(item, index) in demos" :key="item.title" @on-click="goRoute(index)"></cell>
    </cell-box>
  </section>
</template>

<script>
import {
  Cell,
  CellBox
} from 'components'

export default {
  components: {
    Cell,
    CellBox
  },
  data() {
    return {
      demos: [
        { 'title': 'Button', 'link': 'button' },
        { 'title': 'Cell', 'link': 'cell' },
        { 'title': 'Tab', 'link': 'tab' }
      ]
    }
  },
  methods: {
    goRoute(key) {
      const link = this.demos[key].link
      this.$router.push(link)
    }
  }
}
</script>