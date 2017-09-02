<template>
  <section>
    <popover style="margin: 40px;" content="pop at top">
      <span>pop at top</span>
    </popover>
    <popover style="margin: 40px;" direction="bottom" content="pop at bottom">
      <span>pop at bottom</span>
    </popover>
    <popover style="margin: 40px;" direction="left" content="pop at left">
      <span>pop at left</span>
    </popover>
    <popover style="margin: 40px;" direction="right" content="pop at right">
      <span>pop at right</span>
    </popover>
  </section>
</template>

<script>
import {
  Popover
} from 'components'

export default {
  components: {
    Popover
  }
}
</script>
