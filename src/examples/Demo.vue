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
        { title: 'Button', link: 'button' },
        { title: 'ButtonTab', link: 'button-tab' },
        { title: 'Cell', link: 'cell' },
        { title: 'Tab', link: 'tab' },
        { title: 'Popup', link: 'popup' },
        { title: 'Toast', link: 'toast' },
        { title: 'Icon', link: 'icon' },
        { title: 'ActionSheet', link: 'actionsheet' },
        { title: 'Badge', link: 'badge' },
        { title: 'Input', link: 'input' },
        { title: 'Switch', link: 'switch' },
        { title: 'Radio', link: 'radio' },
        { title: 'Checkbox', link: 'checkbox' },
        { title: 'Textarea', link: 'textarea' },
        { title: 'Alert', link: 'alert' },
        { title: 'Confirm', link: 'confirm' }
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