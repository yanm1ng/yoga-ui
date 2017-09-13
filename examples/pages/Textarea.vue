<template>
  <section>
    <cell-box title="single">
      <x-textarea v-model="value1" placeholder="评论" :max="50"></x-textarea>
    </cell-box>
    <cell-box title="with input">
      <x-input title="姓名" v-model="value2"></x-input>
      <x-textarea v-model="value3" placeholder="家庭住址"></x-textarea>
    </cell-box>
    <cell-box title="autosize">
      <x-textarea v-model="value4" placeholder="高度自动" :rows="1" auto-size></x-textarea>
    </cell-box>
  </section>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: ''
    }
  }
}
</script>
