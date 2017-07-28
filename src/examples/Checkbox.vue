<template>
  <section>
    <checkbox title="选择题" :max="2" :values="values" :options="options" @on-change="handleChange"></checkbox>
  </section>
</template>

<script>
import { Checkbox } from 'components'

export default {
  data() {
    return {
      values: ['1'],
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
