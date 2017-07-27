<template>
  <cell-box title="Switch">
    <cell title="normal" :desc="value">
      <x-switch :value="value" @on-change="handleChange" slot="value"></x-switch>
    </cell>
    <cell title="disabled" value="asas">
      <x-switch :value="true" :disabled="true" @on-change="handleChange" slot="value"></x-switch>
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
      value: false
    }
  },
  methods: {
    handleChange(val) {
      this.value = val
    }
  }
}
</script>
