<template>
  <section>
    <cell-box title="Toast">
      <x-switch v-model="center" title="center"></x-switch>
      <x-switch v-model="bottom" title="bottom"></x-switch>
      <x-switch v-model="icon" title="with icon"></x-switch>
      <x-switch v-model="loading" title="loading"></x-switch>
    </cell-box>
    <toast v-model="center">恭喜你答对了</toast>
    <toast v-model="bottom" direction="bottom" @on-close="handleToast('bottom')">恭喜你答对了</toast>
    <toast v-model="icon" status="success" @on-close="handleToast('icon')">恭喜你答对了</toast>
    <toast v-model="loading" status="loading" @on-close="handleToast('loading')">加载中</toast>
  </section>
</template>

<script>
export default {
  data() {
    return {
      center: false,
      bottom: false,
      icon: false,
      loading: false
    }
  }
}
</script>