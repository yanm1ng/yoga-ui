<template>
  <section>
    <cell-box>
      <x-input title="姓名" v-model="value" placeholder="你叫什么"></x-input>
    </cell-box>
    <keyboard v-model="value"></keyboard>
  </section>
</template>

<script>
import {
  Keyboard,
  CellBox,
  XInput
} from 'components'

export default {
  data() {
    return {
      value: ''
    }
  },
  components: {
    Keyboard,
    CellBox,
    XInput
  }
}
</script>
