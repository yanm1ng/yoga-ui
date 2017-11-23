<template>
  <wing-blank>
    <x-button @on-click="handlePopup('bottom')">Open Popup Bottom</x-button>
    <x-button @on-click="handlePopup('top')">Open Popup Top</x-button>
    <x-button @on-click="handlePopup('left')">Open Popup Left</x-button>
    <x-button @on-click="handlePopup('center')">Open Popup Center</x-button>
    <x-button @on-click="handlePopup('full')">Open Popup Full</x-button>
    <popup :open="bottom" @on-close="handlePopup('bottom')">
      <div>hello</div>
    </popup>
    <popup :open="top" direction="top" @on-close="handlePopup('top')">
      <div>hello</div>
    </popup>
    <popup :open="left" direction="left" @on-close="handlePopup('left')">
      <div>hello</div>
    </popup>
    <popup :open="center" direction="center" @on-close="handlePopup('center')">
      <div>hello</div>
    </popup>
    <popup :open="full" direction="bottom" :full="true" @on-close="handlePopup('full')">
      <div>hello</div>
    </popup>
  </wing-blank>
</template>

<script>
export default {
  data() {
    return {
      bottom: false,
      top: false,
      left: false,
      center: false,
      full: false
    }
  },
  methods: {
    handlePopup(direction) {
      this[direction] = !this[direction]
    }
  }
}
</script>