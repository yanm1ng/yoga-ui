<template>
  <section>
    <cell-box title="PopupPicker">
      <x-switch v-model="open1" title="default-value"></x-switch>
      <x-switch v-model="open2" title="normal"></x-switch>
    </cell-box>
    <popup-picker v-model="open1" :pickers="pickers" :default-value="value"></popup-picker>
    <popup-picker v-model="open2" :pickers="pickers" :value="value" @on-change="onChange"></popup-picker>
  </section>
</template>

<script>
const year = ['2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007']
const month = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
let pickers = []

pickers.push({
  title: 'year',
  options: year.map(item => {
    return {
      label: item,
      value: item
    }
  })
})

pickers.push({
  title: 'month',
  options: month.map(item => {
    return {
      label: item,
      value: item
    }
  })
})

export default {
  data() {
    return {
      open1: false,
      open2: false,
      value: {
        year: '2012',
        month: '8'
      },
      pickers
    }
  },
  methods: {
    onChange(value) {
      console.log(value)
      this.value = value
    }
  }
}
</script>
