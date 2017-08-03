<template>
  <section>
    <picker :options="options"></picker>
  </section>
</template>

<script>
import { Picker } from 'components'

let options = []
for (let i = 2017; i > 1995; i--) {
  options.push({
    label: i,
    value: i
  })
}

export default {
  data() {
    return {
      options
    }
  },
  components: {
    Picker
  }
}
</script>

<style lang="scss">

</style>
