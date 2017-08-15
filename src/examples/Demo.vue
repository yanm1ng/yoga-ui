<template>
  <section>
    <div class="demo-header">
      <img class="demo-logo" src="../assets/logo.png" />
      <p>Vue.js移动端组件库</p>
    </div>
    <grid v-for="(grids, index) in demos" :key="index">
      <grid-item v-for="item in grids" :key="item.title" @on-item-click="goRoute(item.link)" :label="item.title"></grid-item>
    </grid>
  </section>
</template>

<script>
import {
  Grid,
  GridItem
} from 'components'

export default {
  components: {
    Grid,
    GridItem
  },
  data() {
    return {
      demos: this.split([
        { title: 'Accordion', link: 'accordion' },
        { title: 'ActionSheet', link: 'actionsheet' },
        { title: 'Alert', link: 'alert' },
        { title: 'Badge', link: 'badge' },
        { title: 'Button', link: 'button' },
        { title: 'ButtonTab', link: 'button-tab' },
        { title: 'Card', link: 'card' },
        { title: 'Cell', link: 'cell' },
        { title: 'Checkbox', link: 'checkbox' },
        { title: 'Confirm', link: 'confirm' },
        { title: 'Divider', link: 'divider' },
        { title: 'Flex', link: 'flex' },
        { title: 'Grid', link: 'grid' },
        { title: 'Icon', link: 'icon' },
        { title: 'Input', link: 'input' },
        { title: 'Keyboard', link: 'keyboard' },
        { title: 'Notify', link: 'notify' },
        { title: 'Popup', link: 'popup' },
        { title: 'Picker', link: 'picker' },
        { title: 'PopupPicker', link: 'popup-picker' },
        { title: 'Progress', link: 'progress' },
        { title: 'Radio', link: 'radio' },
        { title: 'Switch', link: 'switch' },
        { title: 'Select', link: 'select' },
        { title: 'Step', link: 'step' },
        { title: 'Tab', link: 'tab' },
        { title: 'TabBar', link: 'tab-bar' },
        { title: 'Textarea', link: 'textarea' },
        { title: 'Toast', link: 'toast' }
      ])
    }
  },
  methods: {
    goRoute(link) {
      this.$router.push(link)
    },
    split(array) {
      let chunks = []
      let count = Math.ceil(array.length / 3)
      while (count > 0) {
        chunks.push(array.slice((count - 1) * 3, count * 3))
        count--
      }
      chunks = chunks.reverse()
      const lastList = chunks[chunks.length - 1]
      const lastLength = lastList.length
      if (lastLength < 3) {
        for (let i = 0; i < 3 - lastLength; i++) {
          lastList.push({
            title: '----',
            link: ''
          })
        }
      }
      return chunks
    }
  }
}
</script>

<style lang="scss">
.demo {
  &-header {
    padding: 40px 0;
    text-align: center;
    font-size: 16px;
  }
  &-logo {
    display: inline-block;
    width: 60px;
    height: 60px;
  }
}
</style>