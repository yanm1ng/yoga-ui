<template>
  <section :style="{ 'marginTop': '10px' }">
    <wing-blank size="sm">
      <div :style="styles">Block</div>
    </wing-blank>
    <br />
    <wing-blank>
      <div :style="styles">Block</div>
    </wing-blank>
    <br />
    <wing-blank size="lg">
      <div :style="styles">Block</div>
    </wing-blank>
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