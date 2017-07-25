<template>
  <section :style="{ 'margin': '10px' }">
    <x-button @on-click="handleToast('center')">Open Toast Center</x-button>
    <x-button @on-click="handleToast('bottom')">Open Toast Bottom</x-button>
    <x-button @on-click="handleToast('icon')">Open Toast Icon</x-button>
    <toast :show="center" @on-close="handleToast('center')">恭喜你答对了</toast>
    <toast :show="bottom" direction="bottom" @on-close="handleToast('bottom')">恭喜你答对了</toast>
    <toast :show="icon" status="success" @on-close="handleToast('icon')">恭喜你答对了</toast>
  </section>
</template>

<script>
import {
  XButton,
  Toast
} from 'components'

export default {
  components: {
    XButton,
    Toast
  },
  data() {
    return {
      center: false,
      bottom: false,
      icon: false
    }
  },
  methods: {
    handleToast(direction) {
      this[direction] = !this[direction]
    }
  }
}
</script>