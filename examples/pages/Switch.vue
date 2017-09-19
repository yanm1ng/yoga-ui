<template>
  <cell-box title="Switch">
    <x-switch :value="value1" @on-change="handleChange" title="normal" :desc="value1+''"></x-switch>
    <x-switch :value="true" :disabled="true" title="disabled"></x-switch>
    <x-switch v-model="value2" title="v-model" :desc="value2+''"></x-switch>
  </cell-box>
</template>

<script>
export default {
  data() {
    return {
      value1: false,
      value2: false
    }
  },
  methods: {
    handleChange(val) {
      this.value1 = val
    }
  }
}
</script>
