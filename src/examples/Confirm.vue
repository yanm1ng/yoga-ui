<template>
  <section>
    <cell-box title="Alert">
      <x-switch v-model="open" title="normal"></x-switch>
    </cell-box>
    <confirm v-model="open" content="你好吗？" title="温馨提示" confirm-text="还不错" @on-show="onShow" @on-confirm="onConfirm"></confirm>
  </section>
</template>

<script>
import {
  XSwitch,
  Cell,
  CellBox,
  Confirm
} from 'components'

export default {
  components: {
    XSwitch,
    Cell,
    CellBox,
    Confirm
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    handleChange(val) {
      this.open = val
    },
    onShow() {
      console.log('on-show')
    },
    onConfirm() {
      console.log('on-confirm')
    }
  }
}
</script>