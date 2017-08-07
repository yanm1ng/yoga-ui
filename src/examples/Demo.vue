<template>
  <section>
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
        { title: 'Confirm', link: 'confirm' },
        { title: 'Flex', link: 'flex' },
        { title: 'Picker', link: 'picker' },
        { title: 'Grid', link: 'grid' },
        { title: 'Accordion', link: 'accordion' },
        { title: 'PopupPicker', link: 'popup-picker' },
        { title: 'Step', link: 'step' }
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