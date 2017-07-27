<template>
  <section :style="{ 'margin': '10px' }">
    <badge text="8"></badge>
    <badge text="新消息"></badge>
    <badge></badge>
  </section>
</template>

<script>
import {
  Badge
} from 'components'

export default {
  components: {
    Badge
  }
}
</script>