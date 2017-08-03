<template>
  <i :class="classes">
    <slot></slot>
  </i>
</template>

<script>
export default {
  name: 'icon',
  props: {
    name: {
      type: String,
      default: 'emoji',
      validator: function(value) {
        return ['check', 'close', 'emoji', 'favorfill', 'favor', 'loading', 'roundcheckfill', 'roundcheck', 'roundclosefill', 'roundclose', 'roundrightfill', 'roundright', 'search', 'timefill', 'time', 'unfold', 'warnfill', 'warn', 'likefill', 'like', 'order', 'back', 'more', 'scan', 'questionfill', 'question', 'top', 'pulldown', 'pullup', 'right', 'refresh', 'deletefill', 'delete', 'home', 'homefill', 'squarecheckfill', 'square', 'squarecheck', 'round', 'roundaddfill', 'roundadd', 'add', 'share'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    classes() {
      return [
        'yui-iconfont',
        `yui-icon-${this.name}`
      ]
    }
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';

@font-face {
  font-family: "iconfont";
  src: url('./iconfont/iconfont.eot'); /* IE9*/
  src: url('./iconfont/iconfont.eot#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('./iconfont/iconfont.woff') format('woff'), /* chrome, firefox */
  url('./iconfont/iconfont.ttf') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont/iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
}

.yui {
  &-iconfont {
    font-family: "iconfont" !important;
    font-size: 1em;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  &-icon {
    &-check:before { content: "\e645"; }

    &-close:before { content: "\e646"; }

    &-emoji:before { content: "\e64a"; }

    &-favorfill:before { content: "\e64b"; }

    &-favor:before { content: "\e64c"; }

    &-loading:before { content: "\e64f"; }

    &-roundcheckfill:before { content: "\e656"; }

    &-roundcheck:before { content: "\e657"; }

    &-roundclosefill:before { content: "\e658"; }

    &-roundclose:before { content: "\e659"; }

    &-roundrightfill:before { content: "\e65a"; }

    &-roundright:before { content: "\e65b"; }

    &-search:before { content: "\e65c"; }

    &-timefill:before { content: "\e65e"; }

    &-time:before { content: "\e65f"; }

    &-unfold:before { content: "\e661"; }

    &-warnfill:before { content: "\e662"; }

    &-warn:before { content: "\e663"; }

    &-likefill:before { content: "\e668"; }

    &-like:before { content: "\e669"; }

    &-order:before { content: "\e66c"; }

    &-back:before { content: "\e679"; }

    &-more:before { content: "\e684"; }

    &-scan:before { content: "\e689"; }

    &-questionfill:before { content: "\e690"; }

    &-question:before { content: "\e691"; }

    &-top:before { content: "\e69e"; }

    &-pulldown:before { content: "\e69f"; }

    &-pullup:before { content: "\e6a0"; }

    &-right:before { content: "\e6a3"; }

    &-refresh:before { content: "\e6a4"; }

    &-moreandroid:before { content: "\e6a5"; }

    &-deletefill:before { content: "\e6a6"; }

    &-delete:before { content: "\e6b4"; }

    &-home:before { content: "\e6b8"; }

    &-homefill:before { content: "\e6bb"; }

    &-squarecheckfill:before { content: "\e6d4"; }

    &-square:before { content: "\e6d5"; }

    &-squarecheck:before { content: "\e6d6"; }

    &-round:before { content: "\e6d7"; }

    &-roundaddfill:before { content: "\e6d8"; }

    &-roundadd:before { content: "\e6d9"; }

    &-add:before { content: "\e6da"; }

    &-share:before { content: "\e6f3"; }
  }
}
</style>