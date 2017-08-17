<template>
  <section>
    <cell-box>
      <x-input title="姓名" v-model="value1" placeholder="你叫什么"></x-input>
      <x-input title="手机号" type="tel" v-model="value2"></x-input>
      <x-input title="邮箱" type="email" v-model="value3"></x-input>
    </cell-box>
  </section>
</template>

<script>
import {
  CellBox,
  XInput
} from 'components'

export default {
  components: {
    CellBox,
    XInput
  },
  data() {
    return {
      value1: '',
      value2: '',
      value3: ''
    }
  }
}
</script>
