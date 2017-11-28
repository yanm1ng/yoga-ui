<template>
  <section>
    <checkbox title="选择题(default-value)" :default-values="values0" :options="options"></checkbox>
    <checkbox title="选择题(normal)" :values="values1" :options="options" @on-change="handleChange"></checkbox>
    <checkbox title="选择题(max:2)" :max="2" :default-values="values2" :options="options"></checkbox>
  </section>
</template>

<script>
export default {
  data() {
    return {
      values0: ['1', '2'],
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
      console.log('item2 values:', values)
      this.values1 = values
    }
  }
}
</script>
