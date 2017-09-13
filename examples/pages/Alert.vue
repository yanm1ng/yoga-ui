<template>
  <section>
    <cell-box title="Alert">
      <x-switch v-model="open" title="normal"></x-switch>
    </cell-box>
    <alert v-model="open" content="你好吗？" title="温馨提示" @on-show="onShow" @on-hide="onHide"></alert>
  </section>
</template>

<script>
export default {
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