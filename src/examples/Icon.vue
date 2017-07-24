<template>
  <section>
    <ul class="icon-list">
      <li v-for="icon in icons" :key="icon">
        <icon :name="icon"></icon>
        <div>{{ icon }}</div>
      </li>
    </ul>
  </section>
</template>

<script>
import { Icon } from 'components'

export default {
  components: {
    Icon
  },
  data() {
    return {
      icons: [
        'check', 'close', 'emoji', 'favorfill', 'favor', 'loading', 'roundcheckfill', 'roundcheck', 'roundclosefill', 'roundclose', 'roundrightfill', 'roundright', 'search', 'timefill', 'time', 'unfold', 'warnfill', 'warn', 'likefill', 'like', 'order', 'back', 'more', 'scan', 'questionfill', 'question', 'top', 'pulldown', 'pullup', 'right', 'refresh', 'deletefill', 'delete', 'home', 'homefill', 'squarecheckfill', 'square', 'squarecheck', 'round', 'roundaddfill', 'roundadd', 'add', 'share'
      ]
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
