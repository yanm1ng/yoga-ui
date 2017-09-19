<template>
  <section>
    <cell-box title="Notify">
      <x-switch v-model="open1" title="normal"></x-switch>
      <x-switch v-model="open2" title="auto-close"></x-switch>
      <x-switch v-model="open3" title="success"></x-switch>
      <x-switch v-model="open4" title="info"></x-switch>
    </cell-box>
    <notify v-model="open1" :auto-close="false">重要提示</notify>
    <notify v-model="open2">重要提示</notify>
    <notify v-model="open3" status="success">重要提示</notify>
    <notify v-model="open4" status="info">重要提示</notify>
  </section>
</template>

<script>
export default {
  data() {
    return {
      open1: false,
      open2: false,
      open3: false,
      open4: false
    }
  }
}
</script>
