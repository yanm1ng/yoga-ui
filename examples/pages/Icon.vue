<template>
  <section>
    <grid :rows="4" v-for="(list, index) in icons" :key="index">
      <grid-item v-for="icon in list" :key="icon" :icon="icon" :label="icon"></grid-item>
    </grid>
  </section>
</template>

<script>
export default {
  data() {
    return {
      icons: this.split([
        'check', 'close', 'emoji', 'favorfill', 'favor', 'loading', 'roundcheckfill', 'roundcheck', 'roundclosefill', 'roundclose', 'roundrightfill', 'roundright', 'search', 'timefill', 'time', 'unfold', 'warnfill', 'warn', 'likefill', 'like', 'order', 'back', 'more', 'scan', 'questionfill', 'question', 'top', 'pulldown', 'pullup', 'right', 'refresh', 'deletefill', 'delete', 'home', 'homefill', 'squarecheckfill', 'square', 'squarecheck', 'round', 'roundaddfill', 'roundadd', 'add', 'share'
      ])
    }
  },
  methods: {
    split(array) {
      let chunks = []
      let count = Math.ceil(array.length / 4)
      while (count > 0) {
        chunks.push(array.slice((count - 1) * 4, count * 4))
        count--
      }
      chunks = chunks.reverse()
      const lastList = chunks[chunks.length - 1]
      const lastLength = lastList.length
      if (lastLength < 4) {
        for (let i = 0; i < 4 - lastLength; i++) {
          lastList.push('emoji')
        }
      }
      return chunks
    }
  }
}
</script>

<style lang="scss">
.icon-list {
  list-style: none;
  width: 100%;
  li {
    font-size: 20px;
    float: left;
    text-align: center;
    list-style: none;
    margin: 10px;
    width: 72px;
    div {
      color: #666;
      font-size: 14px;
      line-height: 1.8;
    }
  }
}
</style>
