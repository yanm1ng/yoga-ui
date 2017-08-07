<template>
  <section>
    <radio title="选择题1" :value="value1" :options="options" @on-change="handleChange1"></radio>
    <radio title="选择题2" position="right" :value="value2" :options="options" @on-change="handleChange2"></radio>
    <radio title="v-model" v-model="value3" :options="options"></radio>
  </section>
</template>

<script>
import { Radio } from 'components'

export default {
  data() {
    return {
      value1: '1',
      value2: '2',
      options: [
        { label: '选项一', value: '1' },
        { label: '选项二', value: '2' }
      ],
      value3: '1'
    }
  },
  methods: {
    handleChange1(val) {
      this.value1 = val
    },
    handleChange2(val) {
      this.value2 = val
    }
  },
  components: {
    Radio
  }
}
</script>
