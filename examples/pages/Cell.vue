<template>
  <section>
    <cell-box title="列表">
      <cell title="haha" value="asas" is-link></cell>
      <cell title="haha" is-link></cell>
      <cell title="haha" is-link>
        <img :src="logo" slot="icon" :style="{ 'width': '20px', 'marginRight': '10px' }">
      </cell>
    </cell-box>
    <cell-box title="列表">
      <cell title="haha" desc="asasa" value="asas"></cell>
      <cell title="haha" desc="asasa" value="asas"></cell>
    </cell-box>
  </section>
</template>

<script>
import {
  Cell,
  CellBox
} from 'components'
import logo from 'assets/logo.png'

export default {
  components: {
    Cell,
    CellBox
  },
  data() {
    return {
      logo
    }
  }
}
</script>