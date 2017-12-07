const parentMixin = {
  mounted() {
    if (typeof this.defaultValue !== 'undefined') {
      this.currentIndex = this.defaultValue
    } else if (typeof this.value !== 'undefined') {
      this.currentIndex = this.value
    } else {
      this.currentIndex = 0
    }
  },
  methods: {
    updateIndex() {
      if (this.$children && this.$children.length) {
        this.childLength = this.$children.length
        let children = this.$children
        for (let i = 0; i < children.length; i++) {
          children[i].childIndex = i
          if (children[i].childSelected) {
            this.currentIndex = i
          }
        }
      }
    }
  },
  props: {
    value: {
      type: Number
    },
    defaultValue: {
      type: Number
    }
  },
  watch: {
    currentIndex(val, oldVal) {
      oldVal > -1 && this.$children[oldVal] && (this.$children[oldVal].childSelected = false)
      val > -1 && this.$children[val] && (this.$children[val].childSelected = true)
      this.$emit('input', val)
      this.$emit('on-change', val, oldVal)
    },
    value(val) {
      this.currentIndex = val
    }
  },
  data() {
    return {
      currentIndex: -1,
      childLength: this.$children.length
    }
  }
}

const childMixin = {
  props: {
    selected: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.$parent.updateIndex()
  },
  beforeDestroy() {
    const $parent = this.$parent
    this.$nextTick(() => {
      $parent.updateIndex()
    })
  },
  methods: {
    onItemClick() {
      if (typeof this.disabled === 'undefined' || this.disabled === false) {
        this.childSelected = true
        this.$nextTick(() => {
          this.$emit('on-item-click', this.currentIndex)
        })
      }
    }
  },
  watch: {
    childSelected(val) {
      if (val) {
        this.$parent.currentIndex = this.childIndex
      }
    },
    selected(val) {
      this.childSelected = val
    }
  },
  data() {
    return {
      childIndex: -1,
      childSelected: this.selected
    }
  }
}

export {
  parentMixin,
  childMixin
}