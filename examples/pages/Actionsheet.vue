<template>
  <section>
    <cell-box title="Actinsheet">
      <x-switch v-model="normal" title="normal"></x-switch>
      <x-switch v-model="cancel" title="with cancel"></x-switch>
    </cell-box>
    <actionsheet :menus="menus" v-model="normal" @on-change="onChange"></actionsheet>
    <actionsheet :menus="menus" v-model="cancel" :showCancel="true" @on-change="onChange" @on-cancel="onCancel"></actionsheet>
  </section>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        { label: '选项一', value: 'value1', message: '<span>i am message</span>' },
        { label: '选项二', value: 'value2' },
        { label: '选项三', value: 'value3' }
      ],
      normal: false,
      cancel: false
    }
  },
  methods: {
    onChange(value) {
      console.log('clicked item:', value)
    },
    onCancel() {
      console.log('cancel')
    }
  }
}
</script>