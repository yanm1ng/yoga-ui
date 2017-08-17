<template>
  <section>
    <checkbox title="选择题" :values="values1" :options="options" @on-change="handleChange"></checkbox>
    <checkbox title="选择题(最多2个)" :max="2" :values="values2" :options="options" @on-change="handleChange"></checkbox>
  </section>
</template>

<script>
import { Checkbox } from 'components'

export default {
  data() {
    return {
      values1: ['1'],
      values2: [],
      options: [
        { label: '选项一', value: '1' },
        { label: '选项二', value: '2' },
        { label: '选项三', value: '3' }
      ]
    }
  },
  methods: {
    handleChange(values) {
      console.log(values)
    }
  },
  components: {
    Checkbox
  }
}
</script>
