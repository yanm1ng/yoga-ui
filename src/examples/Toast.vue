<template>
  <section :style="{ 'margin': '10px' }">
    <x-button @on-click="handleToast('bottom')">Open Toast Bottom</x-button>
  </section>
</template>

<script>
import {
  XButton
} from 'components'

export default {
  components: {
    XButton
  },
  methods: {
    handleToast() {

    }
  }
}
</script>