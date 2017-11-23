<template>
  <wing-blank>
    <step :current="current">
      <step-item title="待发货"></step-item>
      <step-item title="配送中"></step-item>
      <step-item title="确认收货"></step-item>
      <step-item title="待评价"></step-item>
    </step>
    <step :current="current" direction="vertical" :style="{ 'height': '5rem' }">
      <step-item title="待发货"></step-item>
      <step-item title="配送中"></step-item>
      <step-item title="确认收货"></step-item>
      <step-item title="待评价"></step-item>
    </step>
    <x-button :style="{ 'marginTop': '30px' }" @on-click="handleNext">Next Step</x-button>
  </wing-blank>
</template>

<script>
export default {
  data() {
    return {
      current: 0
    }
  },
  methods: {
    handleNext() {
      const { current } = this
      if (current === 4) {
        this.current = 0
      } else {
        this.current = current + 1
      }
    }
  }
}
</script>
