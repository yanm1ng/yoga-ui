<template>
  <section>
    <cell-box title="Select">
      <x-select title="学历1" default-value="高中" v-model="value1" :options="options"></x-select>
      <x-select title="学历2" type="picker" v-model="value2" :options="options"></x-select>
    </cell-box>
  </section>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { label: '初中', value: '初中' },
        { label: '高中', value: '高中' },
        { label: '本科', value: '本科' },
        { label: '研究生', value: '研究生' }
      ],
      value1: '',
      value2: ''
    }
  }
}
</script>