<template>
  <section :style="{ 'margin': '10px' }">
    <x-button @on-click="handleActionsheet('normal')">Open Actionsheet</x-button>
    <x-button @on-click="handleActionsheet('cancel')">Open Actionsheet(Cancel)</x-button>
    <actionsheet :menus="menus" :open="normal" @on-close="handleActionsheet('normal')" @on-change="onChange"></actionsheet>
    <actionsheet :menus="menus" v-model="cancel" :showCancel="true" @on-change="onChange" @on-cancel="onCancel"></actionsheet>
  </section>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        { label: '选项一', value: 'value1' },
        { label: '选项二', value: 'value2' },
        { label: '选项三', value: 'value3' }
      ],
      normal: false,
      cancel: false
    }
  },
  methods: {
    handleActionsheet(type) {
      this[type] = !this[type]
    },
    onChange(value) {
      console.log('clicked item:', value)
    },
    onCancel() {
      console.log('cancel')
    }
  }
}
</script>