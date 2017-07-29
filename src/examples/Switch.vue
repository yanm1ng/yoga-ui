<template>
  <cell-box title="Switch">
    <cell title="normal" :desc="value1">
      <x-switch :value="value1" slot="value" @on-change="handleChange"></x-switch>
    </cell>
    <cell title="disabled">
      <x-switch :value="true" :disabled="true" slot="value"></x-switch>
    </cell>
    <cell title="v-model" :desc="value2">
      <x-switch v-model="value2" slot="value"></x-switch>
    </cell>
  </cell-box>
</template>

<script>
import {
  XSwitch,
  Cell,
  CellBox
} from 'components'

export default {
  components: {
    XSwitch,
    Cell,
    CellBox
  },
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
