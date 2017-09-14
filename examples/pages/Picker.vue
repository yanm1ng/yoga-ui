<template>
  <section>
    <picker :options="options" v-model="value1" @on-change="handleChange"></picker>
    <br>
    <picker :options="options" v-model="value2" placeholder="请选择" @on-change="handleChange"></picker>
  </section>
</template>

<script>
let options = []
for (let i = 2017; i > 1995; i--) {
  options.push({
    label: i + '',
    value: i + ''
  })
}

export default {
  data() {
    return {
      options,
      value1: '2014',
      value2: ''
    }
  },
  methods: {
    handleChange(val) {
      console.log(val)
    }
  }
}
</script>
