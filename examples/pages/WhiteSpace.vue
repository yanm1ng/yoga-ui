<template>
  <section :style="{ 'marginTop': '10px' }">
    <white-space size="sm" />
    <div :style="styles">Block</div>
    <white-space />
    <div :style="styles">Block</div>
    <white-space size="lg" />
    <div :style="styles">Block</div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      styles: {
        backgroundColor: '#108ee9',
        height: '30px',
        lineHeight: '30px',
        textAlign: 'center',
        width: '100%',
        fontSize: '14px',
        color: '#fff'
      }
    }
  }
}
</script>