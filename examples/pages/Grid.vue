<template>
  <section>
    <white-space />
    <p>cell = 2</p>
    <grid title="row = 2" :rows="2">
      <grid-item label="Grid" icon="emoji"></grid-item>
      <grid-item label="Grid" icon="emoji"></grid-item>
    </grid>
    <p>cell = 3</p>
    <grid title="row = 3" :rows="3">
      <grid-item label="Grid"></grid-item>
      <grid-item label="Grid"></grid-item>
      <grid-item label="Grid"></grid-item>
    </grid>
    <grid :rows="3">
      <grid-item label="Grid"></grid-item>
      <grid-item label="Grid"></grid-item>
      <grid-item label="Grid"></grid-item>
    </grid>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
p {
  margin: 10px 0;
  padding-left: 15px;
  padding-right: 15px;
  color: #999999;
  font-size: 14px;
}
</style>
