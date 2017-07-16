<template>
  <section :style="{ 'margin': '10px' }">
    <x-button>default</x-button>
    <x-button type="danger">danger</x-button>
    <x-button type="ghost">ghost</x-button>
    <x-button disabled>disabled</x-button>
  </section>
</template>

<script>
import {
  XButton
} from 'components'

export default {
  components: {
    XButton
  }
}
</script>