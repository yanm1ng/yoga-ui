<template>
  <section style="margin: 10px;">
    <x-progress :percent="percent">{{ percent }}%</x-progress>
    <x-progress :percent="percent" color="#f04134">{{ percent }}%</x-progress>
    <x-progress type="circle" :percent="percent" style="width: 120px; height: 120px;">{{ percent }}%</x-progress>
    <x-button @on-click="handleClick">Change Percent</x-button>
  </section>
</template>

<script>
import {
  XProgress,
  XButton
} from 'components'

export default {
  data() {
    return {
      percent: 60
    }
  },
  methods: {
    handleClick() {
      const { percent } = this
      if (percent === 100) {
        this.percent = 0
      } else {
        this.percent = percent + 10
      }
    }
  },
  components: {
    XProgress,
    XButton
  }
}
</script>
