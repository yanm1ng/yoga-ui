<template>
  <section>
    <x-marquee>
      <x-marquee-item>好消息好消息</x-marquee-item>
      <x-marquee-item>江南皮革厂倒闭了</x-marquee-item>
      <x-marquee-item>王八蛋黄鹤带着小姨子跑了</x-marquee-item>
    </x-marquee>
  </section>
</template>

<script>
import {
  XMarquee,
  XMarqueeItem
} from 'components'

export default {
  components: {
    XMarquee,
    XMarqueeItem
  }
}
</script>
