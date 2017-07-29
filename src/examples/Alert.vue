<template>
  <section>
    <cell-box title="Alert">
      <cell title="normal">
        <x-switch :value="open" @on-change="handleChange" slot="value"></x-switch>
      </cell>
    </cell-box>
    <alert v-model="open" content="你好吗？" title="温馨提示" @on-show="onShow" @on-hide="onHide"></alert>
  </section>
</template>

<script>
import {
  XSwitch,
  Cell,
  CellBox,
  Alert
} from 'components'

export default {
  components: {
    XSwitch,
    Cell,
    CellBox,
    Alert
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
    onHide() {
      console.log('on-hide')
    }
  }
}
</script>