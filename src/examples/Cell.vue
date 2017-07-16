<template>
  <section>
    <cell-box title="列表">
      <cell title="haha" is-link></cell>
      <cell title="haha" is-link></cell>
      <cell title="haha" is-link></cell>
    </cell-box>
    <cell-box title="列表">
      <cell title="haha" desc="asasa" value="asas"></cell>
    </cell-box>
  </section>
</template>

<script>
import {
  Cell,
  CellBox
} from 'components'

export default {
  components: {
    Cell,
    CellBox
  }
}
</script>