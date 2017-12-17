<template>
  <wing-blank>
   <p>
     <count-up :start-val="0" :end-val="2017"></count-up>
   </p>
   <p>
     <count-up :start="isStart" :start-val="0" :end-val="2017"></count-up>
   </p>
   <x-button @on-click="isStart = true">start</x-button>
  </wing-blank>
</template>

<script>
export default {
  data() {
    return {
      isStart: false
    }
  }
}
</script>
