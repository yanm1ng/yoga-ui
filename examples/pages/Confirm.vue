<template>
  <section>
    <cell-box title="Alert">
      <x-switch v-model="open1" title="default"></x-switch>
      <x-switch v-model="open2" title="footer-text"></x-switch>
    </cell-box>
    <confirm v-model="open1" content="你好吗？" title="温馨提示" @on-show="onShow" @on-confirm="onConfirm"></confirm>
    <confirm v-model="open2" content="你好吗？" title="温馨提示" cancel-text="不好" confirm-text="还不错" @on-show="onShow" @on-confirm="onConfirm"></confirm>
  </section>
</template>

<script>
export default {
  data() {
    return {
      open1: false,
      open2: false
    }
  },
  methods: {
    onShow() {
      console.log('on-show')
    },
    onConfirm() {
      console.log('on-confirm')
    }
  }
}
</script>