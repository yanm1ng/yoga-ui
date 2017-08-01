<template>
  <section :style="{ 'marginTop': '10px' }">
    <flex>
      <flex-item><div class="flex-demo">1</div></flex-item>
      <flex-item><div class="flex-demo">1</div></flex-item>
    </flex>
    <br>
    <flex>
      <flex-item><div class="flex-demo">2</div></flex-item>
      <flex-item><div class="flex-demo">2</div></flex-item>
      <flex-item><div class="flex-demo">2</div></flex-item>
    </flex>
    <br>
    <flex :gutter="0">
      <flex-item><div class="flex-demo">no gutter</div></flex-item>
      <flex-item><div class="flex-demo">no gutter</div></flex-item>
      <flex-item><div class="flex-demo">no gutter</div></flex-item>
    </flex>
    <br>
    <flex>
      <flex-item :span="2"><div class="flex-demo">2/12</div></flex-item>
      <flex-item :span="4"><div class="flex-demo">4/12</div></flex-item>
      <flex-item><div class="flex-demo">auto</div></flex-item>
    </flex>
  </section>
</template>

<script>
import {
  Flex,
  FlexItem
} from 'components'

export default {
  components: {
    Flex,
    FlexItem
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';
.flex-demo {
  text-align: center;
  color: $white-color;
  background-color: $primary-color;
  border-radius: 4px;
  font-size: 16px;
  padding: 5px 0;
}
</style>